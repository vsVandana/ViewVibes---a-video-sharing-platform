import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams]= useSearchParams();
  console.log(searchParams.get("v"));
    const dispatch = useDispatch();

    const [iframeWidth, setIframeWidth] = useState(window.innerWidth * 0.75); // Adjust as needed

    useEffect(() => {
      const handleResize = () => {
        setIframeWidth(window.innerWidth * 0.75); // Adjust as needed
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    useEffect(()=> {
        dispatch(closeMenu());
    },[dispatch]);
  return (
    <div>
      <div className='flex gap-7 md:flex-row flex-col items-center justify-center'>
    <div className='py-4 md:ps-20'>
        <iframe className="rounded-xl"  width={iframeWidth}
            height={iframeWidth * 0.5625}  src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <LiveChat />
    </div>
    <CommentsContainer />
    </div>
  )
}

export default WatchPage