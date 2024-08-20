export const Circle = ({size=1}:{size?:number})=>{
    return <div className={`rounded-full w-${size} h-${size} bg-slate-200`}></div>
}