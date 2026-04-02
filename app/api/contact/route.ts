import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_EMAIL || "cynexsysites@gmail.com";

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: `New Cynexsys inquiry from ${body.name || "Website visitor"}`,
      text: `
Name: ${body.name || ""}
Email: ${body.email || ""}
Organization: ${body.organization || ""}
Organization type: ${body.organizationType || ""}
Project type: ${body.projectType || ""}
Budget: ${body.budget || ""}
Timeline: ${body.timeline || ""}
Goals: ${body.goals || ""}
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ ok: false, error: "Failed to send email" }, { status: 500 });
  }
}
