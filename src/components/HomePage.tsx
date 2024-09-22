import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { fetchJokes, Joke } from "../api/jokeApi";

import left from "../assets/left.png";
import right from "../assets/right.png";
import background from "../assets/background.jpg";

const HomePage = () => {
    const [jokes, setJokes] = useState<Joke[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [liked, setLiked] = useState<Joke[]>([]);
    const [disliked, setDisliked] = useState<Joke[]>([]);

    const navigate = useNavigate();
    

    useEffect(() => {
    const loadJoke = async () => {
        if (currentPage > jokes.length) {
            try {
                const fetchedJoke = await fetchJokes();
                setJokes(fetchedJoke);
                setError(null);
            }   catch (error) {
                setError('Failed to load joke. Please try again.');
            }
        }
    };
      loadJoke();
    }, [currentPage, jokes.length]);


    const currentJoke = jokes[currentPage - 1];


    const addToLiked = () => {
      if (currentJoke && !liked.some(joke => joke.title === currentJoke.title)) {
        setLiked((prevLiked) => {
          const updatedDisliked = disliked.filter(joke => joke.title !== currentJoke.title);
          setDisliked(updatedDisliked);
          return [...prevLiked, currentJoke]; 
      });
    }
  };

    const addToDisliked = () => {
      if (currentJoke && !disliked.some(joke => joke.title === currentJoke.title)) {
        setDisliked((prevDisliked) => {
          const updatedLiked = liked.filter(joke => joke.title !== currentJoke.title);
          setLiked(updatedLiked); 
          return [...prevDisliked, currentJoke]; 
      });
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

          <div className="relative flex flex-row gap-4 justify-center items-center w-2/3 mx-auto">
            <img
              src={left}
              className="w-[50px] h-[50px] transition-transform transform hover:scale-150 active:scale-95 cursor-pointer"
              alt="left button"
              onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
            />
            <div className="bg-white border rounded-md newshadow">
              <div className="flex flex-col h-full w-full justify-center items-center py-6 px-6">
                <p className="font-slackey lg:text-[20px] xl:text-[26px] mb-8 text-center">
                    {error ? <p>{error}</p> : <p>{currentJoke?.title}</p>}
                </p>
                <div className="text-center lg:text-[20px] xl:text-[25px] lg:w-5/6 xl:w-4/6">
                   {error ? <p>{error}</p> : <p>{currentJoke?.content}</p>}
                </div>
              </div>
            </div>
            <img
              src={right}
              className="w-[50px] h-[50px] transition-transform transform hover:scale-150 active:scale-95 cursor-pointer"
              alt="right button"
              onClick={() => setCurrentPage(prevPage => prevPage + 1)}
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
            onClick={addToDisliked}>
              😑 Dislike
            </button>
            <button
              className="mt-7 py-4 px-6 bg-green-500 rounded-[25px] text-white md:text-[20px] xl:text-[22px] shadow-md transform active:scale-90"
              onClick={() => navigate('/likes', { state: { likedJokes: liked } })}
            >
              View Liked
            </button>
            <button
              className="mt-7 py-4 px-6 bg-green-500 rounded-[25px] text-white md:text-[20px] xl:text-[22px] shadow-md transform active:scale-90"
              onClick={() => navigate('/dislikes', { state: { dislikedJokes: disliked } })}
            >
              View Disliked
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
