import React from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import printer from '../static/printer.png'
import './Home.css'
function Home() {
    
    return (
        <div>
            <div className='-z-10 fixed h-screen w-full bg-gradient-to-tr from-black via-indigo-800 to-fuchsia-600 '></div>
            <motion.div
            initial={{y:0}}
            animate={{y:-1000}}
            exit={{y:0}}
            transition={{type:"tween"}}
            className="h-full w-full bg-black fixed z-50 top-0"
            ></motion.div>

            <div className='w-full h-screen flex justify-center items-center text-9xl text-white font-semibold tracking-wide'>
                DJS S4DS
            </div>

            <div className='h-screen w-full flex text-slate-200'>
                <div className='h-full w-1/2 flex flex-col items-start justify-center px-10'>
                    <p className='text-9xl font-semibold pl-2 mb-10'>
                        Collect
                    </p>
                    <p className='text-md line-clamp-6 leading-7'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nobis autem quod ex, expedita vitae, libero optio praesentium distinctio ad dolores id facere numquam aut! Eaque eveniet voluptate illo laudantium dolores accusantium officiis, illum quasi tenetur eligendi facilis quibusdam, consequuntur, quod ad cum modi rerum rem non maxime perferendis magnam pariatur beatae magni. Voluptatum, dolorem sunt asperiores aliquam sit nostrum, saepe voluptatem maiores, porro corrupti distinctio molestiae consequatur pariatur consequuntur aspernatur soluta. Veritatis at architecto deserunt accusantium nam optio laboriosam voluptate quo cupiditate, quam itaque rem eum omnis totam vero sit voluptates nostrum? Laboriosam soluta illum vero, aperiam facilis maxime?
                    </p>
                </div>
                <div className='relative h-full w-1/2'>
                    <motion.img
                        whileInView={{opacity:1, scale:0.85 }}
                        viewport={{amount:0.8}}
                        src={printer} alt="printer" 
                        style={{scale:0.75, opacity:0.75}}
                        className='absolute top-0 left-0 translate-x-[6px] z-10' />
                    <div className='absolute bottom-0 left-1/2 -translate-x-[6px] h-full w-[12px] bg-white rounded-br-full'></div> {/* vertical */}
                    <div className='absolute bottom-0 left-1/2 -translate-x-[18px] -translate-y-[12px] h-[12px] w-[12px] bg-white rounded-border'></div> {/* bottom inner corner */}
                    <div className='absolute bottom-0 -left-1/2 translate-x-[6px] h-[12px] w-full bg-white rounded-tl-full rounded-br-full '></div> {/*  horizontal */}
                </div>
            </div>

            <div className='h-screen w-full flex text-slate-200'>
                <div className='relative h-full w-1/2'>
                    <motion.img
                        whileInView={{opacity:1, scale:0.85 }}
                        viewport={{amount:0.8}}
                        src={printer} alt="printer" 
                        style={{scale:0.75, opacity:0.75}}
                        className='absolute top-0 left-0 translate-x-[12px] scale-75 z-10' />
                    <div className='absolute top-0 left-1/2 translate-x-[17px] -translate-y-[1px] h-[12px] w-[12px] bg-white rounded-border rotate-180'></div> {/* upper inner corner */}
                    <div className='absolute bottom-0 left-1/2 translate-x-[6px] h-full w-[12px] bg-white rounded-bl-full'></div> {/* vertical */}
                    <div className='absolute bottom-0 left-1/2 translate-x-[17px] -translate-y-[11px] h-[12px] w-[12px] bg-white rounded-border rotate-90'></div> {/* bottom inner corner */}
                    <div className='absolute bottom-0 left-1/2 translate-x-[6px] h-[12px] w-full bg-white rounded-tr-full rounded-bl-full'></div> {/* horizontal */}
                </div>
                <div className='h-full w-1/2 flex flex-col items-start justify-center px-10'>
                    <p className='text-9xl font-semibold pl-2 mb-10'>
                        Analyze
                    </p>
                    <p className='text-md line-clamp-6 leading-7'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nobis autem quod ex, expedita vitae, libero optio praesentium distinctio ad dolores id facere numquam aut! Eaque eveniet voluptate illo laudantium dolores accusantium officiis, illum quasi tenetur eligendi facilis quibusdam, consequuntur, quod ad cum modi rerum rem non maxime perferendis magnam pariatur beatae magni. Voluptatum, dolorem sunt asperiores aliquam sit nostrum, saepe voluptatem maiores, porro corrupti distinctio molestiae consequatur pariatur consequuntur aspernatur soluta. Veritatis at architecto deserunt accusantium nam optio laboriosam voluptate quo cupiditate, quam itaque rem eum omnis totam vero sit voluptates nostrum? Laboriosam soluta illum vero, aperiam facilis maxime?
                    </p>
                </div>
            </div>

            <div className='h-screen w-full flex text-slate-200'>
                <div className='h-full w-1/2 flex flex-col items-start justify-center px-10'>
                    <p className='text-9xl font-semibold pl-2 mb-10'>
                        Predict
                    </p>
                    <p className='text-md line-clamp-6 leading-7'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nobis autem quod ex, expedita vitae, libero optio praesentium distinctio ad dolores id facere numquam aut! Eaque eveniet voluptate illo laudantium dolores accusantium officiis, illum quasi tenetur eligendi facilis quibusdam, consequuntur, quod ad cum modi rerum rem non maxime perferendis magnam pariatur beatae magni. Voluptatum, dolorem sunt asperiores aliquam sit nostrum, saepe voluptatem maiores, porro corrupti distinctio molestiae consequatur pariatur consequuntur aspernatur soluta. Veritatis at architecto deserunt accusantium nam optio laboriosam voluptate quo cupiditate, quam itaque rem eum omnis totam vero sit voluptates nostrum? Laboriosam soluta illum vero, aperiam facilis maxime?
                    </p>
                </div>
                <div className='relative h-full w-1/2'>
                <motion.img
                        whileInView={{opacity:1, scale:0.85 }}
                        viewport={{amount:0.8}}
                        src={printer} alt="printer" 
                        style={{scale:0.75, opacity:0.75}}
                        className='absolute top-0 left-0 translate-x-[6px] scale-75 z-10' />
                    <div className='absolute top-0 left-1/2 -translate-x-[17px] -translate-y-[1px] h-[12px] w-[12px] bg-white rounded-border -rotate-90'></div> {/* upper inner corner */}
                    <div className='absolute bottom-0 left-1/2 -translate-x-[6px] h-full w-[12px] bg-white rounded-br-full'></div> {/* vertical */}
                    <div className='absolute bottom-0 left-1/2 -translate-x-[17px] -translate-y-[11px] h-[12px] w-[12px] bg-white rounded-border '></div> {/* bottom inner corner */}
                    <div className='absolute bottom-0 -left-1/2 translate-x-[6px] h-[12px] w-full bg-white rounded-tl-full rounded-br-full'></div> {/* horizontal */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
