import service from "./config.services";

const getAComic = (id: string)=>{
    return service.get(`/comic/${id}/details`)
}

export{getAComic}