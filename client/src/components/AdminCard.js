import React, { useRef } from 'react'
import Frame from './Frame'

function AdminCard(props) {
    const frameRef = useRef()
    const member = {
        department:"admin",
        email:"arihant.sheth0802@gmail.com",
        imstagram:"https://www.instagram.com/arihantsheth/",
        linkedin:"www.linkedin.com/in/arihantsheth",
        name:"Arihant Sheth",
        photo:"None",
    }
    return (
            <div className='my-2 w-11/12 flex justify-center h-screen'>
                <div className='z-10 flex flex-col items-center justify-center w-4/6'>
                <div className='flex flex-col justify-center items-center bg-opacity-0 bg-white rounded-3xl w-full h-auto px-4 py-3'>
                    <div><Frame members={member} /></div>
                    <div className='flex'>
                        <Frame ref={frameRef} members={member} />
                        <Frame ref={frameRef} members={member} />
                        <Frame ref={frameRef} members={member} />
                    </div>
                </div>
                </div>
            </div>
            
    )
}

export default AdminCard
