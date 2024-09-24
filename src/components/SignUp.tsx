import React,{useState} from "react";
import background from "../assets/background.jpg"

import {FaEye, FaEyeSlash} from "react-icons/fa";

const SignUp = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string>('');

    const handleSignUp = async (e:any) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setError(null);

        try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('Sign up successful! You can now log in.');
            } else {
                setError(data.message || 'An error occurred during sign-up');
            }
        } catch (err) {
            setError('Failed to sign up. Please try again.');
        }
    };


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
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
                    <p className="font-slackey text-[36px] mb-4">Sign Up</p>
                    <form onSubmit={handleSignUp}>
                       <div className="flex border border-borderOrange rounded-md items-center text-[12px] my-2 pl-[15px]  w-4/6 h-[50px]">
                            <input 
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} 
                            required
                            className="border-none outline-none focus-visible:border-none w-4/5" 
                            placeholder="Username"></input>
                        </div>
                    <div className="relative w-full flex justify-center">
                        <div className="flex border border-borderOrange rounded-md items-center text-[12px] my-2 pl-[15px]  w-4/6 h-[50px]">
                            <input 
                            type={passwordVisible?"text":"password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                            className="border-none outline-none focus-visible:border-none w-4/5" 
                            placeholder="Password"></input>
                            <label 
                            className="ml-[30px]" 
                            onClick={handlePassword}>{passwordVisible?<FaEye />:<FaEyeSlash/>}</label>
                        </div>
                    </div>
                    <div className="relative w-full flex justify-center">
                        <div className="flex border border-borderOrange rounded-md items-center text-[12px] my-2 pl-[15px]  w-4/6 h-[50px]">
                            <input 
                            type={passwordVisible?"text":"password"}
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            required
                            className="border-none outline-none focus-visible:border-none w-4/5" 
                            placeholder="Confirm Password"></input>
                            <label 
                            className="ml-[30px]" 
                            onClick={handlePassword}>{passwordVisible?<FaEye />:<FaEyeSlash/>}</label>
                        </div>
                        
                    
                    </div>
                    </form>
                    <button type="submit" className="mt-3 py-2 px-7 bg-buttonYellow rounded-full items-center text-[22px] shadow-md shadow-gray-400 "> Create Account</button>

                </div>
            </div>

         </div>
         

        </div>
    )
}

export default SignUp;