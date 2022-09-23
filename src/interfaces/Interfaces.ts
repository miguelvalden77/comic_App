
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
    description?: string,
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


interface url{
    url: string
}

interface creator{
    resourceURI: string,
    name: string,
    role: string
}

export interface comic {
    id: number,
    title: string,
    description?: string,
    thumbnail: {
        path: string,
        extension: string
    },
    urls: [url],
    creators: {
        items: [creator]
    }
}