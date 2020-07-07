import React from 'react';
import { ProductItem } from '..';
import { Product, RemoveProduct } from '../../types.d';

interface ProductList {
    products : Array<Product>;
    removeProduct : RemoveProduct;
};

export const ProductList: React.FC<ProductList> = ({ products, removeProduct }) => {
    return (
    <div>  
        {products.map(productItem => {
            return <ProductItem product={productItem} removeProduct={removeProduct}/>
        })}
    </div>
    );
}