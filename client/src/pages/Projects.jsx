import React from 'react'
import { FaNode, FaPython, FaReact } from "react-icons/fa6"
import { TbBrandReactNative } from "react-icons/tb"
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si"

function Projects() {
  return (
    <section className="min-h-screen bg-blue-50 py-10">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-blue-600 mb-2">Skills & Technologies</h2>
        <div className="w-20 h-1 bg-blue-500 mb-8"></div>

        {/* Full Stack */}
        <h3 className="text-lg font-semibold text-blue-500 mb-4">Full Stack Development</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-6 rounded-xl shadow">

          <Skill icon={<FaReact size={40} className="text-blue-500" />} name="React.js" />
          <Skill icon={<FaNode size={40} className="text-green-600" />} name="Node.js" />
          <Skill icon={<SiExpress size={40} className="text-gray-700" />} name="Express.js" />
          <Skill icon={<SiMongodb size={40} className="text-green-500" />} name="MongoDB" />

        </div>

        {/* Other Technologies */}
        <h3 className="text-lg font-semibold text-blue-500 mt-10 mb-4">Other Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-6 rounded-xl shadow">

          <Skill icon={<TbBrandReactNative size={40} className="text-blue-500" />} name="React Native" />
          <Skill icon={<FaPython size={40} className="text-yellow-500" />} name="Python" />
          <Skill icon={<SiMysql size={40} className="text-blue-600" />} name="MySQL" />

        </div>

      </div>
    </section>
  )
}

function Skill({ icon, name }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-lg hover:shadow-md transition">
      {icon}
      <p className="text-sm font-semibold text-gray-700">{name}</p>
    </div>
  )
}

export default Projects
