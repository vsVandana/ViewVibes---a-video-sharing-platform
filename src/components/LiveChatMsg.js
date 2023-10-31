import React from 'react';
import { BiSolidUserCircle } from 'react-icons/bi';

const LiveChatMsg = ({name, message}) => {
  return (
    <div className='p-2 flex flex-column'>
        <BiSolidUserCircle className="text-2xl" />
        <h1 className='font-semibold px-2'>{name}</h1>
        <p>{message}</p>
        </div>
  )
}

export default LiveChatMsg