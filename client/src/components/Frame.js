import React from 'react'
import img from '../static/Sample_1.png'
import { FaInstagram, FaLinkedin } from "react-icons/fa";
function Frame(props) {
    return (
        <div className=' parent h-[35vh] w-[15vw] shadow-lg rounded-lg overflow-hidden relative m-2 border-[rgba(255,255,255,0.4)] hover:border-r-4 hover:border-b-4 hover:rounded-2xl transition-none'>
            <div className='child skew h-full w-3/4 flex justify-between'>
                <div className='h-full bg-white strip1'></div>
                <div className='h-full bg-white strip2'></div>
            </div>
            <div className='name-bg absolute bottom-0 w-full h-2/3'></div>
            <div className='name opacity-0 absolute bottom-0 w-full h-1/4 flex flex-col justify-between items-center py-1 px-2 text-white'>
                <div className='text-2xl select-none'>{props.members.name}</div>
                <div className='w-full px-2 pb-1 flex space-x-2'> 
                    {props.members.instagram==="None" ? null : <a href={props.members.instagram} target="_blank" rel="noreferrer noopener">  <FaInstagram size={20}/> </a>} 
                    {props.members.linkedin ==="None" ? null : <a href={props.members.linkedin}  target="_blank" rel="noreferrer noopener">  <FaLinkedin size={20} /> </a>}
                </div>
            {/* <div className='absolute top-1/2 -translate-y-1/2 -left-8 -rotate-90 text-3xl'>CHAIRPERSON</div> */}
            </div>
            <img className='h-full w-full object-cover bg-black bg-opacity-20' src={img} alt="front pic" />
        </div>
    )
}

export default Frame
