import React, { useState } from "react";
import background from "../assets/background.jpg";

import { useNavigate, useLocation } from "react-router-dom";
import { DislikesAcivity } from "../utils";
import DislikesCard from "./card/DislikesCard";

interface Joke {
  title: string;
  content: string;
}

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
    <div className=" mt-4" >
      {
        DislikesAcivity.map((item) => (
          <DislikesCard key={item.id} image={item.Image} text={item.text} />
        ))
      }
      
      <div className=" mt-4" >
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
