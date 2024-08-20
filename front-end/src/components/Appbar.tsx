import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"

export const Appbar = ()=>{
    return <div className="flex justify-between border-b-[1px] border-black-500 p-4">
        <div className="flex items-center">
           <Link to="/blogs" className="cursor-pointer">
            The Blog
           </Link>
            
        </div>
        <div>
            <Avatar name="Anonymous" size={10}/>
        </div>
    </div>
}