import { useEffect, useState } from "react"
import {getAllCharacters} from "../services/character.service"
import character from "../interfaces/Interfaces"


const Characters = ():JSX.Element =>{

    const [characters, setCharacters] = useState<[character]>()

    useEffect(()=>{
        
        getData()

    }, [])

    const getData = async (): Promise <void> =>{
        //arreglo dato
        const response: any = await getAllCharacters()
        setCharacters(response.data)
        console.log(characters)
    }

    return <main>
        {
            characters?.map((e, index)=>{
                return <h3 key={index}>{e.name}</h3>
            })
        }
    </main>

}

export default Characters