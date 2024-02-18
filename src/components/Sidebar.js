import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import myLogo from "../utils/images/y-logo.png";
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
      className={`classify-produds z-10  h-full overflow-y-auto fixed left-0 top-0 ${
        !isMenuOpen ? "w-1/6" : "w-1/5 bg-white"
      }`}
    >
      <div
        className={`absolute left-0 top-0`}
      >
        <div className="flex items-center pt-2">
          <GiHamburgerMenu
            onClick={() => toggleMenuHandler()}
            className="text-4xl mx-4 p-2 hover:cursor-pointer hover:bg-slate-200 hover:rounded-full "
          />
          {isMenuOpen && (
            <img
              className="w-28 ms-1 me-3 hover:cursor-pointer"
              src={myLogo}
              alt="youtube-logo"
            />
          )}
        </div>
        <ul className="pb-4 py-5">
          {displayedData.map((item, index) => (
            <li
              key={index}
              className={`flex items-center p-2 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md ${
                !isMenuOpen ? "flex-col " : ""
              }`}
            >
              <span
                className={` ${
                  !isMenuOpen ? "text-lg" : "text-2xl mx-3"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={` ${
                  !isMenuOpen ? "text-xs mb-4" : " ms-7 me-10 "
                }`}
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
