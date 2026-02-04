import React from 'react'
import Divider from '../Components/Divider'
import profile from '../assets/simo.jpeg'
import { motion } from 'framer-motion'

function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-600 leading-tight">
            Hello, I'm <span className="text-blue-800">Simon Muchuku Njuguna</span>
          </h1>

          <Divider />

          <h2 className="mt-4 text-lg lg:text-xl font-semibold text-blue-500">
            Software Engineer | Full Stack Developer | Mobile App Developer
          </h2>

          <p className="mt-6 text-gray-600 text-base leading-relaxed">
            I am a passionate Computer Science student and software developer with strong experience in 
            building scalable web and mobile applications using modern technologies...
          </p>

          <p className="mt-4 text-gray-600 text-base leading-relaxed">
            I focus on creating clean, efficient, and secure systems that solve real-world problems...
          </p>

          <div className="mt-6 flex gap-4">
            <a href="/project" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
              View Projects
            </a>
            <a href="/contact" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-300">
            <img src={profile} alt="Simon Muchuku Njuguna" className="w-full h-full object-cover" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Home
