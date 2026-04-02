"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        className="field flex-1"
        placeholder="Your email for updates and waitlist access"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="rounded-2xl bg-cyan-300 px-5 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-[1px]">
        Join
      </button>
      {done ? <div className="text-sm text-cyan-300">You are on the newsletter and waitlist list.</div> : null}
    </form>
  );
}
