import { useState } from "react";
import Button from "./Button.jsx";

const field =
  "w-full border-0 border-b border-neutral-600 bg-transparent py-3.5 outline-none transition-colors focus:border-brand";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });
  const ready = form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.message.trim();

  const handleSubmit = async () => {
    if (!ready || submitting) return;
    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xyeeqejv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSent(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <p className="py-10 text-xl text-brand">
        Thanks {form.name.split(" ")[0]}! Your message has been sent — I’ll be in touch soon.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <input className={field} placeholder="Your name" value={form.name} onChange={update("name")} />
      <input className={field} type="email" placeholder="Email address" value={form.email} onChange={update("email")} />
      <textarea className={`${field} min-h-32 resize-y`} placeholder="Tell me about your project" value={form.message} onChange={update("message")} />
      <Button
        className={`self-start ${ready && !submitting ? "" : "opacity-50"}`}
        onClick={handleSubmit}
      >
        {submitting ? "Sending..." : "Send message →"}
      </Button>
    </div>
  );
}