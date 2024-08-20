import { SignupInput } from "@_pointer/blog";
import { useState } from "react";
import { AuthHeader } from "./Auth/AuthHeader";
import { LabeledInput } from "./LabeledInput";
import { Button } from "./Button";
import axios from "axios";
import { BASEURL } from "../config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthSignUp = () => {
    const navigate = useNavigate();
    const [postInputs, setPostInuts] = useState<SignupInput>({
        name: "",
        password: "",
        email: ""
    })


    const handleClick = ()=>{
        axios.post(`${BASEURL}api/v1/user/signup`,postInputs)
        .then((reponse)=>{
               const token = reponse?.data?.token;
               if(!token){
                toast.error("Error while Signing up");
                return ;
               }
               localStorage.setItem("token",token);
               toast.success("Signed up successfully!")
               navigate("/blogs")
                
        }).catch(err=>{
            toast.error("Error while Signing up")
        })
    }

    
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                
                <AuthHeader 
                title="Create an account" 
                description="Already have an account?"
                to="/signin"
                linkText="Sign up"
                />
                
                
                <div className="pt-8">
                    <LabeledInput label="Name" placeholder="Jhon Doe .. " onchange={(e) => {
                        setPostInuts({
                            ...postInputs,
                            name: e.target.value
                        })
                    }} />

                    <LabeledInput label="Email" placeholder="Jhon@email.com " onchange={(e) => {
                        setPostInuts({
                            ...postInputs,
                            email: e.target.value
                        })
                    }} />
                    <LabeledInput label="Password" type="password" placeholder="123456" onchange={(e) => {
                        setPostInuts({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />

                </div>

                <Button buttonText="Sign up" onClick={handleClick} />
            </div>
        </div>

    </div>
}

