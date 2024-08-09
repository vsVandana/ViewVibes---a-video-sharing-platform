import React from 'react'
import { MdLightMode, MdNightlight } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../utils/themeSlice';

const ThemeIcon = () => {
    const dispatch = useDispatch();
    const darkTheme = useSelector((state)=>state.theme.darkTheme)
  return (
    <div onClick={()=>dispatch(toggleTheme())} className='text-3xl mx-4'>
        {
         darkTheme ?  <MdNightlight  className='text-white'/> : <MdLightMode    /> 
        }    
    </div>
  )
}

export default ThemeIcon