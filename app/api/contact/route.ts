import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { contactInfo } from "@/components/data";

type ContactPayload = {
  name?: string;
  email?: string;
  organization?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const organization = (body.organization || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and project details are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const targetEmail = process.env.CONTACT_TO_EMAIL || contactInfo.email;

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.log("[CONTACT_FALLBACK]", { name, email, organization, message, targetEmail });
      return NextResponse.json({
        message:
          "Inquiry captured in development mode. Add SMTP environment variables to send live emails in production.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL || smtpUser,
      to: targetEmail,
      replyTo: email,
      subject: `New Cynexsys inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Organization: ${organization || "Not provided"}`,
        "",
        "Project details:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ message: "Thanks — your inquiry has been sent." });
  } catch (error) {
    console.error("CONTACT_API_ERROR", error);
    return NextResponse.json(
      { message: "Failed to process your request. Please try again." },
      { status: 500 },
    );
  }
}
