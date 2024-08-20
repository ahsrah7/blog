import { cssTransition } from "react-toastify";

export const BASEURL = "http://127.0.0.1:8787/";


export const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut"
  });