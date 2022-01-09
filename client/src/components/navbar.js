import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Navbar() {

    let listener = null
    const [scrollState, setScrollState] = useState(false)
  
    useEffect(() => {
      // eslint-disable-next-line
      listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop
        if (scrolled >= 1) {
          if (scrollState !== true) {
            setScrollState(true)
          }
        } else {
          if (scrollState !== false) {
            setScrollState(false)
          }
        }
      })
      return () => {
        document.removeEventListener("scroll", listener)
      }
      // eslint-disable-next-line
    }, [scrollState])

    return (
            <div className={`z-20 top-0 flex items-center fixed w-screen h-[4rem] bg-${scrollState?'black':'transparent'} transition-colors duration-300 text-white`}>
                <Link to={'/'} className='text-4xl font-bold mx-2 -tracking-widest'>DJS S4DS</Link>
                <div className='flex space-x-12 ml-20'>
                    <Link to={'/'} className='text-lg font-light cursor-pointer  '>News</Link>    
                    <Link to={'/'} className='text-lg font-light cursor-pointer  '>Events</Link>    
                    <Link to={'/sponsors'} className='text-lg font-light cursor-pointer '>Sponsors</Link>
                    <Link to={'/members'} className='text-lg font-light cursor-pointer  '>Team</Link>    
                </div>
            </div>
    )
}

export default Navbar
