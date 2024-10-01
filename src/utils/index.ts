import ImageSrc from "../assets/Jokesimg.jpg";
import { IoIosHome } from "react-icons/io";
import { MdOutlineManageHistory } from "react-icons/md";
import { FaUser } from "react-icons/fa";



export const ActivityTabs = [
  {
    name: "like",
    lable: "Likes",
  },
  {
    name: "dislike",
    lable: "Dislikes ",
  },
];

export const LikesActivity = [
  {
    id: 1,
    Image: ImageSrc,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    // isLike: true
  },
  {
    id: 2,
    Image: ImageSrc,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    // isLike: false
  },
  {
    id: 3,
    Image: ImageSrc,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    // isLike: true
  },
  {
    id: 4,
    Image: ImageSrc,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    // isLike: true
  },
];

export const DislikesActivity = [
  {
    id: 1,
    Image: ImageSrc,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    // isLike: true
  },
  {
    id: 2,
    Image: ImageSrc,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    // isLike: false
  },
  {
    id: 3,
    Image: ImageSrc,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    // isLike: true
  },
  {
    id: 4,
    Image: ImageSrc,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    // isLike: true
  },
];

export const SIDEBAR_LINKS = [
  {
    id: 1,
    path: "/dashboard",
    name: "Home",
    icon: IoIosHome,
  },
  {
    id: 2,
    path: "/dashboard/manage",
    name: "Manage",
    icon: MdOutlineManageHistory,
  },
  {
    id: 3,
    path: "/dashboard/users",
    name: "User",
    icon: FaUser,
  },
 
];
