export interface Product{
    id: number,
    name: string,
    description: string,
    category: string,
    stock: number,
    price: number
}

export interface Product2{
    id: number
    name: string,
    description: string,
    category: string,
    price: number
}

export interface addProduct{
    name: string,
    description: string,
    category: string,
    stock: number,
    price: number
}