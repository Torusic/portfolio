import React from 'react';
import logo from "../assets/logo.png";
import Divider from '../Components/Divider';
import profile from '../assets/simo.jpeg';
import { Link, Outlet } from 'react-router-dom';
import { IoHomeSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
import { CgProfile } from "react-icons/cg"

function Layout() {
  return (
    <section className='bg-blue-50 z-50   w-full'>
      {/* Header stays here */}
      <header className='flex justify-between sticky  top-0 p-2 lg:p-3 h-15 bg-blue-100 items-center'>
        <img src={logo} width={120} height={70} alt="Logo"/>
        <div className='flex items-center text-sm cursor-pointer font-semibold text-blue-500 justify-between gap-5 lg:gap-4'>
          <p><Link to="/"><IoHomeSharp size={20} /></Link></p>
          <p><Link to="/about"><CgProfile size={20} /></Link></p>
          <p><Link to="/project"><MdWork size={20} /></Link></p>
          <p><Link to="/contact"><LuMessageCircleMore size={20} /></Link></p>
        </div>
      </header>

      {/* Main content of each page */}
      <main className='px-3 py-1'>
        <Outlet />
      </main>
    </section>
  );
}

export default Layout;
