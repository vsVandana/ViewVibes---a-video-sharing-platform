import React from 'react'

const Button = () => {
  const List = ["All", "News", "Music", "Live", "Recently Uploaded", "Mantras", "Computer Programming", "React", "Web Development", "FrontEnd Development"]
  return (
    <div>
      <ul className='flex p-3'>
        {List.map(( item, index)=>{
             return <li key={index} className='px-2'><button className='px-3 py-1 text-sm bg-gray-200 rounded-md text-gray-600 hover:bg-gray-900 hover:text-white'>{item}</button></li>
        })}
      </ul>
    </div>
  )
}

export default Button;