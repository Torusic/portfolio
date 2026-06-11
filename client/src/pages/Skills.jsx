import React, { useState } from 'react'
import { FaNode, FaPython, FaReact } from "react-icons/fa6"
import { TbBrandCpp, TbBrandReactNative } from "react-icons/tb"
import { SiExpress, SiMongodb, SiMysql, SiPostgresql } from "react-icons/si"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { motion } from 'framer-motion'
import img5 from '../assets/esp.png'

function Skills() {
  return (
    <div>
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

          <h3 className="text-xs font-semibold text-blue-500 mb-4">
            Full Stack Development - MERN
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
         {/* Other Technologies */}
        <motion.div className="mt-10">

          <h3 className="text-sm font-semibold text-blue-500 mb-4">
            Other Full Stack Technologies - React, DRF & Postgresql
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-6 rounded-xl border-l-4 border-blue-400 shadow">

            <Skill
              icon={<FaReact size={40} className="text-blue-500" />}
              name="React"
            />

            <Skill
              icon={<FaPython size={40} className="text-yellow-500" />}
              name="Django Rest Framework (python backend)"
            />

            <Skill
              icon={<SiPostgresql size={40} className="text-blue-600" />}
              name="Postgresql"
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

    </div>
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

export default Skills