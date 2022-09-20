import service from "./config.services";
import newUser from "../interfaces/Interfaces";


const registerUser = (newUser: newUser)=>{
    return service.post("/auth/register", newUser)
}

const loginUser = (newUser: newUser)=>{
    return service.post("/auth/login", newUser)
}

const verifyService = (token: any)=>{
    return service.get("/auth/verify", token)
}


export{
    registerUser,
    loginUser,
    verifyService
}