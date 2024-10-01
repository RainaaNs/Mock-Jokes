import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import pepe from "../assets/Pepe.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import background from "../assets/background.jpg";
import Cookies from "universal-cookie";
import { fetchJokes, Joke } from "../api/jokeApi";

const cookies = new Cookies();

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

  const token = cookies.get("USER-TOKEN");
  const userId = cookies.get("USER-ID");
  const navigate = useNavigate();

  useEffect(() => {
    const loadJoke = async () => {
      if (currentPage > jokes.length) {
        try {
          const fetchedJokes = await fetchJokes();
          setJokes((prevJokes) => [...prevJokes, ...fetchedJokes]);
          setError(null);
        } catch {
          setError("Failed to load joke. Please try again.");
        }
      }
    };
    loadJoke();
  }, [currentPage, jokes.length]);

  const currentJoke = jokes[currentPage - 1];

  useEffect(() => {
    if (currentJoke) {
      const checkIfVeryFunny = async () => {
        try {
          const response = await fetch(
            `https://jokes-backend-11nq.onrender.com/joke/is-funny?id=${currentJoke.id}`
          );
          const data = await response.json();
          setIsVeryFunny(data.isVeryFunny);
        } catch {
          console.error("Failed to check if the joke is funny");
        }
      };
      checkIfVeryFunny();
    }
  }, [currentJoke]);

  const handleReaction = async (joke: Joke, reaction: "like" | "dislike") => {
    try {
      // Check if token exists
      if (!token) {
        alert("Authorization token is missing. Please log in.");
        return;
      }

      const response = await fetch(
        `https://jokes-backend-11nq.onrender.com/${reaction}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`, // Correct Authorization header
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: joke.id, user: userId }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        const isLike = reaction === "like";

        // Update reactions state
        setReactions((prevReactions) => ({
          ...prevReactions,
          [joke.id]: { liked: isLike, disliked: !isLike },
        }));

        // Update liked and disliked arrays conditionally
        if (isLike) {
          setLiked((prev) => [...prev, joke]); // Add to liked
          setDisliked((prev) => prev.filter((j) => j.id !== joke.id)); // Remove from disliked
        } else {
          setDisliked((prev) => [...prev, joke]); // Add to disliked
          setLiked((prev) => prev.filter((j) => j.id !== joke.id)); // Remove from liked
        }

        // Show success alert
        alert(`Joke ${isLike ? "liked" : "disliked"} successfully!`);
      } else {
        // Show error alert with the actual error message from the server
        alert(
          `Failed to ${reaction} the joke: ${data?.error || "Unknown error"}`
        );
      }
    } catch (error) {
      // Display a catch-all error alert
      alert(`Error: Failed to ${reaction} the joke.`);
    }
  };

  return (
    <>
      {token ? (
        <div className="relative w-full min-h-screen overflow-hidden font-poppins">
          <div
            className="fixed overflow-auto bg-cover bg-center h-full w-full"
            style={{ backgroundImage: `url(${background})` }}
          ></div>
          <div className="relative z-10 h-screen flex flex-col justify-center gap-16">
            <div className="relative flex flex-row gap:1 md:gap-4 items-center mx-auto px-4 md:px-0">
              <img
                src={left}
                className={`md:w-[50px] md:h-[50px] w-[30px] h-[30px] transition-transform hover:scale-150 cursor-pointer ${
                  currentPage === 1 ? "invisible" : ""
                }`}
                alt="left"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              />

              <div className="relative text-white md:text-black md:bg-white rounded-md md:shadow md:p-10 xl:p-14">
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
                <div className="md:max-w-[600px]">
                  <div className="text-center font-slackey md:pb-5 pb-10 lg:text-[20px] xl:text-[26px] md:w-full mx-auto px-4 md:px-0">
                    {error ? error : currentJoke?.title}
                  </div>

                  <div className="text-center lg:text-[20px] xl:text-[25px]">
                    {error ? error : currentJoke?.content}
                  </div>
                </div>
              </div>
              <img
                src={right}
                className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] transition-transform hover:scale-150 cursor-pointer"
                alt="right"
                onClick={() => setCurrentPage((prev) => prev + 1)}
              />
            </div>
            <div className="w-full flex flex-col md:flex-row justify-center md:gap-5 absolute md:relative bottom-16 md:bottom-3">
              <div className="flex md:flex-row justify-center gap-5">
                <button
                  className="mt-7 py-2 px-6 bg-buttonYellow rounded-[25px] text-[20px] shadow-md"
                  onClick={() => handleReaction(currentJoke, "like")}
                >
                  😂 Like
                </button>
                <button
                  className="mt-7 py-4 h-[73px] px-5 border-2 rounded-[25px] text-[20px] shadow-md"
                  onClick={() => handleReaction(currentJoke, "dislike")}
                >
                  😑 Dislike
                </button>
              </div>

              <div className=" flex md:flex-row justify-center gap-5">
                <button
                  className="mt-7 py-4 px-6 bg-green-500 rounded-[25px] text-white text-[20px] shadow-md"
                  onClick={() =>
                    navigate("/activitypage", { state: { likedJokes: liked } })
                  }
                >
                  View Liked
                </button>
                <button
                  className="mt-7 py-4 px-6 bg-green-500 rounded-[25px] text-white text-[20px] shadow-md"
                  onClick={() =>
                    navigate("/activitypage", {
                      state: { dislikedJokes: disliked },
                    })
                  }
                >
                  View Disliked
                </button>
              </div>
            </div>
            {isVeryFunny && (
              <div className="z-10 w-1/6 absolute xl:right-[170px] md:bottom-[100px] top-[170px] md:top-[400px] right-[60px] md:right-[200px] flex flex-col items-center transform rotate-12">
                <p className="font-slackey text-xl text-center text-white">
                  Laughter is
                  <br />
                  for the strong
                </p>
                <img
                  src={pepe}
                  className="w-[140px] xl:w-[170px]"
                  alt="very funny pepe"
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        (window.location.href = "/")
      )}
    </>
  );
};

export default HomePage;
