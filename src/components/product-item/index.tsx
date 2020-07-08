import React, {useState, MouseEvent} from 'react';
import './index.scss';
import { Product, RemoveProduct, IncreaseProductCount, ReduceProductCount } from '../../types.d';
import { Card, Avatar } from 'antd';
import { MinusCircleOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';

interface ProductListItem {
  product: Product;
  removeProduct: RemoveProduct;
  increaseProductCount: IncreaseProductCount;
  reduceProductCount: ReduceProductCount;
}

const { Meta } = Card;

export const ProductItem: React.FC<ProductListItem> = ({ product, removeProduct, increaseProductCount, reduceProductCount }) => { 
  
  return (   
    <Card 
      title={product.Title} 
      style={{ margin: 10 , background: product.Quantity > 0 ? '' : '#dae0e7'}}
      actions={[
        <PlusCircleOutlined onClick= { () => increaseProductCount(product) }/>,
        <MinusCircleOutlined onClick= { () => reduceProductCount(product) }/>,
        <DeleteOutlined onClick={() => removeProduct(product)}/>
      ]}
    >

    <Meta
      avatar={<Avatar src={product.ImageURL} size={64} />}
      title={product.Id}
    />
      <div className="product-info-container">
        <p className="product-info-item">
          {product.Title}
        </p>
        <p className="product-info-item">
          {product.Description}
        </p>
        <p className="product-info-item">
          Price: {product.Price}
        </p>
        <div style={{display: "flex", flexDirection : "row"}}>

        <p className="product-info-item" style={{ color: product.Quantity > 0 ? '' : 'red'}}>
          Quantity: {product.Quantity}
        </p>
        { product.Quantity === 0 &&
          <p style={{color: "red", marginLeft: "15px"}}> Out of stock!</p>
        }
        </div>
      </div>
      
    </Card>
  );
}
