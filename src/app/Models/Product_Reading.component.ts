export interface Product_Reading {
    author?: string,
    title?: string,
    description?: string,
    category?: string
    idCategory?: number,
    stock?: number,
    price?: number,
    views?: number,
    date?: Date,
    imageRute?: string,
    idProduct?: number
}

export interface ProductObj {
    title?: string,
    description?: string,
    category?: string
    stock?: number,
    price?: number,
}