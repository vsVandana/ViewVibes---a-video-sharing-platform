import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import myLogo from "../utils/images/y-logo.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    console.log(searchQuery)
    const timer = setTimeout(() => fetchSearchSuggessions() , 200);

   return () => {
    clearTimeout(timer);
   };

  },[searchQuery])

  const fetchSearchSuggessions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API+ searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
  }
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex items-center justify-between fixed top-0 py-2 w-full bg-white">
      <div className="flex items-center">
        <GiHamburgerMenu
          onClick={() => toggleMenuHandler()}
          className="text-4xl mx-4 p-2 hover:cursor-pointer hover:bg-slate-200 hover:rounded-full"
        />
        <img
          className="w-28 ms-1 me-3 hover:cursor-pointer"
          src={myLogo}
          alt="youtube-logo"
        />
      </div>
      <div>
      <div className=" flex items-center">
        <input
          className="w-96 border-2 text-gray-500 border-gray-300 rounded-s-2xl px-5  py-1 hover:border-blue-300 active:border-blue-500 focus:border-blue-400"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=> setShowSuggestion(true)}
          onBlur={()=> setShowSuggestion(false)}
         
        />
        <button className="px-4 py-1 border-2 border-gray-300 rounded-e-2xl bg-gray-100">
          <AiOutlineSearch className="text-2xl text-gray-500 hover:cursor-pointer" />
        </button>
      </div>
        {showSuggestion && 
     (<div className="fixed">
        <ul className=" bg-white w-96 s shadow-lg rounded-md">
          {suggestions.map((s) => (
          <li key={s} className="px-2 py-2 hover:bg-slate-200">
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
