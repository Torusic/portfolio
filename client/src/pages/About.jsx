import React from 'react'

function About() {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="max-w-5xl mx-auto  lg:px-12">
        
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-4">
          About Me
        </h2>

        <div className="w-20 h-1 bg-blue-500 mb-6"></div>

        <p className="text-gray-600 leading-relaxed mb-4">
          My name is Simon Muchuku Njuguna, a Computer Science student at St. Paul’s University, Limuru Campus. 
          I am a passionate and driven software developer with a strong interest in full-stack web development, 
          mobile application development, and smart systems. I enjoy building practical solutions that address 
          real-world problems using modern technologies and clean, maintainable code.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          I have hands-on experience working with the MERN Stack (MongoDB, Express.js, React, Node.js), 
          React Native for cross-platform mobile applications, MySQL and SQL databases, as well as Python 
          for backend development and data analysis. Some of my key projects include an E-Commerce Platform, 
          a Smart Rent and Utility Management System, and multiple RESTful API services, all of which 
          demonstrate my ability to design and implement complete software solutions.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          Currently, I am expanding my skills in the Internet of Things (IoT) using ESP32, focusing on 
          integrating hardware with software to build intelligent, connected systems such as smart monitoring 
          and automation platforms.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Driven by curiosity, discipline, and a strong desire for continuous learning, my long-term goal is 
          to become a highly skilled software engineer capable of designing secure, scalable, and impactful 
          digital systems that create positive change in society.
        </p>

      </div>
    </section>
  )
}

export default About
