import React from 'react'
import logo from '../assets/payvalogo.png'
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <div className='px-32'>

<div className='border'></div>

        <div className='flex justify-around py-8'>

         <div>
        <img src={logo} />
        <button className='flex gap-x-2 items-center border border-black rounded-full px-6 py-2 mt-11'>English (US)< IoIosArrowDown  size={21}/></button>
        </div>   
        
        <div>
            <p className='font-semibold text-xl'>Product</p>
            <p>International money transfer</p>
            <p>Global account</p>
            <p>Request money</p>
        </div>
        
        <div>      
              <p className='font-semibold text-xl'>Company</p>
            <p>About us</p>
            <p>Blog </p>
            <p>Careers </p>
            </div>


        <div>
        <p className='font-semibold text-xl'>Support</p>
            <p>FAQs</p>
            <p>Contact us </p>
            <p>Submit a request</p>
        </div>
          
        </div>

        <div className='border'></div>

<div className='flex gap-x-12 mt-4'>

        <p>Copyright</p>

        <p>© 2025</p>

        <p>All rights reserved </p>

        </div>


    </div>
  )
}

export default Footer