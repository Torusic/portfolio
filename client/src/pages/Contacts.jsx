import React from "react";
import {
  FaGithub,
  FaLocationDot,
  FaWhatsapp,
} from "react-icons/fa6";
import { CiLinkedin, CiPhone } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { motion } from "framer-motion";

function Contacts() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 flex items-center py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full">

        {/* HEADER */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
            Get In Touch
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Let’s Build Something Great
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            I’m open to internship opportunities, freelance work, collaborations,
            and software development discussions. Let’s connect and create impactful solutions.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT: CONTACT INFO CARD */}
          <motion.div
            className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-5 text-slate-700 text-sm">

              <div className="flex items-center gap-3">
                <CiPhone className="text-blue-600 text-xl" />
                <span className="font-medium">+254 795 629 534</span>
              </div>

              <div className="flex items-center gap-3">
                <FaLocationDot className="text-blue-600 text-xl" />
                <span className="font-medium">Nairobi, Kenya</span>
              </div>

              <div className="h-px bg-slate-200 my-6"></div>

              <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Connect
              </h4>

              <a
                href="https://wa.me/254795629534"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-green-600 transition"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp Chat
              </a>

              <a
                href="mailto:smuchuku7@gmail.com"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <MdOutlineMailOutline className="text-xl" />
                Email Me
              </a>

              <a
                href="https://github.com/Torusic"
                className="flex items-center gap-3 hover:text-slate-900 transition"
              >
                <FaGithub className="text-xl" />
                GitHub Profile
              </a>

              <a
                href="https://www.linkedin.com/in/simon-muchuku-75b3082b6"
                className="flex items-center gap-3 hover:text-blue-700 transition"
              >
                <CiLinkedin className="text-xl" />
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          {/* RIGHT: FORM CARD */}
          <motion.div
            className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Send a Message
            </h3>

            <form className="space-y-5">

              <div>
                <label className="text-sm font-medium text-slate-600">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full mt-2 px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-600">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full mt-2 px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>

              <p className="text-xs text-slate-500 text-center">
                I typically respond within 24 hours.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contacts;