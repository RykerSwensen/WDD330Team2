import jwt_decode from "jwt-decode";
import loginRequest from "./externalServices.mjs"
import { alertMessage, getLocalStorage, setLocalStorage } from "./utils.mjs";
export async function login(creds, redirect="/"){
    try{
        const token = await loginRequest(creds);
        setLocalStorage("so-token", token);
        window.location = redirect;
    } catch(err){
        alertMessage(err.message.message);
    }
}

function isTokenValid(token){
    if (token){
        const decodedToken = jwt_decode(token);
        const currentDate = new Date();
        if (decodedToken.exp * 1000 < currentDate.getTime()) {
            //token expiration has passed
            console.log("Token expired.");
            return false;
            } else {
            // token not expired
            console.log("Valid token");
            return true;
            }
            //no token...automatically return false.
        } else return false;
}

export function checkLogin(){
    const token = getLocalStorage("so-token");
    const isValid = isTokenValid(token);
    if(isValid){
        return token
    }else{
        localStorage.removeItem("so-token")
        const location = window.location;
        window.location = `/login/index.html?redirect=${location.pathname}`;
    }
}