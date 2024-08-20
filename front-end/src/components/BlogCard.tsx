import { Link } from "react-router-dom"
import { Blog } from "../hooks"
import { Avatar } from "./Avatar"
import { Circle } from "./Circle"




export const BlogCard = ({id,title,content,author}:Blog) =>{
    return <Link to={`/blog/${id}`}>
        <div className="p-2 border-b-[1px] border-black-500 cursor-pointer">
       <div className="flex">
            <div className="flex justify-center flex-col pr-2">
                    <Avatar name={author.name||"Anonymous"} size={6} />
                </div>
                <div className="flex justify-center flex-col px-2">
                    <Circle />
                </div>
                <div className="flex justify-center flex-col pr-4">
                    {author.name}
                </div>
                <div className="flex justify-center flex-col text-thin text-slate-500">
                    6th Aug, 2024
                </div>
        </div>
        <div className="font-extrabold pt-4">
            {title}
        </div>
        <div className="font-normal">
            { (content.length < 100) ? content : content.substring(0,100) + "...." }
        </div>
        <div className="text-slate-300 text-xs  py-8">`{Math.ceil(content.length/1000)}` min read</div>
    </div>
    </Link>
}