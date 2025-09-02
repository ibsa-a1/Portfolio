import React, { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    const emailkey = import.meta.env.VITE_WEB3_KEY;

    formData.append("access_key", emailkey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div
      id="Contact"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {" "}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contact{" "}
            <span className="relative">
              <span className="underline underline-offset-8 decoration-4 decoration-blue-600 font-light">
                Me
              </span>
            </span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            I'm currently available for freelance work or internship
            opportunities. Feel free to reach out if you have a project in mind
            or just want to connect!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {" "}
          <div className="space-y-8 lg:space-y-12">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-8">
                Contact Information
              </h2>
            </div>

            <div className="space-y-8">
              {" "}
              <div className="group flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition-colors duration-300">
                  <Mail className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Email
                  </h4>
                  <a
                    href="mailto:ibsaabera712@gmail.com"
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-300 break-all text-base"
                  >
                    ibsaabera712@gmail.com
                  </a>
                </div>
              </div>
              <div className="group flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition-colors duration-300">
                  <MapPin className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Location
                  </h4>
                  <p className="text-gray-600 text-base">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
              <div className="group flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition-colors duration-300">
                  <Phone className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Phone
                  </h4>
                  <p className="text-gray-600 text-base">+251 994 25 16 25</p>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center lg:text-left">
                Connect with me
              </h3>
              <div className="flex justify-center lg:justify-start space-x-4">
                <a
                  href="https://github.com/ibsa-a1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                >
                  <FaGithub
                    size={24}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/ibsa-abera-37b6a2333/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin
                    size={24}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </a>

                <a
                  href="mailto:ibsaabera712@.com"
                  className="group w-14 h-14 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-500 transition-all duration-300 hover:scale-110"
                >
                  <FaEnvelope
                    size={24}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-8 text-center">
                Send a Message
              </h2>

              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    required
                    className="w-full border-2 border-gray-200 rounded-xl py-4 px-5 text-gray-700 focus:border-blue-500 focus:outline-none transition-colors duration-300 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Enter your email address"
                    required
                    className="w-full border-2 border-gray-200 rounded-xl py-4 px-5 text-gray-700 focus:border-blue-500 focus:outline-none transition-colors duration-300 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    required
                    rows={6}
                    className="w-full border-2 border-gray-200 rounded-xl py-4 px-5 text-gray-700 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none placeholder-gray-400"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={result === "Sending...."}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>{result || "Send Message"}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
