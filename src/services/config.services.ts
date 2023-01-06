import axios from "axios"

const service = axios.create({baseURL: "https://comic-app-backend.onrender.com/api"})
// http://localhost:5005
// https://charactermarvelapp.herokuapp.com/api/
service.interceptors.request.use((config)=>{

    const token = localStorage.getItem("authToken")

    if(token){
        config.headers = {
            authorization: `Bearer ${token}`
        }
    }

    return config

})

export default service