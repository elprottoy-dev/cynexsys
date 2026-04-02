"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  organization: "",
  projectType: "",
  budget: "",
  timeline: "",
  organizationType: "",
  goals: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  function update(key: keyof typeof initialState, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" className="field" required />
        <input value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="Your email" className="field" required />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input value={form.organization} onChange={(e) => update("organization", e.target.value)} placeholder="Organization" className="field" />
        <input value={form.organizationType} onChange={(e) => update("organizationType", e.target.value)} placeholder="Organization type" className="field" />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <input value={form.projectType} onChange={(e) => update("projectType", e.target.value)} placeholder="Project type" className="field" />
        <input value={form.budget} onChange={(e) => update("budget", e.target.value)} placeholder="Budget range" className="field" />
        <input value={form.timeline} onChange={(e) => update("timeline", e.target.value)} placeholder="Timeline" className="field" />
      </div>
      <textarea value={form.goals} onChange={(e) => update("goals", e.target.value)} placeholder="Goals, use case, and what success looks like" rows={6} className="field" required />
      <button type="submit" className="rounded-2xl bg-cyan-300 px-5 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-[1px]">
        {status === "sending" ? "Sending..." : "Send inquiry"}
      </button>
      {status === "sent" ? <p className="text-sm text-cyan-300">Your inquiry was sent successfully.</p> : null}
      {status === "error" ? <p className="text-sm text-rose-300">Something went wrong. Please email cynexsysites@gmail.com directly.</p> : null}
    </form>
  );
}
