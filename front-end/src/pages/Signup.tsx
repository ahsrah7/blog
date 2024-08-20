import { AuthSignUp } from "../components/AuthSignUp"
import { Quote } from "../components/Quotes"

export const Signup = () =>{
    return <div className="grid grid-cols-2">
        <div className="">
            <AuthSignUp />
        </div>
        <div className="invisible lg:visible">
        <Quote />
        </div>
    </div>
}