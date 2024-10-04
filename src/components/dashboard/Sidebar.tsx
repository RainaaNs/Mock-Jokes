import React, { useState } from "react";
import { SIDEBAR_LINKS } from "../../utils";
import { NavLink } from "react-router-dom";

import { IoLogOutSharp } from "react-icons/io5";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index: any) => {
    setActiveLink(index);
  };
  return (
    <div className=" w-16 md:w-[240px] fixed left-0 top-0 z-10 h-screen pt-8 px-4 bg-white">
      {/* logo  */}
      <div>
        <h1 className="font-slackey text-center md:text-2xl mb-16 text-sm -ml-2 ">
          Jokely
        </h1>
      </div>

      <ul className=" mt-6 space-y-2">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={` font-medium rounded-md py-3 px-5  border-activeNav hover:text-black ${
              activeLink === index ? " hover:none bg-activeNav text-white" : ""
            }`}
          >
            <NavLink
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={() => handleLinkClick(index)}
            >
              <span>{<link.icon />}</span>
              <span className=" text-sm hidden md:flex">{link.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className=" w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
       <NavLink to="/login">
        <div 
          className="flex justify-center md:justify-start items-center md:space-x-5">
          <IoLogOutSharp />
          <p className="text-sm font-semibold hidden md:flex ">Log Out</p>
        </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
