import React from "react";
import background from "../assets/background.jpg";
import left from "../assets/left.png";
import { useLocation } from "react-router-dom";

const Details = () => {
    const location = useLocation();
    const { title, content } = location.state?.joke || { title: '', content: '' };

    return (
        <div className="relative w-full min-h-screen font-poppins">
            <div
            className="absolute bg-cover bg-center h-full w-full"
            style={{ backgroundImage: `url(${background})` }}>
                <div className="relative z-10 h-screen w-1/2 py-[20px] mx-auto flex items-center justify-center">

                    <div className="flex flex-col w-screen">
                    {/* joke description box */}
                    <div className="bg-white border rounded-md newshadow mt-[20px] mb-[20px]">
                        <div className="flex flex-col justify-center items-center ">
                            <h2 className="p-[13px] text-center text-xl font-slackey">{title}</h2>
                            <p className="text-center lg:text-[15px] xl:text-[20px] lg:w-5/6 xl:w-4/6 p-14">
                                {content}
                            </p>
                        </div>
                    </div>


                    {/* separator */}
                    <div className="bg-buttonYellow w-[550px] mx-auto h-[1px]"></div>


                    {/* jokes list container */}
                        <div className="flex flex-col text-white">
                            <p className="pt-[18px]">See what others think:</p>
                            <div className="flex flex-row justify-between pl-[20px] pr-[50px] py-[20px] items-center">
                                <div className="flex flex-row gap-[25px] items-center">
                                    <img src={left} className="w-[25px] h-[25px] rounded-full bg-red-400" alt="jokeimage" />
                                    <p className="text-[13px] text-white">Lorem ipsum dolor</p>
                                </div>
                                <p>😑</p>
                            </div>
                            <div className="flex flex-row justify-between pl-[20px] pr-[50px] py-[20px] items-center">
                                <div className="flex flex-row gap-[25px] items-center">
                                    <img src={left} className="w-[25px] h-[25px] rounded-full bg-red-400" alt="jokeimage" />
                                    <p className="text-[13px] text-white">Lorem ipsum dolor</p>
                                </div>
                                <p>😑</p>
                            </div>
                            <div className="flex flex-row justify-between pl-[20px] pr-[50px] py-[20px] items-center">
                                <div className="flex flex-row gap-[25px] items-center">
                                    <img src={left} className="w-[25px] h-[25px] rounded-full bg-red-400" alt="jokeimage" />
                                    <p className="text-[13px] text-white">Lorem ipsum dolor</p>
                                </div>
                                <p>😑</p>
                            </div>
                            
                        </div>
                    </div>

                </div>

            
            </div>
        </div>
    )

}

export default Details;
