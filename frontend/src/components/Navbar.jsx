// import React from 'react'
// import {assets} from "../assets/assets"
// import { NavLink, useNavigate } from 'react-router-dom'
// import  { useState } from 'react';


// const Navbar = () => {
     
//     const navigate = useNavigate();

//     const [showMenu, setShowMenu] = useState(false)
//     const [token, setToken] = useState(true)

//   return (
//     <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
//         <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
//         <ul className='hidden md:flex items-start gap-5 font-medium '>
//             <NavLink to='/'>
//             <li className='py-1' >Home</li >
//               <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
//             </NavLink>
//             <NavLink to='/doctors'>
//             <li className='py-1'>All Doctors</li >
//               <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//             </NavLink>
//             <NavLink to='/about'>
//             <li className='py-1'>About</li >
//               <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//             </NavLink>
//             <NavLink to='/contact'>
//             <li className='py-1'>Contact</li >
//               <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//             </NavLink>
//         </ul>
//         <div className='flex items-center gap-4'>
//             {
//                 token
//                ? <div className='flex items-center gap-2 cursor-pointer group relative'>
//                 <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
//                 <img className='w-2.5' src={assets.dropdown_icon} alt="" />
//                 <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block '>
//                 <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
//                     <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
//                     <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appoitments</p>
//                     <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
//                 </div>
//                 </div>
//                </div>
//                : <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block '>Create Account</button>
            
//             }
//         </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
// import './index.css'; // Ensure Tailwind is working
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div>
        <img src={logo} className='w-20 h-20' alt="" />
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-12">
        <ul className="flex space-x-8"> {/* Increased spacing */}
          <li><a href="#" className="hover:text-gray-400 transition duration-300">HOME</a></li>
          <li><a href="#about" className="hover:text-gray-400 transition duration-300">ABOUT</a></li>
          <li><a href="#services" className="hover:text-gray-400 transition duration-300">SERVICES</a></li>
          <li><a href="html/contact.html" className="hover:text-gray-400 transition duration-300">CONTACT US</a></li>
        </ul>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          <a href="html/login.html">SignUp / Login</a>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          onClick={toggleMenu} 
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-gray-800 w-full z-50">
          <ul className="flex flex-col space-y-6 p-6"> {/* Added space-y-6 for vertical spacing */}
            <li><a href="#" className="hover:text-gray-400 transition duration-300">HOME</a></li>
            <li><a href="#about" className="hover:text-gray-400 transition duration-300">ABOUT</a></li>
            <li><a href="#services" className="hover:text-gray-400 transition duration-300">SERVICES</a></li>
            <li><a href="html/contact.html" className="hover:text-gray-400 transition duration-300">CONTACT US</a></li>
            <li>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full transition duration-300">
                <a href="html/login.html">SignUp / Login</a>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
