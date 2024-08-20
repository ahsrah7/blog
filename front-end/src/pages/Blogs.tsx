import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogListSkeleton } from "../components/BlogListSkeleon";
import { useBlogs } from "../hooks";

export const Blogs = ()=>{
    const {loading, blogs} = useBlogs();

    if(loading)
    return <div>
        <Appbar />
        <div className="flex justify-center">
        <div className="w-full max-w-2xl">
         <BlogListSkeleton  />
         <BlogListSkeleton  />
         <BlogListSkeleton  />
         <BlogListSkeleton  />
         <BlogListSkeleton  />
        </div>
        </div>
    </div>

    return <div className="">
        <Appbar />
        <div className="flex justify-center mt-4">
        <div className="w-full max-w-2xl">
       {blogs.map((blog=><BlogCard title={blog.title} author={blog.author} content={blog.content} id={blog.id} key={blog.id}/>))}
        </div>
        </div>
        
    </div>
}