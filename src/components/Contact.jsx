import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
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
        Have a question or want to work together? Feel free to contact me!
      </p>
      <div className="flex flex-col-reverse md:flex-row gap-20 lg:gap-100 justify-center items-center">
        <div>
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
        </div>
        <div>Contact Form</div>
      </div>
    </div>
  );
};

export default Contact;
