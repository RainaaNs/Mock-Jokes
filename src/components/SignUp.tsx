import React, { useState } from "react";
import background from "../assets/background.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom"; // Use this if you're using React Router for navigation

const SignUp = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success] = useState<string>("");

  function registerUser() {
    try {
      fetch("https://jokes-backend-11nq.onrender.com/register", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.error) {
            window.location.href = "/";
          } else {
            alert(data.error);
          }
        });
    } catch (err) {
      console.error(err);
      alert(err);
      setError(`${err}`);
    }
  }

  const handleSignUp = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    registerUser();
    setError(null);
  };

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const handlePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="relative w-full min-h-screen font-poppins">
      <div
        className="absolute bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <div className="relative z-10 h-screen flex justify-center items-center">
        <div className="bg-white mx-4 w-full sm:w-10/12 md:w-8/12 lg:w-5/12 h-auto p-6 rounded-2xl shadow-md shadow-gray-600">
          <div className="flex flex-col h-full justify-center items-center">
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <p className="font-slackey text-[28px] sm:text-[32px] lg:text-[36px] mb-4">
              Sign Up
            </p>
            <form
              onSubmit={handleSignUp}
              className="w-full flex flex-col items-center"
            >
              <div className="flex border border-borderOrange rounded-md items-center text-[12px] sm:text-[14px] my-2 pl-[15px] w-10/12 md:w-8/12 lg:w-7/12 h-[50px]">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="border-none outline-none focus-visible:border-none w-full"
                  placeholder="Username"
                ></input>
              </div>
              <div className="relative w-full flex justify-center">
                <div className="flex border border-borderOrange rounded-md items-center text-[12px] sm:text-[14px] my-2 pl-[15px] w-10/12 md:w-8/12 lg:w-7/12 h-[50px]">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-none outline-none focus-visible:border-none w-full pr-10"
                    placeholder="Password"
                  ></input>
                  <label
                    className="absolute right-10 md:right-36 cursor-pointer"
                    onClick={handlePassword}
                  >
                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                  </label>
                </div>
              </div>
              <div className="relative w-full flex justify-center">
                <div className="flex border border-borderOrange rounded-md items-center text-[12px] sm:text-[14px] my-2 pl-[15px] w-10/12 md:w-8/12 lg:w-7/12 h-[50px]">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="border-none outline-none focus-visible:border-none w-full pr-10"
                    placeholder="Confirm Password"
                  ></input>
                  <label
                    className="absolute right-10 md:right-36 cursor-pointer"
                    onClick={handlePassword}
                  >
                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 py-2 px-6 bg-buttonYellow rounded-full text-[18px] sm:text-[20px] lg:text-[22px] shadow-md shadow-gray-400"
              >
                Create Account
              </button>
            </form>

            {/* Section for users who already have an account */}
            <div className="mt-6">
              <p className="text-[14px] sm:text-[16px]">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-black font-bold hover:text-yellow-600"
                >
                  Log in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
