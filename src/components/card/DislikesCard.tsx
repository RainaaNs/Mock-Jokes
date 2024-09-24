import React from "react";

import JokesImg from "../../assets/Jokesimg.jpg";
import Emoji from "../../assets/notGood.png";

const DislikesCard = ({image, text}: any) => {
  return (
    <div className="flex items-center justify-between p-2">
      <div className=" flex gap-4 items-center" >
        <img src={image} alt="Jokes img" className=" w-20 h-20" />
        <p>{text}</p>
      </div>
      <img src={Emoji} alt="Jokes img" className=" w-14 h-14" />
    </div>
  );
};

export default DislikesCard;
