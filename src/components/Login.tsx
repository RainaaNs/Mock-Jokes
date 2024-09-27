import { useState } from "react";
import background from "../assets/background.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom"; // Use this if you're using React Router for navigation

const cookies = new Cookies();

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  function loginUser() {
    try {
      fetch("https://jokes-backend-11nq.onrender.com/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.error) {
            cookies.set("USER-TOKEN", data.token, { path: "/" });
            cookies.set("USER-ID", data.user.id, { path: "/" });
            window.location.href = "/homepage";
          } else {
            alert(data.error);
          }
        });
    } catch (err) {
      alert(err);
      console.error(err);
    }
  }

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
        <div className="bg-white mx-4 md:w-8/12 lg:w-5/12 h-auto p-6 py-10 rounded-2xl shadow-md shadow-gray-600">
          <div className="flex flex-col h-full justify-center items-center">
            <p className="font-slackey text-[28px] sm:text-[32px] lg:text-[36px]mb-8 pt-10 md:pt-0">
              Login
            </p>
            <div className="flex border border-borderOrange rounded-md items-center text-[12px] sm:text-[14px] my-2 pl-[15px] w-10/12 md:w-8/12 lg:w-7/12 h-[50px]">
              <input
                type="text"
                className="border-none outline-none focus-visible:border-none w-full"
                placeholder="Username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div className="relative w-full flex justify-center">
              <div className="flex border border-borderOrange rounded-md items-center text-[12px] sm:text-[14px] my-2 pl-[15px] w-10/12 md:w-8/12 lg:w-7/12 h-[50px]">
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="border-none outline-none focus-visible:border-none w-full pr-10"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
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
              className="py-3 lg:py-2 px-6 md:mt-5 bg-buttonYellow rounded-full text-[18px] sm:text-[20px] lg:text-[22px] shadow-md shadow-gray-400"
              onClick={loginUser}
            >
              Login
            </button>

            {/* Section for users who don't have an account */}
            <div className="mt-6">
              <p className="text-[14px] sm:text-[16px]">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-black font-bold hover:text-yellow-600"
                >
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
