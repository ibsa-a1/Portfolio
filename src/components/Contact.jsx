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
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
    >
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 mx-auto flex items-center justify-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          {" "}
          Me
        </span>
      </h1>
      <p className="text-gray-500 w-3/4 text-center mb-8 mx-auto">
        I'm currently available for freelance work or internship opportunities.
        Feel free to reach out if you have a project in mind or just want to
        connect!
      </p>
      <div className="flex flex-col-reverse md:flex-row gap-20 sm:gap-0 lg:gap-30 justify-center items-center">
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-2xl text-blue-950 font-semibold mb-6">
            Contact Information
          </h2>
          <ul className="space-y-8 md:space-y-12">
            <div className="flex md:flex-row md:items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100">
                <Mail className="w-10 h-10 text-indigo-600" />
              </div>{" "}
              <div className="flex flex-col">
                <h4 className="text-xl font-medium text-left mb-1 flex gap-4">
                  Email
                </h4>
                <a
                  href="mailto:ibsaabera712@gmail.com"
                  className="text-gray-600 hover:text-purple-600 break-all"
                >
                  ibsaabera712@gmail.com
                </a>
              </div>
            </div>

            <div className="flex md:flex-row md:items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100">
                <MapPin className="w-10 h-10 text-indigo-600" />
              </div>{" "}
              <div className="flex flex-col">
                <h4 className="text-xl font-medium text-left mb-1 flex gap-4">
                  Location
                </h4>
                <p className="text-gray-600">Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <div className="flex md:flex-row md:items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100">
                <Phone className="w-10 h-10 text-indigo-600" />
              </div>{" "}
              <div className="flex flex-col">
                <h4 className="text-xl font-medium text-left mb-1 flex gap-4">
                  Phone
                </h4>
                <p className="text-gray-600">+251 994 25 16 25</p>
              </div>
            </div>
          </ul>
          <h2 className="text-lg font-semibold mb-4 mt-8">Connect with me</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/ibsa-a1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/ibsa-abera-37b6a2333/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500 transition"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:ibsaabera712@.com"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-500 transition"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>
        <div className="shadow-lg p-6 rounded-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300 w-full md:w-1/2">
          <h2 className="text-2xl text-blue-950 font-semibold mb-6">
            Send a Message
          </h2>
          <form
            onSubmit={onSubmit}
            className=" mx-auto text-gray-600 pt-8 space-y-2 max-w-lg w-full"
          >
            <div className=" text-left">
              Your Name
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              />
            </div>
            <div className=" text-left ">
              Your Email
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              />
            </div>
            <div className=" text-left ">
              Message
              <textarea
                name="message"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2 resize-none h-32"
              />
            </div>
            <div className="w-full  flex justify-center items-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded mt-4 cursor-pointer transition-colors duration-300"
              >
                <Send className="inline mr-2" />

                {result ? result : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
