import service from "./config.services";
import IdCharacter from "../interfaces/Interfaces"


const getAllCharacters = async ()=>{
    // return service.get("/character/all")
    const response = await fetch("http://localhost:5005/api/character/all", {cache: "force-cache"})
    const data = await response.json()
    console.log(data)
    return data
}

const getACharacter = (charID: string)=>{
    return service.get(`/character/${charID}/details`)
}

export {
    getAllCharacters,
    getACharacter
}
