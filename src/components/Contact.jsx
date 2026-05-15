import { createElement, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
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

  const onSubmit = async (event) => {
    event.preventDefault();

    const emailKey = import.meta.env.VITE_WEB3_KEY;

    if (!emailKey) {
      toast.error("Add VITE_WEB3_KEY to your environment before sending.");
      return;
    }

    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", emailKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent successfully!");
      event.target.reset();
      return;
    }

    console.error("Web3Forms error", data);
    toast.error(data.message || "Something went wrong while sending.");
    setResult("");
  };

  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div>
              <span className="section-kicker">Contact</span>
              <h2 className="section-title">
                Let&apos;s build something{" "}
                <span className="display-font text-white/80">useful and sharp.</span>
              </h2>
              <p className="section-copy mt-6">
                I&apos;m available for freelance work, internships, and product
                collaborations where strong frontend quality and fullstack
                delivery both matter.
              </p>
            </div>

            <div className="grid gap-4">
              {contactCards.map(({ icon, label, value, href }) => (
                <div key={label} className="surface-panel p-5">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/8 p-3">
                      {createElement(icon, {
                        className: "h-5 w-5 text-white",
                      })}
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-white/40">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-2 inline-block text-base text-white/80 hover:text-white"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-2 text-base text-white/80">{value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="surface-panel p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/40">
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
          </div>

          <div className="surface-panel p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">
              Send a Message
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-white">
              Tell me what you&apos;re building.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
              Share the product idea, business goal, or feature you need help
              with. I&apos;ll reply as soon as I can.
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-white/65">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  className="input-shell"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/65">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  className="input-shell"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/65">
                  Project details
                </label>
                <textarea
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
