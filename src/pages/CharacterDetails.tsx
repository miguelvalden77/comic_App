import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import {getACharacter} from "../services/character.service"
import character from "../interfaces/Interfaces"
import item from "../interfaces/Interfaces"
import {Link} from "react-router-dom"


const CharacterDetails = ()=>{

    const {charId} = useParams<string>()
    const [character, setCharacter] = useState<character>()
    const [loader, setLoader] = useState<boolean>(true)

    useEffect(()=>{
        getData(charId)
    }, [])

    const getData = async (id: string): Promise <void>=>{
        const response = await getACharacter(id)
        console.log(response.data.results[0])
        setCharacter(response.data.results[0])
        setLoader(false)
    }


    if(loader)
    return <p>Loading ...</p>

    return <main>
        <article>
            <img src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`} alt={character?.name} />
            <h3>{character?.name}</h3>
            <p>{character?.description}</p>
        </article>

        <section>
            <h3>{character?.name} appears in {character?.comics.available} comics</h3>
            {character?.comics.items.map(e=>{
                return <p>{e.name}</p>
            })}
        </section>

        <section>
            <h3>{character?.name} appears in {character?.series.available} series</h3>
            {character?.series.items.map(e=>{
                return <h3>{e.name}</h3>
            })}
        </section>
    </main>

}

export default CharacterDetails