import { Link, Path } from "react-router-dom";

interface AuthHeaderProps {
    title: string;
    description: string;
    to:string | Partial<Path>;
    linkText:string;
}
export const AuthHeader = ({title,description,to,linkText}:AuthHeaderProps)=>{

    return <div className="px-10">
    <div className="text-3xl font-extrabold">
    {title}
    </div>
    <div className="text-slate-400">
        {description}
        <Link className="pl-2 underline" to={to} >
             {linkText}
        </Link>
    </div>
</div>
}