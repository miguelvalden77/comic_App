import { useEffect, useState } from "react"
import {useParams, Link} from "react-router-dom"
import {getACharacter} from "../services/character.service"
import character from "../interfaces/Interfaces"

//
import { Button } from "react-bootstrap"


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
    return <p className="loader">Loading ...</p>

    return <main className="detail-container">
        <article className="detail-card">
            <div className="detail-img">
                <img src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`} alt={character?.name} />
            </div>
            <h3 className="detail-name">{character?.name}</h3>
            <p className="detail-description">{character?.description}</p>
        </article>

        <section className="section">
            <h3 className="section-title">{character?.name} appears in {character?.comics.available} comics</h3>
            <div className="comics-container">
                {character?.comics.items.map((e, index)=>{
                    const comicId = e.resourceURI.slice(-5)
                    return <Link key={index} to={`/comic/${comicId}/details`}><Button className="button-comic" variant="secondary">{e.name}</Button></Link>
                })}
            </div>
        </section>

        <section className="section">
            <h3 className="section-title">{character?.name} appears in {character?.series.available} series</h3>
            <div className="comics-container">
                {character?.series.items.map((e, index)=>{
                    const serieId = e.resourceURI.split("/")[6]
                    return <Link key={index} to={`/serie/${serieId}/details`}><Button variant="primary">{e.name}</Button></Link>
                })}
            </div>
        </section>
    </main>

}

export default CharacterDetails