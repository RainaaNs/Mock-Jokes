import React, { useState } from "react";
import ActivityContent from "./activity/index";
import { ActivityType } from "../interface/activity.interface";

import background from "../assets/background.jpg";

const ActivityPage = () => {
  const [tab, setTab] = useState<ActivityType>("like");

  return (
    <div className="relative w-full h-screen font-poppins">
      <div
        className="fixed bg-cover bg-center h-full w-full overflow-auto"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="relative z-10 h-full pt-24 md:pt-36 w-[90%] md:w-1/2 mx-auto flex">
          <div className="flex flex-col w-screen">

            <div className="text-white text-center text-[22px] mb-[30px] block md:hidden">
              <p>Account Activity</p>
            </div>

            {/* Likes/dislikes panel div */}
            <div className="flex flex-col">
              <div className="grid grid-cols-2 text-white text-xl tab-buttons">
                <button
                  onClick={() => setTab("like")}
                  className={`col-span-1 text-center cursor-pointer text-[16px] md:text-[22px] md:pb-1 ${
                    tab === "like"
                      ? "border-b-4 w-[100px] md:w-auto border-buttonYellow text-buttonYellow"
                      : "border-b-2 md:w-auto border-buttonYellow"
                  } w-full`}
                >
                  Likes
                </button>
                <button
                  onClick={() => setTab("dislike")}
                  className={`col-span-1 text-center cursor-pointer text-[16px] md:text-[22px] md:pb-1 ${
                    tab === "dislike"
                      ? "border-b-4 w-[100px] md:w-auto border-buttonYellow text-buttonYellow"
                      : "border-b-2 border-buttonYellow"
                  } w-full`}
                >
                  Dislikes
                </button>
              </div>
              <ActivityContent tab={tab} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
