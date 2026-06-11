import React from "react";
import { motion } from "framer-motion";

function About() {
  const aboutSections = [
    {
      title: "Who I Am",
      icon: "👨‍💻",
      description:
        "My name is Simon Muchuku Njuguna, a Computer Science student at St. Paul's University, Limuru Campus. I am a passionate software developer with a strong interest in full-stack web development, mobile application development, and emerging technologies. I enjoy building innovative solutions that solve real-world challenges through clean, scalable, and maintainable code.",
    },
    {
      title: "Technical Skills",
      icon: "⚡",
      description:
        "I have practical experience working with the MERN Stack (MongoDB, Express.js, React.js, Node.js), Django REST Framework, PostgreSQL, Python, Tailwind CSS, and modern frontend technologies. My development journey has enabled me to build responsive web applications, RESTful APIs, and database-driven systems that deliver meaningful user experiences.",
    },
    {
      title: "Industrial Attachment Experience",
      icon: "🏢",
      description:
        "During my industrial attachment at KALRO (Kenya Agricultural and Livestock Research Organization), I gained hands-on experience in programming, ICT support, network administration, hardware and software troubleshooting, system maintenance, database management, and supporting digital transformation initiatives. This experience strengthened my technical problem-solving abilities and exposed me to technology operations within a professional environment.",
    },
    {
      title: "Projects & Innovation",
      icon: "🚀",
      description:
        "I have worked on several innovative projects including  a Smart Rent and Utility Management System using ESP32, Web Loan Application System, Full Stack E-commerce web app, and Blog backend logic etc. These projects reflect my passion for leveraging technology to solve practical challenges and create meaningful impact.",
    },
    {
      title: "Future Goals",
      icon: "🎯",
      description:
        "I am continuously expanding my expertise in Internet of Things (IoT) and Artificial Intelligence. My goal is to become a highly skilled software engineer capable of designing secure, scalable, and impactful digital systems that improve lives and drive innovation.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24"
    >
      <div className="max-w-6xl mx-auto px-3 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
            About Simon
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Building Digital Solutions for Real-World Impact
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Computer Science Student, Full-Stack Developer, and Technology
            Enthusiast passionate about creating innovative software solutions
            through modern technologies, continuous learning, and practical
            problem-solving.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {aboutSections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-3xl">
                  {section.icon}
                </div>

                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-blue-600">
                    Section {index + 1}
                  </span>

                  <h3 className="mt-1 text-xl font-bold text-gray-900">
                    {section.title}
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-gray-600 leading-relaxed">
                {section.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: "5+", label: "Major Projects" },
            { number: "3+", label: "Years Learning" },
            { number: "10+", label: "Technologies" },
            { number: "∞", label: "Passion to Learn" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm"
            >
              <h3 className="text-3xl font-bold text-blue-600">
                {stat.number}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;