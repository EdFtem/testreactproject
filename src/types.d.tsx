export type Product = {
    Id: number,
    Title: string,
    Description: string,
    Quantity: number,
    Price: number,
    ImageURL: string
};

export type AddProduct = (addProduct: Product) => void;

export type RemoveProduct = (removeProduct: Product) => void;

export type IncreaseProductCount = (increaseProductCount: Product) => void; 

export type ReduceProductCount = (reduceProductCount: Product) => void;