import React, { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <div id="Contact">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold md:mb-32 mb-16 mx-auto flex items-center justify-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          {" "}
          Me
        </span>
      </h1>
    </div>
  );
};

export default Contact;
