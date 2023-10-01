import React from 'react';
import { BiSolidUserCircle } from 'react-icons/bi';

const Comment = ({data}) => {
    const {name, text } = data;
  return (
    <div className='flex border my-1 bg-gray-100'>
        <BiSolidUserCircle className="text-4xl mx-4" />
        <div>
            <h2 className='text-lg'>{name}</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment