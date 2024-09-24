import React, { useState } from "react";
import background from "../assets/background.jpg";

import { useNavigate, useLocation } from "react-router-dom";
import { LikesAcivity } from "../utils";
import LikesCard from "./card/LikesCard";

interface Joke {
  title: string;
  content: string;
}

// declear a var that will store dislike images and liked images

const likeImages = [
  "https://imgs.search.brave.com/b49ILTkvIm0D-PltxS-I2EAP-Yw__P3_zSppmAWcVCQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzLzNmNi9sYXVn/aC0xMzc3ODk0Lmpw/Zz9mbXQ",
  "https://imgs.search.brave.com/m0kv4govM-fhiyGqx6s7w0Nw1oxXT2dsit6e6_efMp4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/cmV0dHktbWl4ZWQt/cmFjZS1mZW1hbGUt/bW9kZWwtbGF1Z2hz/LWhhcHBpbHlfMjcz/NjA5LTI4NTIxLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn",
  "https://imgs.search.brave.com/X0BnpZ95CIBSMQC5nZsdb84iz8-KXgMYtntcu675siM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1USXhPVFE1/TWpnd05WNUJNbDVC/YW5CblhrRnRaVFl3/TnpBd05ETTIuX1Yx/X1FMNzVfVVg4MjBf/LmpwZw",
];

const getRandomItem = (imageArr: string[]): string | undefined => {
  if (imageArr.length === 0) return undefined;
  const randomIndex = Math.floor(Math.random() * imageArr.length);
  return imageArr[randomIndex];
};

const Likes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const likedJokes = location.state?.likedJokes || [];

  const [currentPage, setCurrentPage] = useState(1);  
  const jokesPerPage = 4;

  const indexOfLastJoke = currentPage * jokesPerPage;
  const indexOfFirstJoke = indexOfLastJoke - jokesPerPage;
  const currentJokes = likedJokes.slice(indexOfFirstJoke, indexOfLastJoke);

  const totalPages = Math.ceil(likedJokes.length / jokesPerPage);

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
      {LikesAcivity.map((item) => (
        <LikesCard
          key={item.id}
          image={getRandomItem(likeImages)}
          text={item.text}
        />
      ))}

      <div className="flex flex-col mt-4 ">
        {currentJokes.map((joke: Joke, index: number) => (
          <div
            key={index}
            className="flex flex-row justify-between pl-[20px] pr-[90px] py-[20px] items-center"
            onClick={() => handleJokeClick(joke)}
          >
            <div className="flex flex-row gap-[25px] items-center">
              <p className="text-[13px] text-white cursor-pointer active:scale-95">
                {joke.title}
              </p>
            </div>
            <p>😂</p>
          </div>
        ))}
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

export default Likes;
