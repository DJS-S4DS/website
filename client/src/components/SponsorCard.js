import React from 'react'

function SponsorCard() {
    return (
        <div className="box-item">
            <div className="flip-box">
                <div className="flip-box-front text-center">
                    <div className="inner color-white flex flex-col justify-center items-center">
                        <div className='text-5xl uppercase mb-10 underline underline-offset-8'>
                            sponsor
                        </div>
                        <div className='text-3xl'>
                            Hover me for info
                        </div>
                    </div>
                </div>
                <div className="flip-box-back text-center">
                    <div className="inner color-white flex flex-col items-center space-y-4">
                        <div className='text-4xl uppercase hover:underline'>
                            So much info
                        </div>
                        <div className='text-xl'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non necessitatibus rem beatae pariatur ipsam deserunt fuga quod ex nihil ad!
                        </div>
                        <div className='border-2 border-white text-2xl w-fit px-3 py-1 uppercase rounded'>
                            <div>WEBSITE</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SponsorCard
