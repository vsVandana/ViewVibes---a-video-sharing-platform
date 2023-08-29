import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSolidUserCircle } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai'
import myLogo from "../utils/images/y-logo.png";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
       dispatch(toggleMenu());
  }
    return(
       <div className='flex items-center justify-between shadow-sm'>
         <div className='flex items-center'>
          <GiHamburgerMenu onClick={() => toggleMenuHandler()}  className='text-4xl mx-4 p-2 hover:cursor-pointer hover:bg-slate-200 hover:rounded-full'/>
          <img className='w-28 ms-1 me-3 hover:cursor-pointer' src={myLogo} alt='youtube-logo'/>
          </div>
          <div className=' flex items-center'>
            <input className='w-96 border-2 text-gray-500 border-gray-300 rounded-s-2xl px-5  py-1 hover:cursor-pointer hover:border-blue-300 active:border-blue-500 focus:border-blue-400' type='text' placeholder='Search' />
            <button className='px-4 py-1 border-2 border-gray-300 rounded-e-2xl bg-gray-100'><AiOutlineSearch className='text-2xl text-gray-500 hover:cursor-pointer'/></button>
          </div>
          <div>
            <BiSolidUserCircle className='text-4xl mx-4' />
          </div>
       </div>
    )
}

export default Header;