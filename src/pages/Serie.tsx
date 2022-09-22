import { useEffect, useState } from "react"
import {useParams, useNavigate} from "react-router-dom"
import {getASerie} from "../services/serie.service"
import {comic} from "../interfaces/Interfaces"

const Serie = ():JSX.Element =>{

    const {serieId} = useParams<string>()
    const navigate = useNavigate()

    const [serie, setSerie] = useState<comic>()
    const [loader, setLoader] = useState<boolean>(true)

    useEffect(()=>{
        getData(serieId)
    }, [])

    const getData = async (id: string)=>{
        try{
            const response = await getASerie(id)
            console.log(response.data)
            setSerie(response.data)
            setLoader(false)
        }
        catch(error){
            navigate("/error")
        }
    }

    if(loader === true)
    return <h3>Loading ...</h3>

    return <article>
        <h2>{serie?.title}</h2>
        <img src={`${serie?.thumbnail.path}.${serie?.thumbnail.extension}`} alt={serie?.title} />
        <p>{serie?.description}</p>
        <a href={`${serie?.urls[0].url}`}>Link externo</a>
    </article>

}

export default Serie