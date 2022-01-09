import React from 'react'
import { FaAngleDown } from "react-icons/fa";

function YearButton(props) {
    return (
        <div>
            <div className="z-20 fixed h-auto w-auto bottom-1/2 left-5 translate-y-1/2 hover:h-52 hover:w-[8.5rem] hover:translate-y-[11.5rem] group">
                <div className=" h-12 w-24 flex justify-center items-center text-xl font-semibold text-slate-300 bg-black rounded-lg group-hover:w-12 group-hover:translate-x-8 transition-all">
                <div className="flex items-end">
                    <div className="group-hover:opacity-0 transition-opacity">Year</div>{" "}
                    <FaAngleDown className="ml-1 group-hover:mr-[2.6rem] group-hover:animate-bounce transition-all" />
                </div>
                <div className="absolute pointer-events-none group-hover:pointer-events-auto translate-y-[6.5rem] translate-x-6 pl-1 space-y-1 transiiton-none">
                    <div
                    className="bg-white w-24 origin-left scale-x-0 h-12 rounded text-transparent cursor-pointer group-hover:text-black flex items-center justify-center text-sm group-hover:scale-x-100 group-hover:translate-x-12s transition-all "
                    onClick={() => {
                        props.handleYearChange();
                    }}
                    >
                    2019-2020
                    </div>
                    <div
                    className="bg-white w-24 origin-left scale-x-0 h-12 rounded text-transparent cursor-pointer group-hover:text-black flex items-center justify-center text-sm group-hover:scale-x-100 group-hover:translate-x-12s transition-all delay-100"
                    onClick={() => {
                        props.handleYearChange();
                    }}
                    >
                    2020-2021
                    </div>
                    <div
                    className="bg-white w-24 origin-left scale-x-0 h-12 rounded text-transparent cursor-pointer group-hover:text-black flex items-center justify-center text-sm group-hover:scale-x-100 group-hover:translate-x-12s transition-all delay-200"
                    onClick={() => {
                        props.handleYearChange();
                    }}
                    >
                    2021-2022
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default YearButton
