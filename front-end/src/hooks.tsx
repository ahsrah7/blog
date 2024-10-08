import axios from "axios";
import { useEffect, useState } from "react";
import { BASEURL } from "./config";
import { Blog } from "./pages/Blog";

export interface Blog {
    id:string;
    title:string;
    content:string;
    author:{
        name:string;
    }
}

export const useBlogs = ()=>{
    const [loading,setLoading] = useState(true);
    const [blogs,setBlogs] = useState<Blog[]>([]);

    useEffect(()=>{
        axios.get(`${BASEURL}api/v1/blog/bulk`,{headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }}).then(response=>{
            setBlogs(response.data.blogs);
            setLoading(false);
        })
    },[])

    return {loading,blogs}
}


export const useBlog = (id:string)=>{
    const [loading,setLoading] = useState(true);
    const [blog,setBlog] = useState<Blog>();

    useEffect(()=>{
        axios.get(`${BASEURL}api/v1/blog/${id}`,{headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }}).then(response=>{
            setBlog(response.data.blog);
            setLoading(false);
        })
    },[])

    return {loading,blog}
}