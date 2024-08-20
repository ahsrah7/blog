import { Blog } from "../hooks"
import { Circle } from "./Circle"

export const FullBlog = ({blog} : {blog:Blog})=>{
    return <div className="grid grid-cols-12">
        
        <div className="col-span-8  ">
            <div className="text-3xl font-bold">
                {blog.title}
            </div>
            <div className="text-md font-normal pt-8">
                {blog.content}
            </div>
            <div className="text-sm font-thin text-gray-500 py-4">
                Posted on 06 Aug, 2024
            </div>
        </div>
        <div className="col-span-4">
            <div className="pl-8">
            <div className="text-lg font-medium pb-4">Author</div>
            <div className="flex pl-2">
                <div className="pr-2 flex flex-col justify-center">
                    <Circle size={10} />
                </div>
                <div>
                    <div className="text-xl font-bold">{blog.author.name || "Anonymous"}</div>
                    <div className="text-sm font-thin">Description about the author</div>
                </div>
            </div>
            </div>
        </div>

    </div>
}