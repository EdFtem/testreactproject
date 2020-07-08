import React, {useState, MouseEvent} from 'react';
import './index.scss';
import { Product, RemoveProduct, IncreaseProductCount, ReduceProductCount } from '../../types.d';
import { Card } from 'antd';
import { MinusCircleOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';

interface ProductListItem {
  product: Product;
  removeProduct: RemoveProduct;
  increaseProductCount: IncreaseProductCount;
  reduceProductCount: ReduceProductCount;
}

export const ProductItem: React.FC<ProductListItem> = ({ product, removeProduct, increaseProductCount, reduceProductCount }) => {

  return (   
    <Card 
      title={product.Title} 
      style={{ margin: 10 }}
      actions={[
        <PlusCircleOutlined onClick= { () => increaseProductCount(product) }/>,
        <MinusCircleOutlined onClick= { () => reduceProductCount(product) }/>,
        <DeleteOutlined onClick={() => removeProduct(product)}/>
      ]}
    >
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
        <div className="ImageContainer">
          <img alt="option" src="#"></img>
        </div>
      </div>
      
    </Card>
  );
}
