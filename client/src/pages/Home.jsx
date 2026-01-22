import React from 'react'
import Divider from '../Components/Divider'
import profile from '../assets/simo.jpeg'

function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-600 leading-tight">
            Hello, I'm <span className="text-blue-800">Simon Muchuku Njuguna</span>
          </h1>

          <Divider />

          <h2 className="mt-4 text-lg lg:text-xl font-semibold text-blue-500">
            Software Engineer | Full Stack Developer | Mobile App Developer
          </h2>

          <p className="mt-6 text-gray-600 text-base leading-relaxed">
            I am a passionate Computer Science student and software developer with strong experience in 
            building scalable web and mobile applications using modern technologies. My core stack 
            includes the MERN Stack (MongoDB, Express.js, React, Node.js), React Native for cross-platform 
            mobile development, SQL databases, and Python for backend services and data analysis.
          </p>

          <p className="mt-4 text-gray-600 text-base leading-relaxed">
            I focus on creating clean, efficient, and secure systems that solve real-world problems, 
            especially in areas such as e-commerce, smart utility management, IoT solutions, and 
            RESTful API development. I am continuously learning and improving my skills in system 
            architecture, cloud deployment, and emerging technologies.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="/project" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
              View Projects
            </a>
            <a href="/contact" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              Contact Me
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <img src={profile} alt="Simon Muchuku Njuguna" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home
