import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchJokes, Joke } from "../api/jokeApi";
import pepe from "../assets/Pepe.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import background from "../assets/background.jpg";

const HomePage = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [liked, setLiked] = useState<Joke[]>([]);
  const [disliked, setDisliked] = useState<Joke[]>([]);
  const [reactions, setReactions] = useState<{
    [key: number]: { liked: boolean; disliked: boolean };
  }>({});
  const [isVeryFunny, setIsVeryFunny] = useState<boolean | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loadJoke = async () => {
      if (currentPage > jokes.length) {
        try {
          const fetchedJoke = await fetchJokes();
          setJokes((prevJokes) => [...prevJokes, ...fetchedJoke]);
          setError(null);
        } catch (error) {
          setError("Failed to load joke. Please try again.");
        }
      }
    };
    loadJoke();
  }, [currentPage, jokes.length]);

  const currentJoke = jokes[currentPage - 1];

  const checkIfVeryFunny = async (jokeId: number) => {
    try {
      const response = await fetch(
        `https://jokes-backend-11nq.onrender.com/joke/is-funny?id=${jokeId}`
      );
      const data = await response.json();
      console.log(data, "checkIfVeryFunny");
      setIsVeryFunny(data.isVeryFunny);
    } catch (error) {
      console.error("Failed to check if the joke is funny:", error);
    }
  };

  useEffect(() => {
    if (currentJoke) {
      checkIfVeryFunny(currentJoke.id);
    }
  }, [currentJoke]);

  const addToLiked = async () => {
    if (currentJoke) {
      try {
        const response = await fetch(
          "https://jokes-backend-11nq.onrender.com/like",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(currentJoke),
          }
        );
        if (response.ok) {
          setReactions((prevReactions) => ({
            ...prevReactions,
            [currentJoke.id]: { liked: true, disliked: false },
          }));
          console.log("Joke liked successfully");
        } else {
          console.error("Failed to like the joke");
        }
      } catch (error) {
        console.error("Error liking the joke:", error);
      }
    }
  };

  const addToDisliked = async () => {
    if (currentJoke) {
      try {
        const response = await fetch(
          "https://jokes-backend-11nq.onrender.com/dislike",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(currentJoke),
          }
        );
        if (response.ok) {
          setReactions((prevReactions) => ({
            ...prevReactions,
            [currentJoke.id]: { liked: false, disliked: true },
          }));
          console.log("Joke disliked successfully");
        } else {
          console.error("Failed to dislike the joke");
        }
      } catch (error) {
        console.error("Error disliking the joke:", error);
      }
    }
  };

  return (
    <div className="relative w-full min-h-screen font-poppins">
      <div
        className="absolute bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="relative z-10 h-screen flex flex-col">
        <div className="relative z-10 h-screen flex flex-col items-center justify-center gap-16">
          <div className="relative flex flex-row gap-4 justify-center items-center w-2/3 mx-auto  ">
            <img
              src={left}
              className={`w-[50px] h-[50px] transition-transform transform hover:scale-150 active:scale-95 cursor-pointer ${
                currentPage === 1 ? "invisible" : ""
              }`}
              alt="left button"
              onClick={() =>
                setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
              }
            />
            <div className="relative bg-white border rounded-md newshadow p-10 xl:p-14">
              {reactions[currentJoke?.id]?.liked && (
                <div className="absolute right-[-19px] top-[-10px] text-5xl">
                  😂
                </div>
              )}
              {reactions[currentJoke?.id]?.disliked && (
                <div className="absolute right-[-19px] top-[-10px] text-5xl">
                  😑
                </div>
              )}
              <div className="flex flex-col h-full w-full justify-center items-center py-6 px-6">
                <div className="font-slackey lg:text-[20px] xl:text-[26px] mb-8 text-center">
                  {error ? <p>{error}</p> : <p>{currentJoke?.title}</p>}
                </div>
                <div className="text-center lg:text-[20px] xl:text-[25px] lg:w-5/6 xl:w-4/6">
                  {error ? <p>{error}</p> : <p>{currentJoke?.content}</p>}
                </div>
              </div>
            </div>
            <img
              src={right}
              className="w-[50px] h-[50px] transition-transform transform hover:scale-150 active:scale-95 cursor-pointer"
              alt="right button"
              onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
            />
          </div>

          <div className="w-full flex justify-center gap-5 mt-[-20px]">
            <button
              className="mt-7 py-4 px-6 bg-buttonYellow rounded-[25px] items-center md:text-[20px] xl:text-[22px] shadow-md transform active:scale-90"
              onClick={addToLiked}
            >
              😂 Like
            </button>
            <button
              className="mt-7 py-4 h-[73px] px-5 border-2 rounded-[25px] items-center md:text-[20px] xl:text-[22px] shadow-md transform active:scale-90"
              onClick={addToDisliked}
            >
              😑 Dislike
            </button>
            <button
              className="mt-7 py-4 px-6 bg-green-500 rounded-[25px] text-white md:text-[20px] xl:text-[22px] shadow-md transform active:scale-90"
              onClick={() =>
                navigate("/activity", { state: { likedJokes: liked } })
              }
            >
              View Liked
            </button>
            <button
              className="mt-7 py-4 px-6 bg-green-500 rounded-[25px] text-white md:text-[20px] xl:text-[22px] shadow-md transform active:scale-90"
              onClick={() =>
                navigate("/activity", { state: { dislikedJokes: disliked } })
              }
            >
              View Disliked
            </button>
          </div>
        </div>
        {isVeryFunny && (
          <div
            className={`z-10 w-1/6 absolute xl:right-[200px] md:right-[90px] xl:bottom-[100px] md:bottom-[100px] h-2/6
           flex flex-col items-center transform rotate-12`}
          >
            <p className="font-slackey text-lg text-center xl:text-xl text-white">
              Laughter is<br></br> for<br></br> the strong
            </p>
            <img
              src={pepe}
              className="w-[140px] xl:w-[170px] h-auto"
              alt="very funny pepe"
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default HomePage;
