import React from 'react';
import { ProductItem } from '..';
import { Product, RemoveProduct, IncreaseProductCount, ReduceProductCount } from '../../types.d';

interface ProductList {
    products: Array<Product>;
    removeProduct: RemoveProduct;
    increaseProductCount: IncreaseProductCount;
    reduceProductCount: ReduceProductCount;
};

export const ProductList: React.FC<ProductList> = ({ products, removeProduct, increaseProductCount, reduceProductCount }) => {
    return (
    <div>  
        {products.map(productItem => {
            return <ProductItem 
            product={productItem} 
            removeProduct={removeProduct} 
            increaseProductCount={increaseProductCount} 
            reduceProductCount = {reduceProductCount}/>
        })}
    </div>
    );
}