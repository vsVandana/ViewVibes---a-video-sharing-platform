import VideoCard from "./VideoCard";
import React, { useEffect, useState } from 'react';
import { YOUTUBE_API_DATA } from '../utils/constant';

const VideoContainer = () => {
  const [videos , setVideos] = useState([]);

  useEffect(()=>{
    fetchvideo();
}, [])
const fetchvideo = async () => {
    const data = await fetch(YOUTUBE_API_DATA);
    const json = await data.json();
    console.log(json);
    setVideos(json.items)
} 

    return(

        <div className="p-3">
          
          <ul className="flex flex-wrap">{
            videos?.map((items) => {
              return <li key={videos.id} className="m-2">
                <VideoCard data={items}/>
             </li>
            })
          }</ul>
        </div>
    )
}

export default VideoContainer;
