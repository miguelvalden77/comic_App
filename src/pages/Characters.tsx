import { useEffect, useState } from "react"
import { getAllCharacters } from "../services/character.service"
import character from "../interfaces/Interfaces"
import { Link, useNavigate } from "react-router-dom"
import Loader from "../components/Loader"


const Characters = (): JSX.Element => {

    const navigate = useNavigate()

    const [characters, setCharacters] = useState<[character]>()
    const [loader, setLoader] = useState<boolean>(true)

    useEffect(() => {

        getData()

    }, [])

    const getData = async (): Promise<void> => {

        try {
            const response: any = await getAllCharacters()
            setCharacters(response)
            setLoader(false)
        }
        catch (error) {
            navigate("/error")
        }
    }


    if (loader === true)
        return <Loader />

    return <main className="character-container">
        {
            characters?.map((e, index) => {

                return <Link className="character-name" to={`/characters/${e.id}/details`}>
                    <article key={index} className="character-card">
                        <div className="character-img">
                            <img src={`${e.thumbnail.path}.${e.thumbnail.extension}`} alt={e.name} />
                        </div>
                        <h5 className="character-name" key={index}>{e.name}</h5>
                    </article>
                </Link>
            })
        }
    </main>

}

export default Characters