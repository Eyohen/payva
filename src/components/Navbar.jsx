// import React, { useState } from 'react'
// import logo from '../assets/payvalogo.png'
// import { IoIosArrowDown } from "react-icons/io";
// import { Menu } from 'lucide-react';
// import mancart from '../assets/mancart.png'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hover, setIsHover] = useState(false);
//   const [hover2, setIsHover2] = useState(false);
//   const [hover3, setIsHover3] = useState(false);

//   const hoverProduct = () => {
//     setIsHover(hover => !hover)
//   }

//   const hoverCompany = () => {
//     setIsHover2(hover2 => !hover2)
//   }

//   const hoverResources = () => {
//     setIsHover3(hover3 => !hover3)
//   }

//   return (
//     <nav className='px-4 md:px-16 py-4'>
//       <div className='flex justify-between items-center'>
//         {/* Logo */}
//         <img src={logo} alt="Payva Logo" className='w-24 md:w-auto' />

//         {/* Mobile Menu Button */}
//         <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
//           <Menu className="w-6 h-6" />
//         </button>

//         {/* Desktop Navigation */}
//         <div className='hidden md:flex items-center gap-16'>

//           <div className='relative'>
//             <p onMouseOver={hoverProduct} className='flex items-center gap-x-1 text-xl'>Products <IoIosArrowDown className="mt-1" /></p>
//             {hover && <div className='w-[1000px] h-[300px] bg-gray-200 absolute mt-4 px-6 py-12'>

//               <div className='flex justify-center gap-x-12'>

//                 <div>
//                   <p className='font-semibold text-xl'>Products</p>
//                   <p className='mt-4'>International payment</p>
//                   <p>products to help immigrants</p>
//                   <p>thrive financially.</p>

//                   <img src={mancart} className='w-32 pt-9' />
//                 </div>

//                 <div>
//                   <p className='font-semibold text-xl'>International money transfer</p>
//                   <p className='mt-4'>Send money internationally to Canada </p>
//                   <p>and Nigeria.</p>


//                   <p className='font-semibold text-xl pt-12'>Request Money</p>
//                   <p>Share money requests or share a payment link.</p>

//                 </div>


//                 <div>
//                   <p className='font-semibold text-xl'>Global accounts</p>
//                   <p className='mt-4'>Open global accounts to receive hold</p>
//                   <p>and send.</p>
//                 </div>
//               </div>
//             </div> }
// </div>

// <div className='relative'>
//           <p onMouseOver={hoverCompany} className='flex items-center gap-x-1 text-xl'>Company <IoIosArrowDown className="mt-1" /></p>
//           {hover2 && <div className='w-[1000px] h-[300px] bg-gray-200 absolute mt-4 px-6 py-12'>

// <div className='flex justify-center gap-x-12'>

//   <div>
//     <p className='font-semibold text-xl'>Products</p>
//     <p className='mt-4'>International payment</p>
//     <p>products to help immigrants</p>
//     <p>thrive financially.</p>

//     <img src={mancart} className='w-32 pt-9' />
//   </div>

//   <div>
//     <p className='font-semibold text-xl'>International money transfer</p>
//     <p className='mt-4'>Send money internationally to Canada </p>
//     <p>and Nigeria.</p>


//     <p className='font-semibold text-xl pt-12'>Request Money</p>
//     <p>Share money requests or share a payment link.</p>

//   </div>


//   <div>
//     <p className='font-semibold text-xl'>Global accounts</p>
//     <p className='mt-4'>Open global accounts to receive hold</p>
//     <p>and send.</p>
//   </div>
// </div>
// </div> }
//           </div>


//           <div className='relative'>
//           <p onMouseOver={hoverResources} className='flex items-center gap-x-1 text-xl'>Resources <IoIosArrowDown className="mt-1" /></p>
//           {hover3 && <div className='w-[1000px] h-[300px] bg-gray-200 absolute mt-4 px-6 py-12'>

// <div className='flex justify-center gap-x-12'>

//   <div>
//     <p className='font-semibold text-xl'>Products</p>
//     <p className='mt-4'>International payment</p>
//     <p>products to help immigrants</p>
//     <p>thrive financially.</p>

//     <img src={mancart} className='w-32 pt-9' />
//   </div>

//   <div>
//     <p className='font-semibold text-xl'>International money transfer</p>
//     <p className='mt-4'>Send money internationally to Canada </p>
//     <p>and Nigeria.</p>


//     <p className='font-semibold text-xl pt-12'>Request Money</p>
//     <p>Share money requests or share a payment link.</p>

//   </div>


