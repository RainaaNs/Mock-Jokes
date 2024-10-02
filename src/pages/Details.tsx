import React, { useState, useEffect } from "react";
import background from "../assets/background.jpg";
import left from "../assets/left.png";
import { useLocation } from "react-router-dom";
import Cookies from "universal-cookie";
import Navbar from "../components/Navbar";

const cookies = new Cookies();

interface User {
  id: string;
  username: string;
}

interface JokeDetails {
  joke: Joke;
  likers: User[];
  dislikers: User[];
}


interface Joke {
  title: string;
  content: string;
}


const Details = () => {
  const location = useLocation();
  const jokeId = location.state?.jokeId;

  const [jokeDetails, setJokeDetails] = useState<JokeDetails | null>(null);
  const token = cookies.get("USER-TOKEN");

  useEffect(() => {
    const fetchJokeDetails = async () => {
      if (jokeId) {
        try {
          const response = await fetch(
            `https://jokes-backend-11nq.onrender.com/joke-details?id=${jokeId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const data = await response.json();
          if(!data.error){
           setJokeDetails(data);
          console.log("Fetched joke details:", data); 
          }else{
            alert(data.error)
          }
        } catch (error) {
          console.error("Error fetching joke details:", error);
          alert(`Error fetching joke details: ${error}`)
        }
      }
    };
    fetchJokeDetails();
  }, [jokeId, token]);


  const likers = jokeDetails?.likers || [];
  const dislikers = jokeDetails?.dislikers || [];

  return (
    <>
    <Navbar />
      {token && (
        <div className="relative w-full min-h-screen font-poppins">
          <div
            className="fixed overflow-auto bg-cover bg-center h-full w-full"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="relative z-10 h-screen w-1/2 py-[20px] mx-auto flex md:items-center mt-[100px] md:mt-0 justify-center">
              <div className="flex flex-col w-screen">

                <div className="text-white text-center text-[22px] block md:hidden mb-[30px]">
                  <p>Details</p>
                </div>
               

                {/* joke description box */}
                <div className="bg-white w-[310px] md:w-auto rounded-md newshadow ">
                  <div className="flex flex-col justify-center items-center ">
                    <h2 className="p-[13px] text-center text-xl font-slackey">
                      {jokeDetails?.joke.title}
                    </h2>
                    <p className="text-center lg:text-[15px] xl:text-[20px] lg:w-5/6 xl:w-4/6 p-14">
                      {jokeDetails?.joke.content}
                    </p>
                  </div>
                </div>

                {/* separator */}
                <div className="bg-buttonYellow w-[280px] md:w-[550px] mx-auto h-[1px]"></div>

                {/* jokes list container */}
                <div className="flex flex-col text-white text-center md:text-left mt-6">
                  <p className="pt-[18px] mb-3 md:mb-0 text-[16px]">See what others think:</p>

                  {likers.length > 0 || dislikers.length > 0 ? (
                    <>
                      {likers.map((user, index) => (
                        <div
                          key={index}
                          className="flex flex-row justify-between pl-[20px] pr-[50px] py-[20px] items-center md:mb-[-12px]"
                        >
                          <div className="flex flex-row gap-[25px] items-center">
                            <img
                              src={left}
                              className="w-[25px] h-[25px] rounded-full bg-red-400"
                              alt="jokeimage"
                            />
                            <p className="text-[13px] text-white">
                              {user.username}
                            </p>
                          </div>
                          <p aria-label="like">😂</p>
                        </div>
                      ))}
                      {dislikers.map((user, index) => (
                        <div
                          key={index}
                          className="flex justify-between pl-[20px] pr-[50px] py-[20px] items-center"
                        >
                          <div className="flex flex-row gap-[25px] items-center">
                            <img
                              src={left}
                              className="w-[25px] h-[25px] rounded-full bg-red-400"
                              alt="jokeimage"
                            />
                            <p className="text-[13px] text-white">
                              {user.username}
                            </p>
                          </div>
                          <p aria-label="dislike">😑</p>
                        </div>
                      ))}
                    </>
                  ) : (
                    <p className="text-[13px] text-white">No feedback yet.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!token && (window.location.href = "/")}
    </>
  );
};

export default Details;
