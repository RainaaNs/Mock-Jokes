import React, { useState, useEffect } from "react";
import background from "../assets/background.jpg";
import left from "../assets/left.png";
import { useLocation } from "react-router-dom";

import Cookies from "universal-cookie";
const cookies = new Cookies();

interface User {
  id: string;
  username: string;
}

interface JokeDetails {
  title: string;
  content: string;
  likers: User[];
  dislikers: User[];
}

const Details = () => {
  const location = useLocation();
  const joke = location.state?.joke;

  const [jokeDetails, setJokeDetails] = useState<JokeDetails | null>(null);
  const token = cookies.get("USER-TOKEN");

  useEffect(() => {
    const fetchJokeDetails = async () => {
      if (joke && joke.id) {
        try {
          const response = await fetch(
            `https://jokes-backend-11nq.onrender.com/joke-details?id=${joke.id}`,
            {
              headers: {
                authorization: token,
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
  }, [joke]);

  // if (!joke) {
  //     return <div>No joke found!</div>;
  // }

  const likers = jokeDetails?.likers || [];
  const dislikers = jokeDetails?.dislikers || [];

  return (
    <>
      {token && (
        <div className="relative w-full min-h-screen font-poppins">
          <div
            className="absolute bg-cover bg-center h-full w-full"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="relative z-10 h-screen w-1/2 py-[20px] mx-auto flex items-center justify-center">
              <div className="flex flex-col w-screen">
                {/* joke description box */}
                <div className="bg-white border rounded-md newshadow mt-[20px] mb-[20px]">
                  <div className="flex flex-col justify-center items-center ">
                    <h2 className="p-[13px] text-center text-xl font-slackey">
                      {jokeDetails?.title || "Loading..."}
                    </h2>
                    <p className="text-center lg:text-[15px] xl:text-[20px] lg:w-5/6 xl:w-4/6 p-14">
                      {jokeDetails?.content || "Loading..."}
                    </p>
                  </div>
                </div>

                {/* separator */}
                <div className="bg-buttonYellow w-[550px] mx-auto h-[1px]"></div>

                {/* jokes list container */}
                <div className="flex flex-col text-white">
                  <p className="pt-[18px]">See what others think:</p>

                  {likers.length > 0 || dislikers.length > 0 ? (
                    <>
                      {likers.map((user, index) => (
                        <div
                          key={index}
                          className="flex flex-row justify-between pl-[20px] pr-[50px] py-[20px] items-center"
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
