import React from 'react'
import profile from '../assets/simo.jpeg'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { CiLinkedin } from 'react-icons/ci'

function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center relative overflow-hidden">

      {/* Background Glow Effect */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-500 opacity-10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">

       
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

         
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
             Building Scalable Digital Solutions
          </span>

          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Hi, I'm <span className="text-blue-600">Simon Muchuku</span>
          </h1>

         
          <h2 className="mt-6 text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
            A Full Stack, ESP32 (IoT) intergration & Web/Software Developer focused on building secure,
            scalable, and real-world software systems using modern technologies.
          </h2>

          
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="/project"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </a>

            <a
              href="/contact"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-50 transition-all duration-300"
            >
              Let's Talk
            </a>

          </div>

          
          <div className="mt-8 flex items-center gap-6 text-gray-500">

           <a href="https://github.com/Torusic" className='flex items-center text-gray-700 font-semibold gap-1 text-sm hover:underline'><FaGithub size={26} /> </a>

           <a href="https://www.linkedin.com/in/simon-muchuku-75b3082b6" className='flex items-center text-gray-700 font-semibold gap-1 text-sm hover:underline'><CiLinkedin size={26} /></a>

            <span className="text-sm">
              Available for freelance & collaborations
            </span>

          </div>

        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">

            
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-20 scale-110"></div>

            {/* Profile Image */}
            <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
              <img
                src={profile}
                alt="Simon Muchuku Njuguna"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </motion.div>

      </div>

    </section>
  )
}

export default Home