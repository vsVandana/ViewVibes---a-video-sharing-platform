import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import myLogoIcondh from "../utils/images/youtube.png";
import myLogoIconlh from "../utils/images/youtube-dark.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  AiFillHome,
  AiFillVideoCamera,
  AiOutlineHistory,
  AiFillSetting,
} from "react-icons/ai";
import { PiThumbsUpFill } from "react-icons/pi";
import {
  MdOutlineWatchLater,
  MdOutlinedFlag,
  MdHelp,
  MdFeedback,
  MdVideoLibrary,
} from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { ImVideoCamera } from "react-icons/im";
import Footer from "./Footer";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const sidebarData = [
    { icon: <AiFillHome />, title: "Home" },
    { icon: <ImVideoCamera />, title: "Shorts" },
    { icon: <AiFillVideoCamera />, title: "Subscription" },
    { icon: <MdVideoLibrary />, title: "Library" },
    { icon: <AiOutlineHistory />, title: "History" },
    { icon: <RiVideoLine />, title: "Your Videos" },
    { icon: <MdOutlineWatchLater />, title: "Watch Later" },
    { icon: <PiThumbsUpFill />, title: "Liked Videos" },
    { icon: <AiFillSetting />, title: "Settings" },
    { icon: <MdOutlinedFlag />, title: "Report History" },
    { icon: <MdHelp />, title: "Help" },
    { icon: <MdFeedback />, title: "Send Feedback" },
  ];

  const displayedData = isMenuOpen ? sidebarData : sidebarData.slice(0, 5);

  return (
    <div
      className={`classify-produds z-10 h-full overflow-y-auto fixed left-0 top-0  ${
        !isMenuOpen ? "w-1/6" : "w-1/4 bg-white text-black"
      }`}
    >
      <div className={`absolute left-0 top-0`}>
        <div className="flex items-center">
          <GiHamburgerMenu
            onClick={() => toggleMenuHandler()}
            className="text-4xl mx-4 p-2 my-4 hover:cursor-pointer hover:bg-slate-200 hover:rounded-full "
          />
          {isMenuOpen && (
            <div className="flex items-center hover:cursor-pointer gap-1">
              <img
                className="w-6"
                src={darkTheme ? myLogoIcondh : myLogoIconlh}
                alt="youtube-logo"
              />
              <span className="font-bold text-xl">ViewVibes</span>
            </div>
          )}
        </div>
        <ul className="pb-4 py-7">
          {displayedData.map((item, index) => (
            <li
              key={index}
              className={`flex items-center p-2 hover:cursor-pointer  hover:rounded-md ${
                !isMenuOpen ? "flex-col " : ""
              } ${!isMenuOpen && darkTheme ? "hover:bg-gray-900" : "hover:bg-gray-200"}`}
            >
              <span className={` ${!isMenuOpen ? "text-xl" : "text-2xl mx-3"}`}>
                {item.icon}
              </span>
              <span
                className={` ${!isMenuOpen ? "text-xs mb-4" : " ms-7 me-10 "}`}
              >
                {item.title}
              </span>
            </li>
          ))}
        </ul>
        {isMenuOpen && <hr />}
        {isMenuOpen && <Footer />}
      </div>
    </div>
  );
};

export default Sidebar;