//   <div>
//     <p className='font-semibold text-xl'>Global accounts</p>
//     <p className='mt-4'>Open global accounts to receive hold</p>
//     <p>and send.</p>
//   </div>
// </div>
// </div> }
//           </div>

//           <p className='text-xl'>Help </p>
//         </div>

//         {/* Auth Buttons */}
//         <div className='hidden md:flex items-center gap-4'>
//           <button className='border border-[#FF6A2B] rounded-3xl px-9 py-2'>LOGIN</button>
//           <button className='bg-[#FF6A2B] text-white rounded-3xl px-9 py-2'>SIGN UP</button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className='absolute top-16 left-0 right-0 bg-white p-4 md:hidden shadow-lg'>
//             <div className='flex flex-col gap-4'>
//               <p className='flex items-center gap-x-1 text-xl'>Products <IoIosArrowDown className="mt-1" /></p>
//               <p className='flex items-center gap-x-1 text-xl'>Company <IoIosArrowDown className="mt-1" /></p>
//               <p className='flex items-center gap-x-1 text-xl'>Resources <IoIosArrowDown className="mt-1" /></p>
//               <p className='flex items-center gap-x-1 text-xl'>Help <IoIosArrowDown className="mt-1" /></p>
//               <button className='border border-[#FF6A2B] rounded-3xl px-9 py-2'>LOGIN</button>
//               <button className='bg-[#FF6A2B] text-white rounded-3xl px-9 py-2'>SIGN UP</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import React, { useState } from 'react'
import logo from '../assets/payvalogo.png'
import { IoIosArrowDown } from "react-icons/io";
import { Menu } from 'lucide-react';
import mancart from '../assets/mancart.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const DropdownContent = () => (
    <div className='w-[1000px] h-[300px] bg-gray-200 absolute left-1/2 transform -translate-x-1/2 mt-4 px-6 py-12 '>
      <div className='flex justify-center gap-x-12'>
        <div>
          <p className='font-semibold text-xl'>Products</p>
          <p className='mt-4'>International payment</p>
          <p>products to help immigrants</p>
          <p>thrive financially.</p>
          <img src={mancart} className='w-32 pt-9' alt="Man with cart" />
        </div>

        <div>
          <p className='font-semibold text-xl'>International money transfer</p>
          <p className='mt-4'>Send money internationally to Canada </p>
          <p>and Nigeria.</p>

          <p className='font-semibold text-xl pt-12'>Request Money</p>
          <p>Share money requests or share a payment link.</p>
        </div>

        <div>
          <p className='font-semibold text-xl'>Global accounts</p>
          <p className='mt-4'>Open global accounts to receive hold</p>
          <p>and send.</p>
        </div>
      </div>
    </div>
  );

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
          <div className='relative'
               onMouseEnter={() => handleMouseEnter('products')}
               onMouseLeave={handleMouseLeave}>
            <p className='flex items-center gap-x-1 text-xl cursor-pointer'>
              Products <IoIosArrowDown className="mt-1" />
            </p>
            {activeDropdown === 'products' && <DropdownContent />}
          </div>

          <div className='relative'
               onMouseEnter={() => handleMouseEnter('company')}
               onMouseLeave={handleMouseLeave}>
            <p className='flex items-center gap-x-1 text-xl cursor-pointer'>
              Company <IoIosArrowDown className="mt-1" />
            </p>
            {activeDropdown === 'company' && <DropdownContent />}
          </div>

          <div className='relative'
               onMouseEnter={() => handleMouseEnter('resources')}
               onMouseLeave={handleMouseLeave}>
            <p className='flex items-center gap-x-1 text-xl cursor-pointer'>
              Resources <IoIosArrowDown className="mt-1" />
            </p>
            {activeDropdown === 'resources' && <DropdownContent />}
          </div>

          <p className='text-xl'>Help</p>
        </div>

        {/* Auth Buttons */}
        <div className='hidden md:flex items-center gap-4'>
          <button className='border border-[#FF6A2B] rounded-3xl px-9 py-2'>LOGIN</button>
          <button className='bg-[#FF6A2B] text-white rounded-3xl px-9 py-2'>SIGN UP</button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='absolute top-16 left-0 right-0 bg-white p-4 md:hidden shadow-lg z-50'>
            <div className='flex flex-col gap-4'>
              <p className='flex items-center gap-x-1 text-xl'>Products <IoIosArrowDown className="mt-1" /></p>
              <p className='flex items-center gap-x-1 text-xl'>Company <IoIosArrowDown className="mt-1" /></p>
              <p className='flex items-center gap-x-1 text-xl'>Resources <IoIosArrowDown className="mt-1" /></p>
              <p className='text-xl'>Help</p>
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