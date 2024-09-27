import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { ActivityType } from "../../interface/activity.interface";
import { Joke } from "../../api/jokeApi";
import LikesCard from "../card/LikesCard";
import DislikesCard from "../card/DislikesCard";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();
const user = cookies.get("USER-ID");
const token = cookies.get("USER-TOKEN");

const likeImages = [
  "https://imgs.search.brave.com/b49ILTkvIm0D-PltxS-I2EAP-Yw__P3_zSppmAWcVCQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzLzNmNi9sYXVn/aC0xMzc3ODk0Lmpw/Zz9mbXQ",
  "https://imgs.search.brave.com/m0kv4govM-fhiyGqx6s7w0Nw1oxXT2dsit6e6_efMp4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/cmV0dHktbWl4ZWQt/cmFjZS1mZW1hbGUt/bW9kZWwtbGF1Z2hz/LWhhcHBpbHlfMjcz/NjA5LTI4NTIxLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn",
  "https://imgs.search.brave.com/X0BnpZ95CIBSMQC5nZsdb84iz8-KXgMYtntcu675siM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1USXhPVFE1/TWpnd05WNUJNbDVC/YW5CblhrRnRaVFl3/TnpBd05ETTIuX1Yx/X1FMNzVfVVg4MjBf/LmpwZw",
];
const dislikeImages = [
  "https://imgs.search.brave.com/SfLQwcj7uB9hM7Md_wreHKRc-5y62UszTm6Mijl-D2g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oZWFydGJyZWFr/aW5nLXNhZC1jYXJ0/b29uLWltYWdlLWVt/b3Rpb25hbC10aGVt/ZXNfMTA0NjMxOS0x/NDM3NTIuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
  "https://imgs.search.brave.com/cAp3ZYHlY2NdEdgb8aOmldmUMAVuzhWUVw66bs-OGLQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jYXJ0b29uLW1h/bi13aXRoLXNhZC1m/YWNlLWlzLWNyeWlu/Z18xMTkxODcxLTU4/NTg3LmpwZz9zaXpl/PTYyNiZleHQ9anBn",
  "https://imgs.search.brave.com/FxRMvyxzHx19TCkrwxDhky0YMrLQUPDhbur5JKMubOw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzYzLzU3LzEz/LzM2MF9GXzYzNTcx/Mzk0XzlRWXEyMjZE/Nm03NEtWdGt4V3U5/ejFBSXAyaXNjOEti/LmpwZw",
];

const getRandomImage = (images: string[]) => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const ActivityContent = ({ tab }: { tab: ActivityType }) => {
  const navigate = useNavigate();

  const [likedJokes, setLikedJokes] = useState<Joke[]>([]);
  const [dislikedJokes, setDislikedJokes] = useState<Joke[]>([]);

  const [selectedJoke, setSelectedJoke] =useState<Joke | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const jokesPerPage = 4;
  const indexOfLastJoke = currentPage * jokesPerPage;
  const indexOfFirstJoke = indexOfLastJoke - jokesPerPage;


  useEffect(() => {
    const fetchJokes = async (type: string) => {
      const response = await fetch(
        `https://jokes-backend-11nq.onrender.com/${type}?user=${user}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if (!data.error) {
        if (type === "likes") {
          setLikedJokes(data.jokes);
        } else {
          setDislikedJokes(data.jokes);
        }
      } else {
        alert(data.error);
      }
    };

    fetchJokes("likes");
    fetchJokes("dislikes");
  }, []);

  const currentJokes =
    tab === "like"
      ? likedJokes.slice(indexOfFirstJoke, indexOfLastJoke)
      : dislikedJokes.slice(indexOfFirstJoke, indexOfLastJoke);

  const totalPages =
    tab === "like"
      ? Math.ceil(likedJokes.length / jokesPerPage)
      : Math.ceil(dislikedJokes.length / jokesPerPage);

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

  return (
    <div className="mt-4">
      <div className="flex items-center px-2 md:px-8">
        <div className=" flex flex-col gap-2 items-center w-full">
          {currentJokes.length > 0 ? (
            currentJokes.map((joke, index) => (
              <div 
              key={index} 
              onClick={()=>{navigate("/details", { state: { jokeId: joke.id } });}} 
              className="w-full"
              >
                {tab === "like" ? (
                  <LikesCard
                    image={getRandomImage(likeImages)}
                    text={joke.title}
                  />
                ) : (
                  <DislikesCard
                    image={getRandomImage(dislikeImages)}
                    text={joke.title}
                  />
                )}
              </div>
            ))
          ) : (
            <p className="text-white">No jokes found.</p>
          )}
        </div>
      </div>

      <div className="flex justify-between px-8 mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="bg-buttonYellow text-white py-2 px-4 rounded disabled:opacity-20"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="bg-buttonYellow text-white py-2 px-4 rounded disabled:opacity-20"
        >
          Next
        </button>
      </div>


      <div className="mt-2 text-white">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

export default ActivityContent;
