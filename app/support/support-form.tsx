"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export function SupportForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setFormState("sending");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Support request failed");
      }

      form.reset();
      setFormState("success");
    } catch {
      setFormState("error");
    }
  }

  return (
    <form className="support-form" onSubmit={handleSubmit}>
      <h2>Send a support request</h2>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="platform">Platform</label>
          <select id="platform" name="platform" defaultValue="iOS" required>
            <option>iOS</option>
            <option>Android</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" required />
        </div>
        <div className="field field-wide">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>
      </div>

      {formState === "success" ? (
        <div className="form-status" role="status">
          Thanks, your message has been sent. We’ll get back to you soon.
        </div>
      ) : null}
      {formState === "error" ? (
        <div className="form-status form-error" role="alert">
          Something went wrong. Please try again.
        </div>
      ) : null}

      <button className="submit-button" type="submit" disabled={formState === "sending"}>
        {formState === "sending" ? "Sending" : "Send message"}
      </button>
    </form>
  );
}
