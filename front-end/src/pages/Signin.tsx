import { AuthSignIn } from "../components/AuthSignIn"
import { Quote } from "../components/Quotes"

export const Signin = () =>{
    return <div className="grid grid-cols-2">
    <div className="">
        <AuthSignIn />
    </div>
    <div className="invisible lg:visible">
    <Quote />
    </div>
</div>
}