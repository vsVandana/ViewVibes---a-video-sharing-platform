import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi"
import myLogo from "../utils/images/VVLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  
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
  
    console.log(searchQuery);
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
    <div className="flex items-center justify-between fixed top-0 py-4  w-full z-10 bg-white text-gray-800">
      <div className="flex">
        <GiHamburgerMenu
          onClick={() => toggleMenuHandler()}
          className="text-4xl mx-4 p-2 hover:cursor-pointer hover:bg-slate-200 hover:rounded-full md:hidden"
        />
        <img
          className="w-44 md:mx-24 mx-6 hover:cursor-pointer"
          src={myLogo}
          alt="youtube-logo"
        />
      </div>
      <div>
      <div className="flex items-center">
        <input
          className="w-96 hidden md:block border-2 text-gray-500 border-gray-800 rounded-s-2xl px-5  py-1 hover:border-blue-300 active:border-blue-500 focus:border-blue-400"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=> setShowSuggestion(true)}
          onBlur={()=> setShowSuggestion(false)}
         
        />
        <button className="px-4 py-1 md:border-2 md:border-gray-800 md:rounded-e-2xl md:bg-gray-100">
          <AiOutlineSearch className="text-2xl text-gray-500 hover:cursor-pointer" />
        </button>
      </div>
        {showSuggestion && 
     (<div className="fixed">
        <ul className=" bg-white w-96 s shadow-lg rounded-md ">
          {suggestions.map((s) => (
          <li key={s} className="p-2 hover:bg-slate-200">
            {s}
            </li>
          ))}
         
         
        </ul>
      </div>)
      }
      </div>
      <div>
        <BiSolidUserCircle className="text-4xl mx-4" />
      </div>
    </div>
  );
};

export default Header;
// bg-[#ffe0d5]