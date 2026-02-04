import React from 'react';
import logo from "../assets/logo.png";
import { Link, Outlet, useLocation } from 'react-router-dom';
import { IoHomeSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { motion } from 'framer-motion';

function Layout() {
  const location = useLocation(); // to highlight active link

  const navItems = [
    { to: "/", icon: <IoHomeSharp size={22} />, label: "Home" },
    { to: "/about", icon: <CgProfile size={22} />, label: "About" },
    { to: "/project", icon: <MdWork size={22} />, label: "Projects" },
    { to: "/contact", icon: <LuMessageCircleMore size={22} />, label: "Contact" },
  ];

  return (
    <section className='bg-blue-50 z-50 w-full'>

      {/* Header */}
      <motion.header
        className='flex justify-between sticky top-0 p-2 lg:p-3 h-15 bg-blue-100 items-center shadow-md'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={logo} width={120} height={70} alt="Logo" className="cursor-pointer" />

        <div className='flex items-center text-sm font-semibold text-blue-500 gap-4'>
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, color: "#1D4ED8" }}
              whileTap={{ scale: 0.9 }}
              className={`relative`}
            >
              <Link to={item.to}>
                {item.icon}
              </Link>
              {/* Active Indicator */}
              {location.pathname === item.to && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 w-full h-1 bg-blue-600 rounded"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.header>

      {/* Main content */}
      <main className='px-3 py-1'>
        <Outlet />
      </main>
    </section>
  );
}

export default Layout;
