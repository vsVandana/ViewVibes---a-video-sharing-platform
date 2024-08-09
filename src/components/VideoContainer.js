import VideoCard from "./VideoCard";
import React, { useEffect, useState } from "react";
import { YOUTUBE_API_DATA } from "../utils/constant";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchvideo();
  }, []);
  const fetchvideo = async () => {
    try {
      const data = await fetch(YOUTUBE_API_DATA);
      if(!data){
        throw new Error("Failed to fetch videos")
      }
      const json = await data.json();
      console.log(json);
      setVideos(json.items);
    } catch (error) {
       console.log(error)
    }
  };

  return (
    <div className="p-2">
      <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 ">
        {videos?.map((items) => {
          return (
            <li key={items.id} className="">
              <Link to={"/watch?v=" + items.id}>
                <VideoCard data={items} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VideoContainer;
