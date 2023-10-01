import Footer from './Footer';

import { AiFillHome , AiFillVideoCamera ,AiOutlineHistory , AiFillSetting  } from 'react-icons/ai'
import { PiThumbsUpFill} from 'react-icons/pi';
import { MdOutlineWatchLater , MdOutlinedFlag , MdHelp, MdFeedback , MdVideoLibrary} from 'react-icons/md';
import { RiVideoLine } from 'react-icons/ri';
import { ImVideoCamera } from 'react-icons/im';

import { useSelector } from 'react-redux';

const Sidebar = () => { 

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
    
    const sidebarData = [
        {icon : <AiFillHome /> , title : 'Home' },
        {icon : <ImVideoCamera /> , title : 'Shorts' },
        {icon : <AiFillVideoCamera /> , title : 'Subscription' },
        {icon : <MdVideoLibrary /> , title : 'Library' },
        {icon : <AiOutlineHistory /> , title : 'History' },
        {icon : <RiVideoLine /> , title : 'Your Videos' },
        {icon : <MdOutlineWatchLater /> , title : 'Watch Later' },
        {icon : <PiThumbsUpFill /> , title : 'Liked Videos' },
        {icon : <AiFillSetting /> , title : 'Settings' },
        {icon : <MdOutlinedFlag /> , title : 'Report History' },
        {icon : < MdHelp /> , title : 'Help' },
        {icon : <MdFeedback /> , title : 'Send Feedback' }
    ]

    if(!isMenuOpen) return null;
    return(
        <div className='w-1/4 md:w-1/5 bg-white h-screen fixed top-14 left-0 py-4 '>    
          <ul className='pb-4 '>{
           sidebarData.map((item, index)=>
            <li  key={index} className='flex items-center p-2 hover:cursor-pointer hover:bg-gray-200 hover:rounded-md'>
            <span className='text-2xl mx-3'>{item.icon}</span>
            <span className=' ms-7 me-10'>{item.title}</span>           
            </li>
           )
          }
           </ul>
           <hr />
           <Footer />
        </div>
    )
}
export default Sidebar;