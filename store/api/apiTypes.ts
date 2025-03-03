export type Painting =  {
    id: number,
    name: string,
    authorId: number,
    locationId: number,
    created: string,
    imageUrl: string,
}

export type Location = {
    id: number,
    location: string,
}

export type Author = {
    id: number,
    name: string,
}
