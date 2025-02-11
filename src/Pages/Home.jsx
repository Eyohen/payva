import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import hero from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import hero3 from '../assets/hero3.png'
import num1 from '../assets/num1.png'
import num2 from '../assets/num2.png'
import num3 from '../assets/num3.png'
import num4 from '../assets/num4.png'
import num5 from '../assets/num5.png'
import num6 from '../assets/num6.png'
import group1 from '../assets/group1.png'
import rocket from '../assets/rocketlaunch.png'
import appstore from '../assets/appstore.png'
import googlepay from '../assets/googlepay.png'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaPlayCircle } from "react-icons/fa";
import Hero2 from '../components/Hero2';
import Footer from '../components/Footer'
import { IoIosArrowDown } from "react-icons/io";
import canada from '../assets/canada.png'
import nigeria from '../assets/nigeria.png'


const Home = () => {

        const [cad, setCad] = useState(157);
        const [ngn, setNgn] = useState(1);
        const exchangeRate = 150; // 1 NGN = 150 CAD
      
        const handleCadChange = (e) => {
          const cadValue = e.target.value;
          setCad(cadValue);
          setNgn(cadValue / exchangeRate);
        };
      
        const handleNgnChange = (e) => {
          const ngnValue = e.target.value;
          setNgn(ngnValue);
          setCad(ngnValue * exchangeRate);
        };






    return (
        <div className=''>

            <div
                className="bg-cover h-min bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${hero})` }}
            >
                <Navbar />

                <div className='px-4 md:px-48'>

                    <div className='flex flex-col md:flex-row md:gap-y-0 justify-between'>

                    <div>

                    <p className='text-[#FF6A2B] text-6xl font-semibold mt-16 md:mt-32'>Seamless</p>
                    <p className='text-6xl font-semibold mt-2'>global money</p>
                    <p className='text-6xl font-semibold mt-2'>transfers!</p>

                    <p className='max-w-[370px] mt-12 text-lg'>The most convenient money transfer platform
                        to help you easily and more efficiently manage your business</p>

                    <button className='bg-[#FF6A2B] rounded-xl py-4 px-4 text-white text-xl flex gap-x-2 mt-9'><FaPlayCircle color='white' size={24} /> Watch how it works</button>

</div>

{/* check out our rates */}
 <div className='w-[350px] text-center'>
      <p className='font-semibold text-3xl mt-32'>Check out our Rates</p>

      <div className='bg-gray-300 px-6 py-4 rounded-2xl mt-4'>
        <div className='flex justify-between items-center'>
          <input 
            className='font-semibold text-xl w-[100px] bg-gray-300 outline-none text-right' 
            placeholder='150' 
            value={cad}
            onChange={handleCadChange}
          />
          <p className='flex items-center gap-x-2'>
            <img src={canada} className='w-12' alt='Canada Flag' />
            <IoIosArrowDown /> CAD
          </p>
        </div>
      </div>

      <button className='bg-gray-300 rounded-full px-1 py-1 mt-4'>
        <IoIosArrowDown size={25} />
      </button>

      <div className='bg-gray-300 px-6 py-4 rounded-2xl mt-4'>
        <div className='flex justify-between items-center'>
          <input 
            className='font-semibold text-xl w-[100px] bg-gray-300 outline-none text-right' 
            placeholder='1' 
            value={ngn}
            onChange={handleNgnChange}
          />
          <p className='flex items-center gap-x-2'>
            <img src={nigeria} className='w-12' alt='Nigeria Flag' />
            <IoIosArrowDown /> NGN
          </p>
        </div>
      </div>
      <button className='bg-[#FF6A2B] rounded-xl py-4 px-4 text-white text-xl flex items-center gap-x-2 mt-16'>Transfer now<HiOutlineArrowNarrowRight color='white' size={24} /> </button>

    </div>



</div>

                    <div className='flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-center gap-x-32 mt-12'>

                        <p className='flex items-center gap-x-4'><span className='text-[#FF6A2B] text-5xl font-semibold'>300+</span> <p className='text-lg font-semibold max-w-[170px]'>Customer use our website frequently</p></p>

                        <p className='flex items-center gap-x-4'><span className='text-[#FF6A2B] text-5xl font-semibold'>95%</span> <p className='text-lg font-semibold max-w-[170px]'>Satisfaction rate from our customers</p></p>

                        <p className='flex items-center gap-x-4'><span className='text-[#FF6A2B] text-5xl font-semibold'>4.1</span> <p className='text-lg font-semibold max-w-[170px]'>Average customer rating out of 400+</p></p>

                    </div>
                </div>
            </div>


            {/* send money with payva in 3 simple steps */}
            <div
                className=""

            >
                <p className='text-center text-5xl font-semibold mt-12 md:mt-24'>Send money with Pay<span className='text-[#FF6A2B]'>va</span> in </p>
                <p className='text-center text-5xl font-semibold'>3 simple steps</p>

                <div className='flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-center gap-x-16 mt-12'>

                    <div className='shadow-2xl bg-gray-100 w-[400px] rounded-3xl flex flex-col items-center p-2'>
                        <img src={num1} className='object-cover w-[180px] h-[200px]' />
                        <p className='text-2xl font-medium text-center'>1. Open a free account</p>
                        <p className='text-md text-center max-w-[230px]'>Open a free account and send money worldwide. Fast, secure and low-cost. Sign up today!</p>
                    </div>

                    <div className='shadow-2xl bg-gray-100 w-[400px] rounded-3xl flex flex-col items-center p-2'>
                        <img src={num2} className='object-cover w-[180px] h-[200px]' />
                        <p className='text-2xl font-medium text-center'>2. Transfer Money</p>
                        <p className='text-md text-center max-w-[230px]'>Quick, secure, low-cost money transfers worldwide. Send now!</p>
                    </div>

                    <div className='shadow-2xl bg-gray-100 w-[400px] rounded-3xl flex flex-col items-center p-2'>
                        <img src={num3} className='object-cover w-[180px] h-[200px]' />
                        <p className='text-2xl font-medium text-center'>3. Almost Received</p>
                        <p className='text-md text-center max-w-[230px]'>Your transfer is almost complete! Your money is on the way and will arrive soon.</p>
                    </div>

                </div>

            </div>



            {/* send & receive money even faster than a rocket */}
            <div
                className=""

            >
                <div className='flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-center items-center gap-x-16 mt-24'>
                    <div>
                        <p className='text-center text-5xl font-semibold'>Send & Recieve Money even faster</p>
                        <p className='text-center text-5xl font-semibold'>faster than a <span className='text-[#FF6A2B]'>Rocket</span></p>

                        <p className='max-w-[370px] text-lg mt-4 px-4 md:px-0'>Move your money across borders in seconds. With our secure, low-cost transfers, you can send and recieve funds instantly.
                        </p>

                        <div className='px-4 md:px-0'><button className='bg-[#FF6A2B] rounded-xl py-4 px-4 text-white text-xl flex items-center gap-x-2 mt-9'>Sign Up for free<HiOutlineArrowNarrowRight color='white' size={24} /> </button></div>

                    </div>
                    <img src={rocket} className='object-cover w-[350px] ' />

                </div>
            </div>

            {/* the payva advantage: secure, fast and flexible */}
            <div
                className=""

            >
                <p className='text-center text-5xl font-semibold mt-24'>The Pay<span className='text-[#FF6A2B]'>va</span> Advantage: Secure, Fast and Flexible </p>

                <div className='flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-center gap-x-16 mt-12'>

                    <div>

                        <div className='shadow-2xl bg-gray-100 rounded-3xl p-6'>
                            <div className='flex gap-x-6'>
                                <div>
                                    <p className='text-2xl font-medium'><span className='text-[#FF6A2B]'>Secure</span> Payments</p>
                                    <p className='text-md max-w-[350px]'>Security is our top priority in everything we build. We conduct regular
                                        security audits with reputable firms to ensure robust protection and compliance
                                        with the highest industry standards.</p>
                                </div>
                                <img src={num4} className='object-cover w-[100px]' />
                            </div>
                        </div>

                        <div className='shadow-2xl bg-gray-100 rounded-3xl p-6 mt-6'>
                            <div className='flex gap-x-6'>
                                <div>
                                    <p className='text-2xl font-medium'><span className='text-[#FF6A2B]'>Multi-Currency</span> Flexibility</p>
                                    <p className='text-md max-w-[350px]'>We harness our extensive banking network to provide native access to multiple
                                        countries, enabling seamless sending and receiving of payments in local currencies.</p>
                                </div>
                                <img src={num5} className='object-cover w-[100px]' />
                            </div>
                        </div>

                    </div>



                    <div className='shadow-2xl bg-gray-100 rounded-3xl flex flex-col items-center px-3 py-6'>

                        <p className='text-2xl font-medium'><span className='text-[#FF6A2B]'>Instant</span> Payout</p>
                        <p className='text-md text-center max-w-[350px]'>Our Web3-enabled platform guarantees fast and seamless international payouts, enabling you to send and recieve funds instantly with enhanced security and efficiency.</p>
                        <img src={num6} className='object-cover w-[180px] h-[200px]' />
                    </div>



                </div>
            </div>


            {/* payva is available */}
            <div className=''>
                <div
                    className=""
                // style={{ backgroundImage: `url(${group1})` }}
                >

                    <div className='flex justify-center md:justify-end px-32 mt-24'>

                        <div>

                            <p className='text-center text-5xl font-semibold'>Pay<span className='text-[#FF6A2B]'>va</span> is available in Canada and Nigeria</p>

                            <p className='max-w-[480px] text-2xl mt-12'>We are expanding and growing fast, join our
                                wait-list and we will give you a shout out when we launch in your country.
                            </p>

                            <button className='bg-black rounded-xl py-4 px-4 text-white text-xl flex items-center gap-x-2 mt-16'>Join Waitlist<HiOutlineArrowNarrowRight color='white' size={24} /> </button>
                        </div>

                    </div>

                </div>

            </div>

            {/* Download section */}

            <div className='px-4 md:px-0'>

                <div className='flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-center items-center gap-x-24 mt-24'>

                    <div>
                        <p className='text-5xl font-semibold '>Download our app and makePay</p>
                        <p className='text-5xl font-semibold pt-[10px]'>the best out of Pay<span className='text-[#FF6A2B]'>va</span></p>
                    </div>

                    <div >
                        <img src={appstore} className='object-cover w-[300px]' />
                        <img src={googlepay} className='object-cover w-[300px] mt-4' />
                    </div>
                </div>

            </div>

            <div className='mb-2 md:mb-32'></div>

            <Footer />


            <div className='mb-8'></div>
        </div>
    )
}

export default Home