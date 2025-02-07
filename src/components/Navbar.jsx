// import React from 'react'
// import logo from '../assets/payvalogo.png'
// import { IoIosArrowDown } from "react-icons/io";


// const Navbar = () => {
//   return (
//     <div className='px-12 py-4'>
//         <div className='flex justify-evenly'>
// <img src={logo} />


// <p className='flex items-center gap-x-1 text-xl'>Products <span className='mt-1'><IoIosArrowDown /></span></p>
// <p className='flex items-center gap-x-1 text-xl'>Company <span className='mt-1'><IoIosArrowDown /></span></p>
// <p className='flex items-center gap-x-1 text-xl'>Resources <span className='mt-1'><IoIosArrowDown /></span></p>
// <p className='flex items-center gap-x-1 text-xl'>Help <span className='mt-1'><IoIosArrowDown /></span></p>

// <button className='border border-[#FF6A2B] rounded-3xl px-9 py-2'>LOGIN</button>
// <button className='bg-[#FF6A2B] text-white rounded-3xl px-9 py-2'>SIGN UP</button>

// </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react'
import logo from '../assets/payvalogo.png'
import { IoIosArrowDown } from "react-icons/io";
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='px-4 md:px-16 py-4'>
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <img src={logo} alt="Payva Logo" className='w-24 md:w-auto' />

        {/* Mobile Menu Button */}
        <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-16'>
          <p className='flex items-center gap-x-1 text-xl'>Products <IoIosArrowDown className="mt-1" /></p>
          <p className='flex items-center gap-x-1 text-xl'>Company <IoIosArrowDown className="mt-1" /></p>
          <p className='flex items-center gap-x-1 text-xl'>Resources <IoIosArrowDown className="mt-1" /></p>
          <p className='text-xl'>Help </p>
        </div>

        {/* Auth Buttons */}
        <div className='hidden md:flex items-center gap-4'>
          <button className='border border-[#FF6A2B] rounded-3xl px-9 py-2'>LOGIN</button>
          <button className='bg-[#FF6A2B] text-white rounded-3xl px-9 py-2'>SIGN UP</button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='absolute top-16 left-0 right-0 bg-white p-4 md:hidden shadow-lg'>
            <div className='flex flex-col gap-4'>
              <p className='flex items-center gap-x-1 text-xl'>Products <IoIosArrowDown className="mt-1" /></p>
              <p className='flex items-center gap-x-1 text-xl'>Company <IoIosArrowDown className="mt-1" /></p>
              <p className='flex items-center gap-x-1 text-xl'>Resources <IoIosArrowDown className="mt-1" /></p>
              <p className='flex items-center gap-x-1 text-xl'>Help <IoIosArrowDown className="mt-1" /></p>
              <button className='border border-[#FF6A2B] rounded-3xl px-9 py-2'>LOGIN</button>
              <button className='bg-[#FF6A2B] text-white rounded-3xl px-9 py-2'>SIGN UP</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar