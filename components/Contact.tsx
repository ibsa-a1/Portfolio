"use client";

import React, { createElement, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";
import { motion as Motion } from "motion/react";
import { toast } from "react-toastify";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "ibsaabera712@gmail.com",
    href: "mailto:ibsaabera712@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251 994 25 16 25",
    href: "tel:+251994251625",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    href: null,
  },
];

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // React clears event.currentTarget once the handler returns, so keep the
    // form element in a variable before any await.
    const form = event.currentTarget;

    // Web3Forms access keys are meant to be public and the API is meant to be
    // called from the browser (server-side calls are blocked on the free plan).
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      console.error("NEXT_PUBLIC_WEB3FORMS_KEY is not set");
      toast.error(
        "The contact form is temporarily unavailable. Please email me directly.",
      );
      return;
    }

    setResult("Sending...");

    try {
      const formData = new FormData(form);
      formData.append("access_key", accessKey);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        form.reset();
        return;
      }

      console.error("Web3Forms error", data);
      toast.error(data.message || "Something went wrong while sending.");
    } catch (error) {
      console.error("Web3Forms request failed", error);
      toast.error("Network error. Please try again in a moment.");
    } finally {
      setResult("");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="section-divider mb-24" />

      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <span className="section-kicker">Contact</span>
              <h2 className="section-title">
                Let&apos;s build something{" "}
                <span className="display-font text-slate-900/80 dark:text-white/80">
                  useful and sharp.
                </span>
              </h2>
              <p className="section-copy mt-6">
                I&apos;m open to freelance work, internships, and collaborations
                where thoughtful UI, dependable backend work, and clear
                communication matter.
              </p>
            </div>

            <div className="grid gap-4">
              {contactCards.map(({ icon, label, value, href }, i) => (
                <Motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="surface-panel interactive-panel p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-slate-200/10 bg-slate-100/8 p-3 transition-colors duration-200 dark:border-white/10 dark:bg-white/8">
                      {createElement(icon, {
                        className: "h-5 w-5 text-slate-950 dark:text-white",
                      })}
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-white/45">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-2 inline-block text-base text-slate-800 transition-colors duration-200 hover:text-slate-950 dark:text-white/85 dark:hover:text-white"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-2 text-base text-slate-800 dark:text-white/85">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>

            <div className="surface-panel interactive-panel p-6">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-500/80 dark:text-indigo-400/60">
                Online
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://github.com/ibsa-a1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-btn"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ibsa-abera-37b6a2333/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-btn"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a href="mailto:ibsaabera712@gmail.com" className="primary-btn">
                  Email me
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="surface-panel interactive-panel p-6 sm:p-8"
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-indigo-500/80 dark:text-indigo-400/60">
              Send a Message
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">
              Tell me what you&apos;re building.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700/75 dark:text-white/65">
              Share the product idea, workflow, or feature you need help with.
              I&apos;ll reply with a clear next step as soon as I can.
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-white/70">
                  Your name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  className="input-shell"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-white/70">
                  Your email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  className="input-shell"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-white/70">
                  Project details
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Describe your project, stack, timeline, or what you need improved."
                  required
                  rows={7}
                  className="input-shell resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={result === "Sending..."}
                className="primary-btn w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {result || "Send message"}
              </button>
            </form>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
