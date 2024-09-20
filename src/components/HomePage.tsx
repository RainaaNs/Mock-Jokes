import React from "react";

import left from "../assets/left.png";
import right from "../assets/right.png";
import background from "../assets/background.jpg";


const HomePage: React.FC = () => {
    return (
       <div className="relative w-full min-h-screen font-poppins">

        <div className="absolute bg-cover bg-center h-full w-full" style={{ backgroundImage: `url(${background})` }} ></div>
            <div className="relative z-10 h-screen flex flex-col items-center">
            <div className="relative z-10 h-screen flex items-center justify-center gap-16">
                <img src={left} className="w-[50px] h-[50px] transition-transform transform hover:scale-150 active:scale-95 cursor-pointer" alt="left button" />
                <div className="bg-white border w-7/12 h-3/5 rounded-md newshadow">
                    <div className="flex flex-col h-full w-full justify-center items-center">
                        <p className="font-slackey lg:text-[33px] xl:text-[36px] mb-8">Joke Title</p>
                        <p className="text-center lg:text-[23px] xl:text-[25px] w-5/6 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>  
                    </div>
                </div>
                <img src={right} className="w-[50px] h-[50px] transition-transform transform hover:scale-150 active:scale-95 cursor-pointer" alt="right button"/>
            </div>
            <div className="w-full flex justify-center gap-5">
            <button className="mt-7 h-[73px] w-1/12 bg-buttonYellow rounded-[25px] items-center text-[22px] shadow-md shadow-gray-400 ">😂 Like</button>
            <button className="mt-7 h-[73px] w-1/12 border-2 rounded-[25px] items-center text-[22px] shadow-md shadow-gray-400 ">😑 Dislike</button>
            </div>
            </div>
          
        </div>
    )

}
export default HomePage;