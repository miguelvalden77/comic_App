import service from "./config.services";


const getAllCharacters = async ()=>{
    // return service.get("/character/all")
    const response = await fetch("https://charactermarvelapp.herokuapp.com/api/character/all", {cache: "force-cache"})
    const data = await response.json()
    return data
}

const getACharacter = (charID: string)=>{
    return service.get(`/character/${charID}/details`)
}

export {
    getAllCharacters,
    getACharacter
}
