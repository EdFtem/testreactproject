import React from 'react';
import './index.scss';
import { Product, RemoveProduct } from '../../types.d';

interface ProductListItem {
  product : Product;
  removeProduct : RemoveProduct;
}

export const ProductItem: React.FC<ProductListItem> = ({ product, removeProduct }) => {
  return (
    <div className="InfoContainer">
     <div className="ProductInfoContainer">
       <p className="ProductsInfoItem">
         {product.Id}
       </p>
       <p className="ProductsInfoItem">
         {product.Title}
       </p>
       <p className="ProductsInfoItem">
         {product.Description}
       </p>
       <p className="ProductsInfoItem">
         {product.Price}
       </p>
       <p className="ProductsInfoItem">
         {product.Quantity}
       </p>
     </div>
     <div className="ImageContainer">
      <img alt="option" src="#"></img>
     </div>
     <button onClick={() => removeProduct(product)}> Remove </button>
    </div>
  );
}
