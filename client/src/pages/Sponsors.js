import React from 'react'
import Footer from '../components/Footer'
import SponsorCard from '../components/SponsorCard'
import './Sponsors.css'
import { motion } from 'framer-motion'

function Sponsors() {
    return (
        <div
            className='bg-gradient-to-tr from-black via-indigo-800 to-fuchsia-600 pt-[4rem]'>
            <motion.div
            initial={{y:0}}
            animate={{y:-1000}}
            exit={{y:0}}
            transition={{type:"tween"}}
            className="h-full w-full bg-black fixed z-50 top-0"
            ></motion.div>
            <div className="box-container flex-wrap">
                <SponsorCard />
                <SponsorCard />
                <SponsorCard />
                <SponsorCard />
                <SponsorCard />
                <SponsorCard />
            </div>
            <Footer />
        </div>
    )
}

export default Sponsors
