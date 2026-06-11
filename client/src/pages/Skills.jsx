import React from "react";
import { motion } from "framer-motion";
import { FaNode, FaPython, FaReact } from "react-icons/fa6";
import { SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import img5 from "../assets/esp.png";

function Skills() {
  const SkillCard = ({ icon, name }) => (
    <motion.div
      className="flex flex-col items-center justify-center p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-3xl">{icon}</div>
      <p className="mt-2 text-sm font-medium text-slate-700 text-center">
        {name}
      </p>
    </motion.div>
  );

  const Section = ({ title, subtitle, children }) => (
    <div className="mb-14">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
        {subtitle && (
          <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {children}
      </div>
    </div>
  );

  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
            Skills & Technologies
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            My Tech Stack
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            A collection of technologies I use to build scalable web applications,
            APIs, and IoT systems.
          </p>
        </motion.div>

        {/* FULL STACK MERN */}
        <Section
          title="Full Stack Development"
          subtitle="MERN Stack (Modern Web Applications)"
        >
          <SkillCard icon={<FaReact className="text-blue-500" />} name="React.js" />
          <SkillCard icon={<FaNode className="text-green-600" />} name="Node.js" />
          <SkillCard icon={<SiExpress className="text-slate-700" />} name="Express.js" />
          <SkillCard icon={<SiMongodb className="text-green-500" />} name="MongoDB" />
        </Section>

        {/* BACKEND + DATABASE */}
        <Section
          title="Backend & Databases"
          subtitle="APIs, Data Management & Server Logic"
        >
          <SkillCard icon={<FaPython className="text-yellow-500" />} name="Django REST Framework" />
          <SkillCard icon={<SiPostgresql className="text-blue-600" />} name="PostgreSQL" />
          <SkillCard icon={<FaReact className="text-blue-400" />} name="React (Advanced UI)" />
        </Section>

        {/* IOT */}
        <Section
          title="IoT & Embedded Systems"
          subtitle="Hardware + Software Integration"
        >
          <SkillCard icon={<TbBrandCpp className="text-blue-500" />} name="C++" />

          <motion.div
            className="flex flex-col items-center justify-center p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img src={img5} alt="ESP32" className="w-16 h-16 object-contain" />
            <p className="mt-2 text-sm font-medium text-slate-700">
              ESP32
            </p>
          </motion.div>
        </Section>

        {/* FOOTER NOTE */}
        <motion.p
          className="text-center text-slate-500 italic mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Continuously learning new technologies to build better systems.
        </motion.p>

      </div>
    </section>
  );
}

export default Skills;