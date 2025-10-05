import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Youtube, Send } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error in Sending message", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-[8vw] md:px-[5vw] lg:px-[12vw] bg-[#0d081f]"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium">
          Let’s build something amazing together — get in touch!
        </p>
      </div>

      {/* Contact Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Card - Contact Info */}
        <div className="flex flex-col gap-6">
          {/* Let's Connect Card */}
          <div className="bg-white/5 p-6 rounded-2xl shadow-md backdrop-blur-lg border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Send size={20} className="text-purple-400" /> Let’s Connect
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <Mail className="text-purple-400" size={20} />
                <span>rohitlad012@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-purple-400" size={20} />
                <span>+91 9373447851</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="text-purple-400" size={20} />
                <span>Pune, India</span>
              </li>
            </ul>
          </div>

          {/* Follow Me Card */}
          <div className="bg-white/5 p-6 rounded-2xl shadow-md backdrop-blur-lg border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">
              Follow Me
            </h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/rohit-lad-1550b4259/"
                target="_blank"
                className="flex items-center gap-2 px-3 py-2 border border-white/10 rounded-lg text-gray-300 hover:bg-purple-600/20 hover:text-white transition"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://github.com/Rohit31-ui"
                target="_blank"
                className="flex items-center gap-2 px-3 py-2 border border-white/10 rounded-lg text-gray-300 hover:bg-purple-600/20 hover:text-white transition"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://codolio.com/profile/rohitl31"
                target="_blank"
                className="flex items-center gap-2 px-3 py-2 border border-white/10 rounded-lg text-gray-300 hover:bg-purple-600/20 hover:text-white transition"
              >
                <Instagram size={18} /> Codolio
              </a>
              
            </div>
          </div>
        </div>

        {/* Right Card - Contact Form */}
        <div className="bg-white/5 p-8 rounded-2xl shadow-md backdrop-blur-lg border border-white/10">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Send me a message
          </h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-300 text-sm">Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your full name"
                  required
                  className="w-full p-3 mt-1 rounded-md bg-transparent border border-gray-700 text-white focus:border-purple-500 outline-none"
                />
              </div>
              <div>
                <label className="text-gray-300 text-sm">Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full p-3 mt-1 rounded-md bg-transparent border border-gray-700 text-white focus:border-purple-500 outline-none"
                />
              </div>
            </div>
            <div>
              <label className="text-gray-300 text-sm">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                required
                className="w-full p-3 mt-1 rounded-md bg-transparent border border-gray-700 text-white focus:border-purple-500 outline-none"
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your project or just say hello..."
                required
                className="w-full p-3 mt-1 rounded-md bg-transparent border border-gray-700 text-white focus:border-purple-500 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-500 py-3 cursor-pointer rounded-md text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
