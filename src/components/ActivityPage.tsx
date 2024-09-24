import React, { useState } from "react";
import background from "../assets/background.jpg";

import { useNavigate, useLocation } from "react-router-dom";
import { ActivityTabs } from "../utils";
import { ActivityType } from "../interface/activity.interface";
import ActivityContent from "./activity";

interface Joke {
  title: string;
  content: string;
}

const ActivityPage = () => {
  const [tab, setTab] = useState<ActivityType>("like");
  const navigate = useNavigate();
  const location = useLocation();
  const dislikedJokes = location.state?.dislikedJokes || [];

  const [currentPage, setCurrentPage] = useState(1);
  const jokesPerPage = 4;

  const indexOfLastJoke = currentPage * jokesPerPage;
  const indexOfFirstJoke = indexOfLastJoke - jokesPerPage;
  const currentJokes = dislikedJokes.slice(indexOfFirstJoke, indexOfLastJoke);
  const totalPages = Math.ceil(dislikedJokes.length / jokesPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleJokeClick = (joke: Joke) => {
    navigate("/details", { state: { joke } });
  };

  return (
    <div className="relative w-full min-h-screen font-poppins">
      <div
        className="absolute bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="relative z-10 h-full pt-24 md:pt-36 w-[90%] md:w-1/2 mx-auto flex  ">
          <div className="flex flex-col w-screen">
            {/* dislikes dislikes panel div */}
            <div className="flex flex-col">
              <div className=" grid grid-cols-2 text-white text-xl">
                {ActivityTabs.map((item) => (
                  <div
                    key={item.lable}
                    className={`col-span-1 text-center cursor-pointer ${
                      tab === item.name
                        ? " border-b-4 border-buttonYellow  text-buttonYellow w-full"
                        : ""
                    } `}
                    onClick={() => setTab(item.name as ActivityType)}
                  >
                    {item.lable}
                  </div>
                ))}
              </div>
              <ActivityContent tab={tab} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
