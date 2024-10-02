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

export class BlobContentModel {
    file: FormData | null;

    constructor(file?: FormData) {
        this.file = file ?? null;
    }
}

export class ProductObj {
    title: string;
    description: string;
    category: number;
    stock: number;
    price: number;
    file: FormData | string | null;
    productId: number | undefined;

    constructor(title?: string, description?: string, category?: number, stock?: number, price?: number, blobImage?: FormData, productId?: number) {
        this.title = title ?? "";
        this.description = description ?? "";
        this.category = category ?? 4;
        this.stock = stock ?? 0;
        this.price = price ?? 0;
        this.file = blobImage ?? null;
        this.productId = productId ?? undefined;
    }
}