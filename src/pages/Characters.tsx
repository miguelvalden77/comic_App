import { useEffect, useState } from "react"
import {getAllCharacters} from "../services/character.service"
import character from "../interfaces/Interfaces"
import {Link, useNavigate} from "react-router-dom"


const Characters = ():JSX.Element =>{

    const navigate = useNavigate()

    const [characters, setCharacters] = useState<[character]>()
    const [loader, setLoader] = useState<boolean>(true)

    useEffect(()=>{
        
        getData()

    }, [])

    const getData = async (): Promise <void> =>{

        try{
            const response: any = await getAllCharacters()
            setCharacters(response.data)
            setLoader(false)
        }
        catch(error){
            navigate("/error")
        }
    }


    if(loader === true)
    return <h3>Loading ...</h3>

    return <main className="character-container">
        {
            characters?.map((e, index)=>{
                return <article key={index} className="character-card">
                    <div className="character-img">
                        <img src={`${e.thumbnail.path}.${e.thumbnail.extension}`} alt={e.name} />
                    </div>
                    <Link className="character-name" to={`/characters/${e.id}/details`}><h5 key={index}>{e.name}</h5></Link>
                </article>
            })
        }
    </main>

}

export default Characters