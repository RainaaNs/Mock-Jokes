import React from "react";
import background from "../assets/background.jpg"
import hide from "../assets/hide.png"

const SignUp : React.FC = () =>{
    return (
        <div className="relative w-full min-h-screen font-poppins">

         <div className="absolute bg-cover bg-center h-full w-full" style={{ backgroundImage: `url(${background})` }} ></div>

         <div className="relative z-10 h-screen flex justify-center items-center">
            <div className="bg-white justify-center w-5/12 h-4/6 rounded-2xl shadow-md shadow-gray-600">
                <div className="flex flex-col h-full justify-center items-center">
                    <p className="font-slackey text-[36px] mb-8">Sign Up</p>
                    <input className="border w-4/6 h-[55px] rounded-md border-borderOrange pl-[15px] items-center text-[12px] my-2" 
                           placeholder="Username"></input>
                    <div className="relative w-full flex justify-center">
                        <input className="border w-4/6 h-[55px] rounded-md border-borderOrange pl-[15px] items-center text-[12px] my-2" 
                            placeholder="Password">
                        </input>
                        <img src={hide} className="absolute right-[165px] top-[30px] w-[13px] h-[13px]" alt="hide"/>
                    </div>
                    <div className="relative w-full flex justify-center">
                    <input className="border w-4/6 h-[55px] rounded-md border-borderOrange pl-[15px] items-center text-[12px] my-2" 
                           placeholder="Confirm Password"></input>
                    <img src={hide} className="absolute right-[165px] top-[30px] w-[13px] h-[13px]" alt="hide"/>
                    </div>
                    <button className="mt-7 h-[73px] w-1/3 bg-buttonYellow rounded-full items-center text-[22px] shadow-md shadow-gray-400 "> Create Account</button>

                </div>
            </div>

         </div>
         

        </div>
    )
}

export default SignUp;