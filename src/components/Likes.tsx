import React from "react";
import background from "../assets/background.jpg";
import left from "../assets/left.png";

const Likes: React.FC = () => {
    return (
        <div className="relative w-full min-h-screen font-poppins">
            <div
            className="absolute bg-cover bg-center h-full w-full"
            style={{ backgroundImage: `url(${background})` }}>
                <div className="relative z-10 h-screen w-1/2 py-[20px] mx-auto flex items-center justify-center">

                    <div className="flex flex-col w-screen mt-[50px]">
                    {/* likes dislikes panel div */}
                        <div className="flex flex-col">
                            <div className="gap-[100px] grid grid-cols-2 text-white text-xl">
                                <p className="col-span-1 text-center">Likes</p>
                                <p className="col-span-1 text-center">Dislikes</p>
                            </div>
                            <div className="bg-buttonYellow w-full mx-auto h-[1px]"></div>
                        </div>

                    {/* jokes list container */}
                        <div className="flex flex-col ">
                            <div className="flex flex-row justify-between pl-[20px] pr-[90px] py-[20px] items-center">
                                <div className="flex flex-row gap-[25px] items-center">
                                    <img src={left} className="w-[45px] h-[45px] bg-red-400" alt="jokeimage" />
                                    <p className="text-[13px] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                </div>
                                <p>😂</p>
                            </div>
                            <div className="flex flex-row justify-between pl-[20px] pr-[90px] py-[20px] items-center">
                                <div className="flex flex-row gap-[25px] items-center">
                                    <img src={left} className="w-[45px] h-[45px] bg-red-400 object-cover" alt="jokeimage" />
                                    <p className="text-[13px] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                </div>
                                <p>😂</p>
                            </div>
                            <div className="flex flex-row justify-between pl-[20px] pr-[90px] py-[20px] items-center">
                                <div className="flex flex-row gap-[25px] items-center">
                                    <img src={left} className="w-[45px] h-[45px] bg-red-400 object-cover" alt="jokeimage" />
                                    <p className="text-[13px] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                </div>
                                <p>😂</p>
                            </div>
                            <div className="flex flex-row justify-between pl-[20px] pr-[90px] py-[20px] items-center">
                                <div className="flex flex-row gap-[25px] items-center">
                                    <img src={left} className="w-[45px] h-[45px] bg-red-400 object-cover" alt="jokeimage" />
                                    <p className="text-[13px] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                </div>
                                <p>😂</p>
                            </div>
                        </div>
                    </div>

                </div>

            
            </div>
        </div>
    )
}

export default Likes;