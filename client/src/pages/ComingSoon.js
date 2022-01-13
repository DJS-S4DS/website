import { motion } from 'framer-motion'
import React from 'react'
import './ComingSoon.css'
function ComingSoon() {
    return (
        <div>
            {/* Moving background gradient */}
            <div className='fixed h-screen w-[300vw] left-0 animate-move-lr bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 '></div>
            <motion.div
            initial={{opacity:1}}
            animate={{opacity:0, scale:0}}
            exit={{opacity:1}}
            transition={{type:"tween", scale:{delay:0.5}}}
            className="h-screen w-full bg-black fixed z-50 top-0"
            ></motion.div>
            {/* Cover for text */}
            <div className='fixed h-screen w-screen bg-black text-white mix-blend-multiply text-[10rem] font-semibold font-sans flex justify-center items-center pointer-events-none'>
                <p className='w-auto pointer-events-auto hover:scale-[1.01] transition-transform duration-500 text-center'>
                    Coming Soon
                </p>
            </div>
        </div>
    )
}

export default ComingSoon
