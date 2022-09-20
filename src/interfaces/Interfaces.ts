
export default interface newUser {
    username: string,
    password: string
}

export default interface IdCharacter {
    charID: number
}


interface item {
    resourceURI: string,
    name: string
}

export default interface character {
    id: number,
    name: string,
    thumbnail: {
        path: string,
        extension: string
    },
    resourceURI: string,
    comics: {
        available: number,
        items: [item]
    },
    series: {
        available: number,
        items: [item]
    }
}
