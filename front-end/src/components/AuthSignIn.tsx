import { SigninInput } from "@_pointer/blog";
import { useState } from "react";
import { AuthHeader } from "./Auth/AuthHeader";
import { LabeledInput } from "./LabeledInput";
import { Button } from "./Button";
import { BASEURL } from "../config";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AuthSignIn = () => {
    const navigate = useNavigate();
    const [postInputs, setPostInuts] = useState<SigninInput>({
        password: "",
        email: ""
    });

    const handleClick = ()=>{
        axios.post(`${BASEURL}api/v1/user/signin`,postInputs)
        .then((reponse)=>{
               const token = reponse?.data?.token;
               if(!token){
                toast.error("Error while Signing up");
                return ;
               }
               localStorage.setItem("token",token);
               toast.success("Signed in successfully!")
               navigate("/blogs")
                
        }).catch(err=>{
            toast.error("Error while Signing in")
        })
    }


    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                
            <AuthHeader
                title="Sign in to your account" 
                description="Don't have an accoutn?"
                to="/signup"
                linkText="Sign in"
                />
                
                
                <div className="pt-8">

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
                
                <Button buttonText="Signin" onClick={handleClick} />
            </div>
        </div>

    </div>
}

