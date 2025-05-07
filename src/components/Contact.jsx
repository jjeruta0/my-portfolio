import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_sg9p245",
        "template_plycik6",
        e.target,
        "L7YZwf4NluOA2LftI"
      )
      .then((result) => {
        alert("Message Sent Successfully!", result);
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Check console.");
      })
      .finally(() => {
        setIsLoading(false);
      });

    e.target.reset();
  };

  return (
    <div className="bg-stone-800 text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-500 mb-4">
              Let's Talk
            </h3>
            <p>
              I'm open to discussing web development roles or  other positions
              available.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-emerald-400 mr-2"></FaEnvelope>
              <a href="mailto:jjeruta0@gmail.com" className="hover:underline">
                jjeruta0@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-emerald-400 mr-2"></FaPhone>
              <span>+639937124013</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-emerald-400 mr-2"></FaMapMarkedAlt>
              <span>
                Masipag Street, Pabahay2000, San Jose Del Monte, Bulacan
              </span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 rounded bg-stone-600 border border-gray-600 focus:outline-none focus:border-sky-400"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 rounded bg-stone-600 border border-gray-600 focus:outline-none focus:border-sky-400"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  className="w-full p-2 rounded bg-stone-600 border border-gray-600 focus:outline-none focus:border-sky-400"
                  placeholder="Enter Your Message"
                  rows="5"
                  required
                />
              </div>
              <button
                type="submit"
                className={`bg-gradient-to-r from-emerald-400 to-sky-400 text-white transform transition-transform duration-300 px-8 py-2 rounded-full ${
                  isLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-105"
                }`}
              >
                {isLoading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
