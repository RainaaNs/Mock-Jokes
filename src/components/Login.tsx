import React, {useState} from "react";
import background from "../assets/background.jpg"

import {FaEye, FaEyeSlash} from "react-icons/fa";

const Login = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    const handlePassword=() =>{
        setPasswordVisible(!passwordVisible)
    }

    return (
        
        <div className="relative w-full min-h-screen font-poppins">

        <div className="absolute bg-cover bg-center h-full w-full" style={{ backgroundImage: `url(${background})` }} ></div>

        <div className="relative z-10 h-screen flex justify-center items-center">
           <div className="bg-white justify-center w-5/12 h-4/6 rounded-2xl shadow-md shadow-gray-600">
               <div className="flex flex-col h-full justify-center items-center">
                   <p className="font-slackey text-[36px] mb-8">Login</p>
                       <div className="flex border border-borderOrange rounded-md items-center text-[12px] my-2 pl-[15px]  w-4/6 h-[50px]">
                            <input 
                            type="text"
                            id="text"
                            className="border-none outline-none focus-visible:border-none" 
                            placeholder="Username"></input>
                        </div>
                   <div className="relative w-full flex justify-center">
                        <div className="flex border border-borderOrange rounded-md items-center text-[12px] my-2 pl-[15px]  w-4/6 h-[50px]">
                            <input 
                                type={passwordVisible?"text":"password"}
                                className="border-none outline-none focus-visible:border-none w-4/5" 
                                placeholder="Password"></input>
                                <label 
                                className="ml-[30px]" 
                                onClick={handlePassword}>{passwordVisible?<FaEye />:<FaEyeSlash/>}</label>
                        </div>
                   </div>

                   <button className="py-2 px-5 mt-7 bg-buttonYellow rounded-full items-center text-[20px] shadow-md shadow-gray-400 ">Login</button>

               </div>
           </div>

        </div>
        

       </div>
    )
}

export default Login;