import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Images
import img1 from "../assets/Screenshot (77).png";
import img2 from "../assets/Screenshot (79).png";
import img3 from "../assets/Screenshot (80).png";
import img4 from "../assets/Screenshot (81).png";

import loan1 from "../assets/loan1.png";
import loan2 from "../assets/loan2.png";
import loan3 from "../assets/loan3.png";
import loan4 from "../assets/loan4.png";
import loan5 from "../assets/loan5.png";
import loan6 from "../assets/loan6.png";
import loan7 from "../assets/loan7.png";

import demo1 from "../assets/demo.mp4";
import demo2 from "../assets/demo2.mp4";

function Projects() {
  const [rentIndex, setRentIndex] = useState(0);
  const [loanIndex, setLoanIndex] = useState(0);

  const rentImages = [img1, img2, img3, img4];
  const loanImages = [loan1, loan2, loan3, loan4, loan5, loan6, loan7];

  const next = (setIndex, arrLength) =>
    setIndex((prev) => (prev + 1) % arrLength);

  const prev = (setIndex, arrLength) =>
    setIndex((prev) => (prev === 0 ? arrLength - 1 : prev - 1));

  const TechBadge = ({ name }) => (
    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
      {name}
    </span>
  );

  const ProjectCard = ({ children }) => (
    <motion.div
      className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );

  const SectionHeader = () => (
    <div className="text-center mb-16">
      <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
        Portfolio
      </span>

      <h2 className="text-5xl font-bold mt-6 text-slate-900">
        Featured Projects
      </h2>

      <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
        A collection of real-world systems built with modern technologies
        including IoT, AI, fintech, and full-stack web development.
      </p>
    </div>
  );

  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <SectionHeader />

        {/* ===== PROJECT 1 ===== */}
        <ProjectCard>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold">
              Featured Project
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
              IoT + Fintech
            </span>
          </div>

          <h3 className="text-3xl font-bold text-slate-900">
            Smart Rent & Utility System
          </h3>

          <div className="flex flex-wrap gap-3 mt-4">
            <TechBadge name="React" />
            <TechBadge name="Node.js" />
            <TechBadge name="MongoDB" />
            <TechBadge name="ESP32" />
            <TechBadge name="M-Pesa API" />
          </div>

          <div className="relative mt-8">
            <img
              src={rentImages[rentIndex]}
              className="w-full h-72 object-cover rounded-2xl"
              alt="rent"
            />

            <button
              onClick={() => prev(setRentIndex, rentImages.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={() => next(setRentIndex, rentImages.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
            >
              <FaArrowRight />
            </button>
          </div>

          <p className="mt-6 text-slate-600 leading-relaxed">
            A modern property management platform integrating IoT automation,
            M-Pesa payments, and tenant management. Enables landlords to
            remotely control utilities, track payments, and manage occupancy
            efficiently.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div>
              <h4 className="text-2xl font-bold text-blue-600">IoT</h4>
              <p className="text-sm text-slate-500">Automation</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-blue-600">M-Pesa</h4>
              <p className="text-sm text-slate-500">Payments</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-blue-600">Real-Time</h4>
              <p className="text-sm text-slate-500">Control System</p>
            </div>
          </div>

          <div className="mt-6">
            <video src={demo1} controls className="rounded-2xl w-full" />
          </div>
        </ProjectCard>

        {/* ===== PROJECT 2 ===== */}
        <div className="mt-16">
          <ProjectCard>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-semibold">
                Fintech System
              </span>
            </div>

            <h3 className="text-3xl font-bold text-slate-900">
              Loan Management System
            </h3>

            <div className="flex flex-wrap gap-3 mt-4">
              <TechBadge name="React" />
              <TechBadge name="Node.js" />
              <TechBadge name="MongoDB" />
              <TechBadge name="Express" />
            </div>

            <div className="relative mt-8">
              <img
                src={loanImages[loanIndex]}
                className="w-full h-72 object-cover rounded-2xl"
                alt="loan"
              />

              <button
                onClick={() => prev(setLoanIndex, loanImages.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
              >
                <FaArrowLeft />
              </button>

              <button
                onClick={() => next(setLoanIndex, loanImages.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
              >
                <FaArrowRight />
              </button>
            </div>

            <p className="mt-6 text-slate-600 leading-relaxed">
              A digital lending platform that allows users to apply for loans,
              track repayment schedules, and manage financial transactions
              through an intuitive dashboard.
            </p>

            <div className="mt-6">
              <video src={demo2} controls className="rounded-2xl w-full" />
            </div>
          </ProjectCard>
        </div>

        {/* ===== PROJECT 3 ===== */}
        {/* ===== PROJECT 3 ===== */}
          <div className="mt-16">
            <ProjectCard>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs font-semibold">
                  Full-Stack E-Commerce
                </span>
              </div>

              <h3 className="text-3xl font-bold text-slate-900">
                E-Commerce Web Application
              </h3>

              <div className="flex flex-wrap gap-3 mt-4">
                <TechBadge name="React" />
                <TechBadge name="Django REST Framework" />
                <TechBadge name="PostgreSQL" />
                <TechBadge name="REST API" />
                <TechBadge name="Authentication" />
              </div>

              <p className="mt-6 text-slate-600 leading-relaxed">
                A full-stack e-commerce platform designed with a modern and scalable
                architecture. The system allows users to browse products, manage carts,
                make secure purchases, and track orders. It features a robust backend
                built with Django REST Framework and PostgreSQL, and a responsive
                frontend built with React for a smooth user experience.
              </p>
            </ProjectCard>
          </div>

        {/* Footer */}
        <p className="text-center mt-16 text-slate-500 italic">
          Just a sample of my work
        </p>
      </div>
    </section>
  );
}

export default Projects;