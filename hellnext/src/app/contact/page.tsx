"use client";

import { useState } from "react";
import { handleContact } from "@/lib/actions"; // import server action

export default function ContactPage() {
  const [submitted, setSubmitted] = useState<string | null>(null);

  async function clientAction(formData: FormData) {
    const res = await handleContact(formData); // call server action
    setSubmitted(res);
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Form</h1>
      <form action={clientAction} className="flex flex-col gap-3 w-64">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="border p-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>

      {submitted && (
        <p className="mt-4 p-2 bg-green-100 border border-green-400 rounded">
          {submitted}
        </p>
      )}
    </main>
  );
}
