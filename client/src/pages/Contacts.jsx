import React from 'react'
import { FaArrowRight, FaGithub, FaLocationDot, FaWhatsapp } from 'react-icons/fa6'
import { CiLinkedin, CiPhone } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { motion } from 'framer-motion'

function Contacts() {
  return (
    <section className="min-h-screen bg-blue-50 flex items-center">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 w-full">

        {/* Heading */}
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-blue-600 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="w-20 h-1 bg-blue-500 mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        ></motion.div>

        <motion.p
          className="text-gray-600 mb-8 max-w-9xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Feel free to reach out for collaboration, internship opportunities, project discussions, 
          or any inquiries related to software development, mobile applications, or IoT systems. 
          I am always open to connecting and exploring new opportunities.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Info */}
          <motion.div
            className="space-y-4 text-gray-700"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className='font-bold text-sm italic text-blue-500 mt-3'>Info</p>
            <p className='flex items-center text-blue-700 font-semibold gap-1 text-sm'><CiPhone /> +254 795 629 534</p>
            <p className='flex items-center text-blue-700 font-semibold gap-1 text-sm'><FaLocationDot /> Nairobi, Kenya</p>
            <p className='font-bold text-sm italic text-blue-500 mt-3'>Links</p>
            <p><a href="https://wa.me/254795629534" target="_blank" rel="noopener noreferrer" className='flex items-center text-blue-700 font-semibold gap-1 text-sm hover:underline'><FaWhatsapp size={26}/> WhatsApp</a></p>
            <p><a href="mailto:smuchuku7@gmail.com" className='flex items-center text-blue-700 font-semibold gap-1 text-sm hover:underline'><MdOutlineMailOutline size={26} /> smuchuku7@gmail.com</a></p>
            <p><a href="https://github.com/Torusic" className='flex items-center text-blue-700 font-semibold gap-1 text-sm hover:underline'><FaGithub size={26} /> GitHub</a></p>
            <p><a href="https://www.linkedin.com/in/simon-muchuku-75b3082b6" className='flex items-center text-blue-700 font-semibold gap-1 text-sm hover:underline'><CiLinkedin size={26} /> LinkedIn</a></p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-white p-6 rounded-lg shadow space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-600">Full Name</label>
              <input 
                type="text" 
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Email Address</label>
              <input 
                type="email" 
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Message</label>
              <textarea 
                rows="4"
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <motion.button 
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>

        </div>
      </div>
    </section>
  )
}

export default Contacts
