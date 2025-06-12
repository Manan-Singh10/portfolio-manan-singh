"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("movwdwnw");

  if (state.succeeded) {
    return (
      <div className="p-6 text-center bg-green-100 text-green-700 rounded-md shadow">
        <p>✅ Your message was successfully sent!</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-semibold text-zinc-100">Contact Me</h2>

      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="text-sm sm:text text-zinc-300">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="px-4 py-2 rounded-md bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="subject" className="text-sm sm:text text-zinc-300">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          required
          className="px-4 py-2 rounded-md bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="message" className="text-sm sm:text text-zinc-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="px-4 py-2 rounded-md bg-white/20 text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="px-4 py-1 rounded-md bg-blue-600 text-white font-normal hover:bg-blue-700 transition disabled:opacity-50"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
