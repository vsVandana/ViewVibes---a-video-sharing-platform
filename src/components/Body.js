import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () =>{
    return(
        <div className="pt-20 pl-2 ">
            <div className="hidden md:block">
            <Sidebar/>
            </div>
            <Outlet className='w-3/4 md:w-4/5 ml-1/4 md:ml-1/5 '/>
        </div>
    )
}

export default Body;