import React from "react";
import { ActivityType } from "../../interface/activity.interface";
import Likes from "../Likes";
import Dislikes from "../Dislikes";

const ActivityContent = ({ tab }: { tab: ActivityType }) => {
  return (
    <div className="bg-buttonYellow w-full h-[1px]" >
      {tab === "like" && <Likes />}
      {tab === "dislike" && <Dislikes />}
    </div>
  );
};

export default ActivityContent;
