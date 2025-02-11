// import React, { useState } from 'react'
// import logo from '../assets/payvalogo.png'
// import { IoIosArrowDown } from "react-icons/io";
// import { Menu } from 'lucide-react';
// import mancart from '../assets/mancart.png'
// import womanholding from '../assets/womanholding.png'
// import curvywoman from '../assets/curvywoman.png'

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
//             {hover && <div className='w-[1000px] h-[300px] bg-gray-200 absolute left-1/2 transform -translate-x-1/2 mt-4 px-6 py-12'>

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
//           {hover2 && <div className='w-[1000px] h-[300px] bg-gray-200 absolute left-1/2 transform -translate-x-1/2 mt-4 px-6 py-12'>

// <div className='flex justify-center gap-x-16'>

//   <div>
//     <p className='font-semibold text-xl mt-4'>Company</p>
//     <p className='mt-4'>Get to know us, our vision</p>
//     <p>and mission for immigrants</p>
//     <p>all over the world</p>

//     <img src={womanholding} className='w-28 pt-4' />
//   </div>

//   <div>
//     <p className='font-semibold text-xl'>About Us</p>
//     <p className='mt-4'>Learn everything about Payva</p>
 


//     <p className='font-semibold text-xl pt-12'>Career</p>
//     <p>Join our fast growing team</p>

//   </div>


//   <div>
//     <p className='font-semibold text-xl'>Blog</p>
//     <p className='mt-4'>Read stories about our customers</p>
//     <p>and Payva</p>
 
//   </div>
// </div>
// </div> }
//           </div>


//           <div className='relative'>
//           <p onMouseOver={hoverResources} className='flex items-center gap-x-1 text-xl'>Resources <IoIosArrowDown className="mt-1" /></p>
//           {hover3 && <div className='w-[1000px] h-[300px] bg-gray-200 absolute left-1/2 transform -translate-x-1/2 mt-4 px-6 py-12'>

// <div className='flex justify-between gap-x-12'>

//   <div>
//     <p className='font-semibold text-xl'>FAQs</p>
//     <p className='mt-4'>Frequently asked</p>
//     <p>questions</p>

//     <p className='font-semibold text-xl mt-12'>Read our recent article</p>
//     <p className='mt-4'>Learn more about what</p>
//     <p>Payva offers</p>

//   </div>



