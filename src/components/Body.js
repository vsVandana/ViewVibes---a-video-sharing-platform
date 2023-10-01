import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () =>{
    return(
        <div className="flex mt-16 ml-2">
            <Sidebar />
            <Outlet className='w-3/4 md:w-4/5 ml-1/4 md:ml-1/5'/>
        </div>
    )
}

export default Body;