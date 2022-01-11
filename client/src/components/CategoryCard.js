import React, { useRef, useState } from 'react'
import { motion } from "framer-motion"
import './CategoryCard.css'
import Frame from './Frame'

function CategoryCard(props) {
    const coreMembers = props.info.members.core
    const co_commMembers = props.info.members.co_comm

    /* Used for co comm sliding down menu */
    //const [co_commToggle, setCo_commToggle] = useState(false)

    const overflowRef = useRef()
    const overflowParentRef = useRef()
    const [leftDragConstraint, setLeftDragConstraint] = useState(0)

    const hiddenStyle = {
        transform: "scale(0)",
        height: "0",
        marginTop: "0"
    }
    const dropDownStyle = {
        transform: "scale(1)",
        height: "auto",
        marginTop: "0.5rem"
    }
    
    /* Used for co comm sliding down menu */
    /* const buttonSlideDownStyle = {
        opacity: "0",
        zIndex: "-10",
        transition: "opacity 0.1s linear"
    } */

    return (
            <div className='my-5 h-screen w-11/12 flex flex-col items-center '>
                <div className='z-10 flex flex-col items-center justify-center w-4/6'>
                    <div className='flex justify-center items-center bg-opacity-10 bg-white rounded-3xl w-full h-auto px-4 py-3'>
                        <div className=' h-full flex items-center justify-center'>
                            {coreMembers[0]!==undefined? <Frame members={coreMembers[0]} /> : null}
                        </div>
                        <div className='w-1/2 flex flex-col items-center justify-center h-72'>
                            <p className='text-lg lg:text-6xl font-semibold  capitalize w-1/3 flex justify-center text-center'>{props.info.dept} heads</p>
                            {/* <button 
                                className='text-sm lg:text-md bg-white bg-opacity-30 rounded-lg p-2'
                                onClick={()=>{setCo_commToggle(true)}}    
                                style={co_commToggle ? buttonSlideDownStyle : null}
                            >
                                Co-committee
                            </button> */}
                        </div>
                        <div className=' h-full flex items-center justify-center'>
                            {coreMembers[1]!==undefined? <Frame members={coreMembers[1]} /> : null}
                        </div>
                    </div>
                {co_commMembers!==undefined?
                <div 
                    className='w-full transition-all origin-top flex flex-col items-center'
                    style={true ? dropDownStyle : hiddenStyle}
                >
                        {/* <button 
                            className='text-3xl bg-white bg-opacity-20 rounded-md p-2'
                            onClick={()=>{setCo_commToggle(false)}}
                        >
                            Co-Committee
                        </button> */}
                    <div 
                    className='w-auto max-w-full relative mt-2 flex overflow-x-hidden h-72 rounded-3xl bg-white bg-opacity-10 justify-center border-4 border-x-8 border-[rgba(255,255,255,0.4)] overflow-y-hidden'
                    ref={overflowParentRef}
                    >
                        <div 
                        className='absolute right-[0] bottom-[4px] h-[calc(18rem-8px)] rounded-r-2xl w-12 bg-gradient-to-l from-[rgba(0,0,0,0.5)] to-transparent z-10'
                        ></div>
                        <div 
                        className='absolute left-[0] bottom-[4px] h-[calc(18rem-8px)] rounded-l-2xl w-12 bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-transparent z-10'
                        ></div>
                        <motion.div 
                            className='h-full w-auto flex items-center mb-4'
                            ref={overflowRef}
                            drag={'x'}
                            dragElastic={0.1}
                            onLoad={()=>{setLeftDragConstraint(Math.max(0,overflowRef.current.offsetWidth-overflowParentRef.current.offsetWidth));}}
                            dragConstraints={{ right:leftDragConstraint/2, left: -leftDragConstraint/2 }}
                        >
                        {co_commMembers.map((item,index)=>{
                            return <Frame members={item} key={index} />
                        })}
                        </motion.div>
                    </div>
                </div>
                : 
                    <div className='my-4'>
                    </div>
                }
                </div>
            </div>
            
    )
}

export default CategoryCard
