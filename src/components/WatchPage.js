import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';

const WatchPage = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(closeMenu());
    },[]);
  return (
    <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_XHT3GJXjWk?si=zUf1astcImRsFuzU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default WatchPage