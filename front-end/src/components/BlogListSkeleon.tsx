import { Circle } from "./Circle"

export const BlogListSkeleton = ()=>{
    return <div className="p-2 border-b-[1px] border-black-500 animate-pulse">
    <div className="flex mb-4">
         <div className="flex justify-center flex-col pr-2">
         <div className={`relative inline-flex items-center justify-center w-6 h-6  bg-gray-100 rounded-full`}>
            <span className="text-small font-light text-gray-600"></span>
        </div>
             </div>
             <div className="flex justify-center flex-col px-2">
                 <Circle />
             </div>
             <div className="flex justify-center flex-col mx-2">
                    <div className=" h-2.5 w-6 bg-gray-200 rounded-full"></div>
             </div>
             <div className="flex justify-center flex-col mx-2">
             <div className=" h-2.5 w-6 bg-gray-200 rounded-full"></div>
             </div>
     </div>
     <div className="h-2.5 bg-gray-200 rounded-full mb-2">
     </div>
     <div className="h-2.5 bg-gray-200 rounded-full mb-2">
     </div>
     <div className="h-2.5 bg-gray-200 rounded-full mb-2"></div>

     
</div>

}