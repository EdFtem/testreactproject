export type Product = {
    Id: number,
    Title: string,
    Description: string,
    Quantity: number,
    Price: number,
    ImageURL: string
};

export type AddProduct = (addProduct: Product) => void;