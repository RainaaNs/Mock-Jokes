import React, { useState } from "react";
import background from "../assets/background.jpg";

import { useNavigate, useLocation } from "react-router-dom";
import { DislikesAcivity } from "../utils";
import DislikesCard from "./card/DislikesCard";

interface Joke {
  title: string;
  content: string;
}

const dislikeImge = [
  "https://imgs.search.brave.com/SfLQwcj7uB9hM7Md_wreHKRc-5y62UszTm6Mijl-D2g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oZWFydGJyZWFr/aW5nLXNhZC1jYXJ0/b29uLWltYWdlLWVt/b3Rpb25hbC10aGVt/ZXNfMTA0NjMxOS0x/NDM3NTIuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
  "https://imgs.search.brave.com/cAp3ZYHlY2NdEdgb8aOmldmUMAVuzhWUVw66bs-OGLQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jYXJ0b29uLW1h/bi13aXRoLXNhZC1m/YWNlLWlzLWNyeWlu/Z18xMTkxODcxLTU4/NTg3LmpwZz9zaXpl/PTYyNiZleHQ9anBn",
  "https://imgs.search.brave.com/FxRMvyxzHx19TCkrwxDhky0YMrLQUPDhbur5JKMubOw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzYzLzU3LzEz/LzM2MF9GXzYzNTcx/Mzk0XzlRWXEyMjZE/Nm03NEtWdGt4V3U5/ejFBSXAyaXNjOEti/LmpwZw",
];

const getRandomItem = (imageArr: string[]): string | undefined => {
  if (imageArr.length === 0) return undefined;
  const randomIndex = Math.floor(Math.random() * imageArr.length);
  return imageArr[randomIndex];
};

const Dislikes = () => {
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
    <div className=" mt-4">
      {DislikesAcivity.map((item) => (
        <DislikesCard
          key={item.id}
          image={getRandomItem(dislikeImge)}
          text={item.text}
        />
      ))}

      <div className=" mt-4">
        <div className="flex flex-col ">
          {currentJokes.map((joke: Joke, index: number) => (
            <div
              key={index}
              className="flex flex-row justify-between pl-[20px] pr-[90px] py-[20px] items-center"
              onClick={() => handleJokeClick(joke)}
            >
              <div className="flex flex-row gap-[25px] items-center">
                {/* <img src={left} className="w-[45px] h-[45px] bg-red-400" alt="jokeimage" /> */}
                <p className="text-[13px] text-white cursor-pointer active:scale-95">
                  {joke.title}
                </p>
              </div>
              <p>😑</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="bg-buttonYellow text-white py-2 px-4 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="bg-buttonYellow text-white py-2 px-4 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dislikes;
