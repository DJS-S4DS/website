import React from 'react'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import logo from '../static/DJS-S4DS.png'
function Footer() {
    return (
        <div className='flex flex-col w-full h-72 rounded-t-xl border-t-4 border-opacity-30 bg-white bg-opacity-20 text-white text-2xl'>
            <div className='flex w-full h-2/3'>
                <div className='h-full w-1/6 flex justify-center items-center'> <img src={logo} alt="S4DS Logo" /> </div>
                <div className='flex flex-col h-full w-4/6'>
                    <div className='flex justify-center items-center w-full h-1/2'>
                        <div className='flex w-5/6 h-12 bg-white bg-opacity-10 rounded-full'>
                            <input type="text" placeholder="Enter your E-mail" className='w-[80%] bg-black bg-opacity-0 rounded-l-full px-4 pl-6 outline-hidden' />
                            <input type="submit" value="Subscribe" className='flex justify-center w-[20%] bg-white bg-opacity-20 m-1 rounded-full cursor-pointer active:bg-opacity-30' />
                        </div>
                    </div>
                    <div className='flex justify-around items-center w-full h-1/2'>
                        <p>Team</p> <p>Events</p> <p>News</p> <p>Sponsors</p> 
                    </div>
                </div>
                <div className='h-full w-1/6 flex justify-center items-center'> Icon </div>
            </div>
            <div className='flex relative justify-between items-center w-full h-1/3'>
                <div className='absolute top-0 right-0 bg-white w-2/3 h-[2px]'></div>
                <div className='flex px-10 space-x-3 items-center justify-start h-full w-1/3'> <FaInstagram size={40} /> <FaLinkedin size={40} /> <p className='text-base'>@djs_s4ds</p> </div>
                <div className='flex px-10 space-x-3 items-center justify-center h-full w-1/3'>Connect with us</div>
                <div className='flex px-10 space-x-3 items-center justify-end h-full w-1/3'> <p className='text-base'>info.djs4ds@gmail.com</p> <FiMail size={40} /> </div>
            </div>
        </div>
    )
}

export default Footer
