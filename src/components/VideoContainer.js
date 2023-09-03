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
    const data = await fetch(YOUTUBE_API_DATA);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };

  return (
    <div className="p-3">
      <ul className="flex flex-wrap">
        {videos?.map((items) => {
          return (
            <li key={items.id} className="m-2">
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
