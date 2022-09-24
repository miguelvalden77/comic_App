import { useEffect, useState } from "react"
import {useParams, useNavigate} from "react-router-dom"
import {getAComic} from "../services/comic.service"
import {comic} from "../interfaces/Interfaces"

const Comic = ():JSX.Element =>{

    const {comicId} = useParams<string>()
    const navigate = useNavigate()

    const [comic, setComic] = useState<comic>()
    const [loader, setLoader] = useState<boolean>(true)

    useEffect(()=>{
        getData(comicId)
        console.log(comic?.urls[0].url)
    }, [])

    const getData = async (id: string)=>{
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
    return <h3 className="loader">Loading ...</h3>

    return <article>
        <h3>{comic?.title}</h3>
        <img src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`} alt={comic?.title} />
        <p>{comic?.description}</p>
        <a href={`${comic?.urls[0].url}`}>Link externo</a>

        <section>
            <h2>Creators</h2>
            {comic?.creators.items.map((e, index)=>{
                return <div key={index}>
                    <h3>{e.name}</h3>
                    <p>{e.role}</p>
                </div>
            })}
        </section>
    </article>

}

export default Comic