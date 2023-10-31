import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-52 m-4 text-xs ' >
        <div className='footer-links font-semibold text-gray-500'>
        <ul className='flex flex-wrap hover:cursor-pointer py-1'>
            <li className='px-1'>About</li>
            <li className='px-1'>Copyright</li>
            <li className='px-1'>Contact Us</li>
            <li className='px-1'>Dwevelopers</li>
        </ul>
        <ul className='flex flex-wrap hover:cursor-pointer py-1'>
            <li className='px-1'>Terms</li>
            <li className='px-1'>Privacy</li>
            <li className='px-1'>Policy and Safety</li>
            <li className='px-1'>Dwevelopers</li>
        </ul>
        <li className='list-none hover:cursor-pointer py-1 px-1 pt-2'><Link to='https://www.youtube.com/howyoutubeworks/?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen'>How Youtube Works</Link></li>
        <li className='list-none hover:cursor-pointer py-1 px-1 pt-2'><Link to='https://www.youtube.com/new'>Test new features</Link></li>

    </div>
    <div className='copyright px-1 pt-2 text-gray-400'>
      &copy;2023 Google LLC
    </div>
    </div>
  )
}

export default Footer