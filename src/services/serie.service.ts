import service from "./config.services";

const getASerie = (id: string)=>{
    return service.get(`/serie/${id}/details`)
}

export{getASerie}
