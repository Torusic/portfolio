import React, { useState } from 'react'
import { FaNode, FaPython, FaReact } from "react-icons/fa6"
import { TbBrandCpp, TbBrandReactNative } from "react-icons/tb"
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { motion } from 'framer-motion'

import img1 from "../assets/Screenshot (77).png"
import img2 from "../assets/Screenshot (79).png"
import img3 from "../assets/Screenshot (80).png"
import img4 from "../assets/Screenshot (81).png"

import img5 from "../assets/esp.png"
import demo1 from "../assets/demo.mp4"

import loan1 from "../assets/loan1.png"
import loan2 from "../assets/loan2.png"
import loan3 from "../assets/loan3.png"
import loan4 from "../assets/loan4.png"
import loan5 from "../assets/loan5.png"
import loan6 from "../assets/loan6.png"
import loan7 from "../assets/loan7.png"
import demo2 from "../assets/demo2.mp4"

function Projects() {

  const [showRentMore, setShowRentMore] = useState(false)
  const [showLoanMore, setShowLoanMore] = useState(false)

  const [rentIndex, setRentIndex] = useState(0)
  const [loanIndex, setLoanIndex] = useState(0)

  // Rent Images
  const rentImages = [img1, img2, img3, img4]

  // Loan Images
  const loanImages = [
    loan1,
    loan2,
    loan3,
    loan4,
    loan5,
    loan6,
    loan7
  ]

  // Rent Slider
  const nextRentImage = () => {
    setRentIndex((prev) => (prev + 1) % rentImages.length)
  }

  const prevRentImage = () => {
    setRentIndex((prev) =>
      prev === 0 ? rentImages.length - 1 : prev - 1
    )
  }

  // Loan Slider
  const nextLoanImage = () => {
    setLoanIndex((prev) => (prev + 1) % loanImages.length)
  }

  const prevLoanImage = () => {
    setLoanIndex((prev) =>
      prev === 0 ? loanImages.length - 1 : prev - 1
    )
  }

  return (
    <section className="min-h-screen bg-blue-50 py-10">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-3"
        >

          {/* Heading */}
          <h2 className='text-3xl font-bold text-blue-500 mb-2'>
            Projects
          </h2>

          <div className="w-40 h-1 bg-blue-500 mb-8"></div>

          {/* ================= PROJECT 1 ================= */}

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            1. Smart Rent and Utility System
          </h3>

          {/* Image Slider */}
          <div className="relative w-full max-w-3xl mx-auto mb-6">

            <img
              src={rentImages[rentIndex]}
              alt="Rent Project Screenshot"
              className="w-full h-52 lg:h-80 object-cover rounded-xl shadow-lg transition duration-500"
            />

            {/* Left Arrow */}
            <button
              onClick={prevRentImage}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-blue-100"
            >
              <FaArrowLeft />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextRentImage}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-blue-100"
            >
              <FaArrowRight />
            </button>

          </div>

          {/* View More Button */}
          <button
            onClick={() => setShowRentMore(!showRentMore)}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition duration-300"
          >
            {showRentMore ? "View Less" : "View a demo video"}
          </button>

          {/* Expanded Content */}
          {showRentMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-6 bg-white p-6 rounded-xl shadow border-l-4 border-blue-400"
            >

              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                Smart Rent and Utilities System is a full-stack rental
                management platform integrated with ESP32 IoT automation
                and M-Pesa payment processing.

                The system allows landlords to monitor tenant payments,
                manage occupancy, and remotely control electricity supply
                in cases of non-payment.

                Tenants can securely pay rent, track payment history,
                and view utility status. The platform improves transparency,
                automation, and landlord-tenant conflict resolution.
              </p>

              {/* Demo Video */}
              <div className="mt-4">

                <h4 className="text-lg font-semibold text-blue-600 mb-2">
                  Project Demo Video
                </h4>

                <video
                  src={demo1}
                  controls
                  className="w-full lg:h-80 h-48 rounded-lg shadow"
                />

              </div>

            </motion.div>
          )}

          {/* ================= PROJECT 2 ================= */}

          <h3 className="text-xl font-semibold text-gray-800 mt-12 mb-4">
            2. Loan Web Application
          </h3>

          {/* Loan Slider */}
          <div className="relative w-full max-w-3xl mx-auto mb-6">

            <img
              src={loanImages[loanIndex]}
              alt="Loan Application Screenshot"
              className="w-full h-52 lg:h-80 object-cover rounded-xl shadow-lg transition duration-500"
            />

            {/* Left Arrow */}
            <button
              onClick={prevLoanImage}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-blue-100"
            >
              <FaArrowLeft />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextLoanImage}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-blue-100"
            >
              <FaArrowRight />
            </button>

          </div>

          {/* View More */}
          <button
            onClick={() => setShowLoanMore(!showLoanMore)}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition duration-300"
          >
            {showLoanMore ? "View Less" : "View a demo video "}
          </button>

          {/* Expanded Loan Content */}
          {showLoanMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.5 }}
              className="mt-6 bg-white p-6 rounded-xl shadow border-l-4 border-blue-400"
            >

              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                Loan Web Application is a modern financial platform
                that allows users to apply for loans online, monitor
                loan status, calculate repayments, and manage payments
                securely.

                The system provides an easy-to-use dashboard for both
                customers and administrators, improving efficiency and
                accessibility in digital lending services.
              </p>
                              <video
                  src={demo2}
                  controls
                  className="w-full lg:h-80 h-48 rounded-lg shadow"
                />
            </motion.div>
          )}

        </motion.div>

        <p className='italic text-xl text-red-400 mt-2'>
          Just a sample of my work
        </p>

        {/* ================= SKILLS SECTION ================= */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-6 mt-16"
        >

          <h2 className="text-3xl font-bold text-blue-600 mb-2">
            Skills & Technologies
          </h2>

          <div className="w-20 h-1 bg-blue-500 mb-8"></div>

        </motion.div>

        {/* Full Stack */}
        <motion.div>

          <h3 className="text-lg font-semibold text-blue-500 mb-4">
            Full Stack Development
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-6 rounded-xl border-l-4 border-blue-400 shadow">

            <Skill
              icon={<FaReact size={40} className="text-blue-500" />}
              name="React.js"
            />

            <Skill
              icon={<FaNode size={40} className="text-green-600" />}
              name="Node.js"
            />

            <Skill
              icon={<SiExpress size={40} className="text-gray-700" />}
              name="Express.js"
            />

            <Skill
              icon={<SiMongodb size={40} className="text-green-500" />}
              name="MongoDB"
            />

          </div>

        </motion.div>

        {/* IoT */}
        <motion.div>

          <h3 className='text-lg font-semibold text-blue-500 mb-4 mt-6'>
            IoT (ESP32) prototype level
          </h3>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-6 rounded-xl border-l-4 border-blue-400 shadow'>

            <Skill
              icon={<TbBrandCpp size={40} className="text-blue-500" />}
              name="C++"
            />

            <div className='flex flex-col items-center gap-2'>

              <img
                src={img5}
                width={80}
                height={80}
                alt="ESP32"
              />

              <p className='text-sm font-semibold text-gray-700'>
                ESP32
              </p>

            </div>

          </div>

        </motion.div>

        {/* Other Technologies */}
        <motion.div className="mt-10">

          <h3 className="text-lg font-semibold text-blue-500 mb-4">
            Other Technologies
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-6 rounded-xl border-l-4 border-blue-400 shadow">

            <Skill
              icon={<TbBrandReactNative size={40} className="text-blue-500" />}
              name="React Native"
            />

            <Skill
              icon={<FaPython size={40} className="text-yellow-500" />}
              name="Python"
            />

            <Skill
              icon={<SiMysql size={40} className="text-blue-600" />}
              name="MySQL"
            />

          </div>

        </motion.div>

      </div>
    </section>
  )
}

function Skill({ icon, name }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 p-4 cursor-pointer rounded-lg hover:shadow-md transition-transform duration-300 hover:scale-105"
    >
      {icon}

      <p className="text-sm font-semibold text-gray-700">
        {name}
      </p>
    </motion.div>
  )
}

export default Projects