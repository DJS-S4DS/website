import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCaretUp } from 'react-icons/fa'
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

    const scrollToTop = () => {
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      })
    }

    return (
            <div className={`z-20 top-0 flex items-center fixed w-screen h-[4rem] bg-${scrollState?'black':'transparent'} transition-colors duration-300 text-white`}>
                <Link to={'/'} className='text-4xl font-bold mx-2 -tracking-widest'>DJS S4DS</Link>
                <div className='flex space-x-12 ml-20'>
                    <Link to={'/'} className='text-lg font-light cursor-pointer  '>News</Link>    
                    <Link to={'/'} className='text-lg font-light cursor-pointer  '>Events</Link>    
                    <Link to={'/sponsors'} className='text-lg font-light cursor-pointer '>Sponsors</Link>
                    <Link to={'/members'} className='text-lg font-light cursor-pointer  '>Team</Link>    
                </div>
                { scrollState ?
                  <button
                  onClick={scrollToTop}
                  className='fixed right-10 bottom-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center h-12 w-12'
                  >
                    < FaCaretUp size={40} />
                  </button> : null
                }
            </div>
    )
}

export default Navbar
