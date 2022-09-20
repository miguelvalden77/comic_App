import service from "./config.services";

const getAllCharacters = ()=>{
    return service.get("/character/all")
}

const getACharacter = (charID)=>{
    return service.get(`/character/${charID}/details`)
}
