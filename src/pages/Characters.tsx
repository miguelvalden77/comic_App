import { useEffect, useState } from "react"
import {getAllCharacters} from "../services/character.service"
import character from "../interfaces/Interfaces"
import {Link} from "react-router-dom"


const Characters = ():JSX.Element =>{

    const [characters, setCharacters] = useState<[character]>()
    const [loader, setLoader] = useState<boolean>(true)

    useEffect(()=>{
        
        getData()

    }, [])

    const getData = async (): Promise <void> =>{
        //arreglo dato
        const response: any = await getAllCharacters()
        setCharacters(response.data)
        setLoader(false)
    }


    if(loader === true)
    return <h3>Loading ...</h3>

    return <main>
        {
            characters?.map((e, index)=>{
                return <article>
                    <img src={`${e.thumbnail.path}.${e.thumbnail.extension}`} alt={e.name} />
                    <Link to={`/characters/${e.id}/details`}><h3 key={index}>{e.name}</h3></Link>
                </article>
            })
        }
    </main>

}

export default Characters