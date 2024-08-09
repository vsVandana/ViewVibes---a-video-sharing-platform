import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi"
import myLogoIcondh from "../utils/images/youtube.png";
import myLogoIconlh from "../utils/images/youtube-dark.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";
import ThemeIcon from "./ThemeIcon";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const darkTheme = useSelector((state)=>state.theme.darkTheme)
  
  /////The search is using -
  /////1. Live API
  /////2. Debounching
  /////3. Caching
  
  const searchCache = useSelector((store)=>store.search)

  useEffect(() => {
    const fetchSearchSuggessions = async () => {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    };
  
    // console.log(searchQuery);
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        fetchSearchSuggessions();
      }
    }, 200);
  
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchCache, dispatch]);
  
  const toggleMenuHandler = () => {
    console.log("Toggle menu clicked");
    dispatch(toggleMenu());
  };

  return (
    <div className={`flex items-center justify-between fixed top-0 py-4 w-full z-10 ${darkTheme ? 'darktheme' : 'lighttheme'}`}>
      <div className="flex">
        <GiHamburgerMenu
          onClick={() => toggleMenuHandler()}
          className={`text-4xl mx-4 p-2 hover:cursor-pointer hover:rounded-full md:hidden ${darkTheme ? "hover:bg-gray-900" : "hover:bg-gray-200"}`}
        />
        <div className="flex items-center md:mx-24 mx-6 hover:cursor-pointer gap-1">
        <img
          className="w-6"
          src={darkTheme ? myLogoIcondh : myLogoIconlh }
          alt="youtube-logo"
        />
        <span className="font-bold text-xl">ViewVibes</span>
        </div>
      </div>
      <div>
      <div className="flex items-center">
        <input
          className={`w-96 hidden md:block rounded-s-2xl px-5 py-1 hover:border-blue-300 active:border-blue-500 focus:border-blue-400 ${darkTheme ?'bg-[#929295] text-gray-50':'bg-white text-gray-500'}`}
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=> setShowSuggestion(true)}
          onBlur={()=> setShowSuggestion(false)}
         
        />
        <button className={`px-4 py-1 md:border-1 md:rounded-e-2xl ${darkTheme ? 'bg-gray-700' : 'bg-gray-50'} `}>
          <AiOutlineSearch className="text-2xl text-gray-500 hover:cursor-pointer" />
        </button>
      </div>
        {showSuggestion && 
     (<div className="fixed">
        <ul className=" bg-white w-96 shadow-lg rounded-md ">
          {suggestions.map((s) => (
          <li key={s} className="p-2 hover:bg-slate-200">
            {s}
            </li>
          ))}
         
         
        </ul>
      </div>)
      }
      </div>
      
      <ThemeIcon />
      <div>
        <BiSolidUserCircle className="text-4xl mx-4" />
      </div>
      
    </div>
    
  );
};

export default Header;
// bg-[#ffe0d5]