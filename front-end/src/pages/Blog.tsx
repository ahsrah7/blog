import { useParams } from "react-router-dom"
import { FullBlog } from "../components/FullBlog"
import { useBlog } from "../hooks"
import { Appbar } from "../components/Appbar";
import { BlogListSkeleton } from "../components/BlogListSkeleon";

export const Blog = () =>{
    const {id} = useParams();

    const {loading,blog} = useBlog(id|| "")

    if(loading)
        return <div>
            <Appbar />
            <div className="flex justify-center">
            <div className="w-full max-w-2xl">
             <BlogListSkeleton  />
            </div>
            </div>
        </div>


    return  <div>
        <Appbar />
        <div className="flex justify-center mt-4">
        <div className="w-full max-w-4xl">
            <FullBlog  blog={blog} />
        </div>
    </div>
        </div>
}