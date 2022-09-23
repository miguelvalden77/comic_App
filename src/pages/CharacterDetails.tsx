import { useEffect, useState } from "react"
import {useParams, Link} from "react-router-dom"
import {getACharacter} from "../services/character.service"
import character from "../interfaces/Interfaces"


const CharacterDetails = ()=>{

    const {charId} = useParams<string>()
    const [character, setCharacter] = useState<character>()
    const [loader, setLoader] = useState<boolean>(true)

    useEffect(()=>{
        getData(charId)
    }, [])

    const getData = async (id: string): Promise <void>=>{
        const response = await getACharacter(id)
        console.log(response.data.results[0].series.items)
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
            {character?.comics.items.map((e, index)=>{
                const comicId = e.resourceURI.slice(-5)
                return <Link key={index} to={`/comic/${comicId}/details`}>{e.name}</Link>
            })}
        </section>

        <section>
            <h3>{character?.name} appears in {character?.series.available} series</h3>
            {character?.series.items.map((e, index)=>{
                const serieId = e.resourceURI.split("/")[6]
                return <Link key={index} to={`/serie/${serieId}/details`}>{e.name}</Link>
            })}
        </section>
    </main>

}

export default CharacterDetails