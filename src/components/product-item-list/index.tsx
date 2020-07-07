import React from 'react';
import { ProductItem } from '..';
import { Product } from '../../types.d';

interface ProductList {
    products : Array<Product>;
};

export const ProductList: React.FC<ProductList> = ({ products }) => {
    return (
    <div>  
        {products.map(productItem => {
            return <ProductItem product={productItem} />
        })}
    </div>
    );
}