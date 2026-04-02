"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

const initialState: FormState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);

  async function handleSubmit(formData: FormData) {
    setState({ status: "loading", message: "Sending your inquiry..." });

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      organization: String(formData.get("organization") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setState({
        status: "success",
        message: result.message || "Inquiry sent successfully.",
      });

      const form = document.getElementById("contact-form") as HTMLFormElement | null;
      form?.reset();
    } catch (error) {
      setState({
        status: "error",
        message: error instanceof Error ? error.message : "Failed to send inquiry.",
      });
    }
  }

  return (
    <form
      id="contact-form"
      action={handleSubmit}
      className="rounded-[1.75rem] border border-white/10 bg-[#071224] p-6 md:p-7"
    >
      <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">Project Inquiry</div>
      <div className="mt-3 text-3xl font-black">Let’s build something extraordinary.</div>
      <div className="mt-6 grid gap-4">
        <input
          name="name"
          placeholder="Your name"
          required
          className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none transition focus:border-cyan-300/40"
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
          required
          className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none transition focus:border-cyan-300/40"
        />
        <input
          name="organization"
          placeholder="Organization"
          className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none transition focus:border-cyan-300/40"
        />
        <textarea
          name="message"
          placeholder="Tell us about your project"
          rows={5}
          required
          className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none transition focus:border-cyan-300/40"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-70"
          disabled={state.status === "loading"}
        >
          {state.status === "loading" ? "Sending..." : "Send Inquiry"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      {state.message ? (
        <p
          className={`mt-4 text-sm ${
            state.status === "success"
              ? "text-cyan-300"
              : state.status === "error"
                ? "text-red-300"
                : "text-white/65"
          }`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
