import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();

  const [iframeWidth, setIframeWidth] = useState(window.innerWidth * 0.75);

  useEffect(() => {
    const handleResize = () => {
      setIframeWidth(window.innerWidth * 0.75);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  return (
    <div className="flex gap-7 flex-col items-center justify-center overflow-hidden">
      <div className="py-4 md:pl-20 md:justify-between w-full flex flex-col md:flex-row md:gap-4 max-w-5xl">
  
          <div className="relative overflow-hidden w-full pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          
       
          <LiveChat className="flex-1 md:max-w-xs w-full mt-4 md:mt-0"/>
       
        </div>
       
        <CommentsContainer className="w-full max-w-5xl mt-4" />
      
      
    </div>
  );
};

export default WatchPage;
