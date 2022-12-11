import { useEffect, useState } from "react"
import {useParams, useNavigate} from "react-router-dom"
import {getAComic} from "../services/comic.service"
import {comic} from "../interfaces/Interfaces"
import {Button} from "react-bootstrap"
import Loader from "../components/Loader"

const Comic = ():JSX.Element =>{

    const {comicId} = useParams<string>()
    const navigate = useNavigate()

    const [comic, setComic] = useState<comic>()
    const [loader, setLoader] = useState<boolean>(true)

    useEffect(()=>{
        getData(comicId)
        console.log(comic?.urls[0].url)
    }, [])

    const getData = async (id: any)=>{
        try{
            
            const response = await getAComic(id)
            setComic(response.data)
            setLoader(false)
        }
        catch(error){
            navigate("/error")
        }
    }

    if(loader === true)
    return <Loader/>

    return <article>

        <section className="detail-card">
            <h3 className="detail-name">{comic?.title}</h3>
            <div className="detail-img">
                <img src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`} alt={comic?.title} />
            </div>
            <p className="description">{comic?.description}</p>
            <a className="link t-center" href={`${comic?.urls[0].url}`}><Button variant="outline-danger">Official Web</Button></a>
        </section>

        <section className="creators-section">
            <h2 className="t-center">Creators</h2>
            <div className="creators-container">
                {comic?.creators.items.map((e, index)=>{
                    return <div className="creator" key={index}>
                        <h3 className="creator-name">{e.name}</h3>
                        <p>{e.role}</p>
                    </div>
                })}
            </div>
        </section>
    </article>

}

export default Comic