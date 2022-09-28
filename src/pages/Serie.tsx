import { useEffect, useState } from "react"
import {useParams, useNavigate} from "react-router-dom"
import {getASerie} from "../services/serie.service"
import {comic} from "../interfaces/Interfaces"
import {Button} from "react-bootstrap"

const Serie = ():JSX.Element =>{

    const {serieId} = useParams<string>()
    const navigate = useNavigate()

    const [serie, setSerie] = useState<comic>()
    const [loader, setLoader] = useState<boolean>(true)

    useEffect(()=>{
        getData(serieId)
    }, [])

    const getData = async (id: any)=>{
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
    return <h3 className="loader">Loading ...</h3>

    return <article className="detail-card">
        <h2 className="detail-name">{serie?.title}</h2>
        <div className="detail-img">
            <img src={`${serie?.thumbnail.path}.${serie?.thumbnail.extension}`} alt={serie?.title} />
        </div>
        <p className="description">{serie?.description}</p>
        <a className="link t-center" href={`${serie?.urls[0].url}`}><Button variant="outline-warning">Official Web</Button></a>
    </article>

}

export default Serie