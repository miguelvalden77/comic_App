import {useParams} from "react-router-dom"

const CharacterDetails = ()=>{

    const {charId} = useParams<string>()

    return <p>{charId}</p>

}

export default CharacterDetails