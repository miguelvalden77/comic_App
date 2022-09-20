import service from "./config.services";
import IdCharacter from "../interfaces/Interfaces"


const getAllCharacters = ()=>{
    return service.get("/character/all")
}

const getACharacter = (charID: IdCharacter)=>{
    return service.get(`/character/${charID}/details`)
}

export {
    getAllCharacters,
    getACharacter
}