//   <div>
//   <img src={curvywoman} className='w-32 pt-32' />
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
import womanholding from '../assets/womanholding.png'
import curvywoman from '../assets/curvywoman.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setIsHover] = useState(false);
  const [hover2, setIsHover2] = useState(false);
  const [hover3, setIsHover3] = useState(false);


    // Mobile states
    const [mobileProducts, setMobileProducts] = useState(false);
    const [mobileCompany, setMobileCompany] = useState(false);
    const [mobileResources, setMobileResources] = useState(false);
    const [mobileHelp, setMobileHelp] = useState(false);



  const handleProducts = (isHovering) => {
    setIsHover(isHovering);
  };

  const handleCompany = (isHovering) => {
    setIsHover2(isHovering);
  };

  const handleResources = (isHovering) => {
    setIsHover3(isHovering);
  };

  // Mobile handlers
  const toggleMobileProducts = () => {
    setMobileProducts(!mobileProducts);
    setMobileCompany(false);
    setMobileResources(false);
    setMobileHelp(false);
  };

  const toggleMobileCompany = () => {
    setMobileProducts(false);
    setMobileCompany(!mobileCompany);
    setMobileResources(false);
    setMobileHelp(false);
  };

  const toggleMobileResources = () => {
    setMobileProducts(false);
    setMobileCompany(false);
    setMobileResources(!mobileResources);
    setMobileHelp(false);
  };

  const toggleMobileHelp = () => {
    setMobileProducts(false);
    setMobileCompany(false);
    setMobileResources(false);
    setMobileHelp(!mobileHelp);
  };

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
               onMouseEnter={() => handleProducts(true)}
               onMouseLeave={() => handleProducts(false)}>
            <p className='flex items-center gap-x-1 text-xl cursor-pointer'>Products <IoIosArrowDown className="mt-1" /></p>
            {hover && (
              <div className='w-[1000px] h-[300px] bg-gray-200 absolute left-1/2 transform -translate-x-1/2 mt-4 px-6 py-12'>
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
            )}
          </div>

          <div className='relative'
               onMouseEnter={() => handleCompany(true)}
               onMouseLeave={() => handleCompany(false)}>
            <p className='flex items-center gap-x-1 text-xl cursor-pointer'>Company <IoIosArrowDown className="mt-1" /></p>
            {hover2 && (
              <div className='w-[1000px] h-[300px] bg-gray-200 absolute left-1/2 transform -translate-x-1/2 mt-4 px-6 py-12'>
                <div className='flex justify-center gap-x-16'>
                  <div>
                    <p className='font-semibold text-xl mt-4'>Company</p>
                    <p className='mt-4'>Get to know us, our vision</p>
                    <p>and mission for immigrants</p>
                    <p>all over the world</p>
                    <img src={womanholding} className='w-28 pt-4' alt="Woman holding" />
                  </div>

                  <div>
                    <p className='font-semibold text-xl'>About Us</p>
                    <p className='mt-4'>Learn everything about Payva</p>
                    <p className='font-semibold text-xl pt-12'>Career</p>
                    <p>Join our fast growing team</p>
                  </div>

                  <div>
                    <p className='font-semibold text-xl'>Blog</p>
                    <p className='mt-4'>Read stories about our customers</p>
                    <p>and Payva</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className='relative'
               onMouseEnter={() => handleResources(true)}
               onMouseLeave={() => handleResources(false)}>
            <p className='flex items-center gap-x-1 text-xl cursor-pointer'>Resources <IoIosArrowDown className="mt-1" /></p>
            {hover3 && (
              <div className='w-[1000px] h-[300px] bg-gray-200 absolute left-1/2 transform -translate-x-1/2 mt-4 px-6 py-12'>
                <div className='flex justify-between gap-x-12'>
                  <div>
                    <p className='font-semibold text-xl'>FAQs</p>
                    <p className='mt-4'>Frequently asked</p>
                    <p>questions</p>
                    <p className='font-semibold text-xl mt-12'>Read our recent article</p>
                    <p className='mt-4'>Learn more about what</p>
                    <p>Payva offers</p>
                  </div>
                  <div>
                    <img src={curvywoman} className='w-32 pt-32' alt="Curvy woman" />
                  </div>
                </div>
              </div>
            )}
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
              {/* Products Mobile Dropdown */}
              <div>
                <button 
                  onClick={toggleMobileProducts}
                  className='flex items-center gap-x-1 text-xl w-full justify-between'
                >
                  <span>Products</span>
                  <IoIosArrowDown className={`mt-1 transform transition-transform ${mobileProducts ? 'rotate-180' : ''}`} />
                </button>
                {mobileProducts && (
                  <div className='bg-gray-100 p-4 mt-2 rounded-lg'>
                    <div className='space-y-4'>
                      <div>
                        <p className='font-semibold text-lg'>Products</p>
                        <p className='mt-2'>International payment products to help immigrants thrive financially.</p>
                      </div>
                      <div>
                        <p className='font-semibold text-lg'>International money transfer</p>
                        <p className='mt-2'>Send money internationally to Canada and Nigeria.</p>
                      </div>
                      <div>
                        <p className='font-semibold text-lg'>Global accounts</p>
                        <p className='mt-2'>Open global accounts to receive hold and send.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Company Mobile Dropdown */}
              <div>
                <button 
                  onClick={toggleMobileCompany}
                  className='flex items-center gap-x-1 text-xl w-full justify-between'
                >
                  <span>Company</span>
                  <IoIosArrowDown className={`mt-1 transform transition-transform ${mobileCompany ? 'rotate-180' : ''}`} />
                </button>
                {mobileCompany && (
                  <div className='bg-gray-100 p-4 mt-2 rounded-lg'>
                    <div className='space-y-4'>
                      <div>
                        <p className='font-semibold text-lg'>About Us</p>
                        <p className='mt-2'>Learn everything about Payva</p>
                      </div>
                      <div>
                        <p className='font-semibold text-lg'>Career</p>
                        <p className='mt-2'>Join our fast growing team</p>
                      </div>
                      <div>
                        <p className='font-semibold text-lg'>Blog</p>
                        <p className='mt-2'>Read stories about our customers and Payva</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Mobile Dropdown */}
              <div>
                <button 
                  onClick={toggleMobileResources}
                  className='flex items-center gap-x-1 text-xl w-full justify-between'
                >
                  <span>Resources</span>
                  <IoIosArrowDown className={`mt-1 transform transition-transform ${mobileResources ? 'rotate-180' : ''}`} />
                </button>
                {mobileResources && (
                  <div className='bg-gray-100 p-4 mt-2 rounded-lg'>
                    <div className='space-y-4'>
                      <div>
                        <p className='font-semibold text-lg'>FAQs</p>
                        <p className='mt-2'>Frequently asked questions</p>
                      </div>
                      <div>
                        <p className='font-semibold text-lg'>Recent Articles</p>
                        <p className='mt-2'>Learn more about what Payva offers</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Help Mobile Dropdown */}
              <div>
                <button 
                  onClick={toggleMobileHelp}
                  className='flex items-center gap-x-1 text-xl w-full justify-between'
                >
                  <span>Help</span>
                  <IoIosArrowDown className={`mt-1 transform transition-transform ${mobileHelp ? 'rotate-180' : ''}`} />
                </button>
                {mobileHelp && (
                  <div className='bg-gray-100 p-4 mt-2 rounded-lg'>
                    <div className='space-y-4'>
                      <div>
                        <p className='font-semibold text-lg'>Support</p>
                        <p className='mt-2'>Get help with your Payva account</p>
                      </div>
                      <div>
                        <p className='font-semibold text-lg'>Contact Us</p>
                        <p className='mt-2'>Reach out to our support team</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Auth Buttons */}
              <button className='border border-[#FF6A2B] rounded-3xl px-9 py-2 mt-4'>LOGIN</button>
              <button className='bg-[#FF6A2B] text-white rounded-3xl px-9 py-2'>SIGN UP</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar