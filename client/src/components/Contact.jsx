import React, { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MailContext } from "../context/mailContext";
function Contact() {
  const { sendEmail } = useContext(MailContext);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(name, email, text);
  };
  return (
    <div
      id="contact"
      className="bg-neutral-900 min-h-screen transition-all p-4 sm:p-6 md:p-12 flex items-center justify-center text-white"
    >
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="bg-neutral-950 p-6 sm:p-8 md:p-12 rounded-2xl shadow-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
      >
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">
            Let’s Connect
          </h2>
          <p className="text-neutral-400 mb-6 text-sm sm:text-base leading-relaxed">
            Have a project in mind or just want to say hello? I’m always open to
            discussing new ideas or opportunities to be part of your vision.
          </p>

          <div className="space-y-3 text-sm sm:text-base">
            <p>
              <span className="font-semibold">Location:</span> Kozhikode, India
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              fayizpachu217@gmail.com
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +91 98765 43210
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-xl sm:text-2xl font-bold text-center mb-6 font-serif">
            Contact Me
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold text-sm sm:text-base">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full p-2.5 sm:p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-sm sm:text-base">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2.5 sm:p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-sm sm:text-base">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your Message"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full p-2.5 sm:p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white hover:bg-black text-neutral-800 hover:text-white transition p-2.5 sm:p-3 rounded-lg font-semibold text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
