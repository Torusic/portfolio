import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        
        {/* Heading */}
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-blue-600 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="w-20 h-1 bg-blue-500 mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Paragraphs */}
        {[
          "My name is Simon Muchuku Njuguna, a Computer Science student at St. Paul’s University, Limuru Campus. I am a passionate and driven software developer with a strong interest in full-stack web development, mobile application development, and smart systems. I enjoy building practical solutions that address real-world problems using modern technologies and clean, maintainable code.",
          "I have hands-on experience working with the MERN Stack (MongoDB, Express.js, React, Node.js), React Native for cross-platform mobile applications, MySQL and SQL databases, as well as Python for backend development and data analysis. Some of my key projects include an E-Commerce Platform, a Smart Rent and Utility Management System, and multiple RESTful API services, all of which demonstrate my ability to design and implement complete software solutions.",
          "Currently, I am expanding my skills in the Internet of Things (IoT) using ESP32, focusing on integrating hardware with software to build intelligent, connected systems such as smart monitoring and automation platforms.",
          "Driven by curiosity, discipline, and a strong desire for continuous learning, my long-term goal is to become a highly skilled software engineer capable of designing secure, scalable, and impactful digital systems that create positive change in society."
        ].map((text, index) => (
          <motion.p
            key={index}
            className="text-gray-600 leading-relaxed mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {text}
          </motion.p>
        ))}

      </div>
    </section>
  )
}

export default About
