import React from 'react'
import { useSelector } from 'react-redux'

const Button = () => {
  const darkTheme = useSelector((state)=>state.theme.darkTheme)
  const List = ["All", "News", "Music", "Live", "Recently Uploaded", "Mantras", "Computer Programming", "React", "Web Development", "FrontEnd Development", "Artifial Intelligence", "Machine Learning", "Cloud Computing", "Fianance"]
  
  return (
    <div>
      <ul className='flex p-3 '>
        {List.map(( item, index)=>{
             return <li key={index} className='px-2'><button className={`px-3 py-1 text-sm rounded-md hover:bg-gray-900 hover:text-white whitespace-nowrap ${darkTheme ? 'bg-[#484747]' : 'bg-gray-200 text-gray-600'}`}>{item}</button></li>
        })}
      </ul>
    </div>
  )
}

export default Button;