import React from 'react';
import logo from "../assets/logo.png";
import Divider from '../Components/Divider';
import profile from '../assets/simo.jpeg';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <section className='bg-blue-50    w-full'>
      {/* Header stays here */}
      <header className='flex justify-between sticky  top-0 p-2 lg:p-3 h-15 bg-blue-100 items-center'>
        <img src={logo} width={120} height={70} alt="Logo"/>
        <div className='flex items-center text-sm cursor-pointer font-semibold text-blue-500 justify-between gap-2 lg:gap-4'>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/project">Projects</Link></p>
          <p><Link to="/contact">Contacts</Link></p>
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
