import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams]= useSearchParams();
  console.log(searchParams.get("v"));
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(closeMenu());
    },[dispatch]);
  return (
    <div>
      <div className='flex'>
    <div className='py-4 px-20'>
        <iframe className="rounded-xl" width="900" height="500" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <LiveChat />
    </div>
    <CommentsContainer />
    </div>
  )
}

export default WatchPage