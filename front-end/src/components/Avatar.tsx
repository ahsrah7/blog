export  const Avatar = ({name="Anonymous",size=6}:{name:string,size?:number}) =>{
    
    
    return <div className={`relative inline-flex items-center justify-center w-${size} h-${size}  bg-gray-100 rounded-full`}>
    <span className="text-small font-light text-gray-600">{name[0]}</span>
</div>
}