import React from "react";
import Emoji from "../../assets/notGood.png";

const dislikeImages = [
  "https://imgs.search.brave.com/SfLQwcj7uB9hM7Md_wreHKRc-5y62UszTm6Mijl-D2g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oZWFydGJyZWFr/aW5nLXNhZC1jYXJ0/b29uLWltYWdlLWVt/b3Rpb25hbC10aGVt/ZXNfMTA0NjMxOS0x/NDM3NTIuanBnP3Np/emU9NjI2JmV4dD1q/cGc",
  "https://imgs.search.brave.com/cAp3ZYHlY2NdEdgb8aOmldmUMAVuzhWUVw66bs-OGLQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jYXJ0b29uLW1h/bi13aXRoLXNhZC1m/YWNlLWlzLWNyeWlu/Z18xMTkxODcxLTU4/NTg3LmpwZz9zaXpl/PTYyNiZleHQ9anBn",
  "https://imgs.search.brave.com/FxRMvyxzHx19TCkrwxDhky0YMrLQUPDhbur5JKMubOw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzYzLzU3LzEz/LzM2MF9GXzYzNTcx/Mzk0XzlRWXEyMjZE/Nm03NEtWdGt4V3U5/ejFBSXAyaXNjOEti/LmpwZw",
];

const getRandomImage = (images: string[]) => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const DislikesCard = ({ text }: any) => {
  return (
    <div className="flex items-center p-2 justify-between w-full text-white">
      <div className="flex gap-4 items-center">
        <img
          src={getRandomImage(dislikeImages)}
          alt="Jokes img"
          className="w-10 h-10 md:w-20 md:h-20"
        />
        <p className="text-[13px] md:text-base pr-1">{text}</p>
      </div>
      <img src={Emoji} alt="Jokes img" className="w-7 h-7 md:w-16 md:h-16" />
    </div>
  );
};

export default DislikesCard;
