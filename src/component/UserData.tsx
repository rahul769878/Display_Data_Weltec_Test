
export type USER = userData[];

export interface userData {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: object
}