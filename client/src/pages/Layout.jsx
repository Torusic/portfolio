import React from 'react';
import logo from "../assets/logo.png";
import { Link, Outlet, useLocation } from 'react-router-dom';
import { IoHomeSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { motion } from 'framer-motion';
import { FaToolbox } from 'react-icons/fa6';
import { FaTools } from 'react-icons/fa';

function Layout() {
  const location = useLocation(); 

  const navItems = [
    { to: "/", icon: <IoHomeSharp size={22} className='lg:hidden' />, label: "Home"  },
    { to: "/skill", icon: <FaTools size={22} className='lg:hidden'/>, label: "Skill" },
    { to: "/about", icon: <CgProfile size={22} className='lg:hidden' />, label: "About" },
    { to: "/project", icon: <MdWork size={22} className='lg:hidden'/>, label: "Projects" },
    { to: "/contact", icon: <LuMessageCircleMore size={22} className='lg:hidden' />, label: "Contact" },
  ];

  return (
    <section className='bg-blue-50 z-50 w-full'>

      {/* Header */}
      <header
        className='flex justify-between sticky top-0 p-2 z-50 lg:p-3 h-15 bg-blue-100 items-center '
  
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
              <Link to={item.to} >
                {item.icon}
              
              </Link>
               <Link to={item.to} className='hidden lg:block' >
                
                {item.label }
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
      </header>

      {/* Main content */}
      <main className='px-3 py-1'>
        <Outlet />
      </main>
    </section>
  );
}

export default Layout;
