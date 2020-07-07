import React from 'react';
import './App.scss';
import { ProductItem } from './components';
import { Product } from './types.d';
import { ProductList } from './components/product-item-list';

const products: Array<Product> = [
  {
    Id: 1,
    Title: "Super test",
    Description: "Text text text text text",
    Price: 10,
    Quantity: 1,  
    ImageURL: "test" 
  },
  {
    Id: 2,
    Title: "Super test 2",
    Description: "Text text text text text 2",
    Price: 11,
    Quantity: 3,  
    ImageURL: "test 2" 
  }
];

const App = () => {
  return (
    <div className="MainContainer">
      <ProductList products = {products}/>
    </div>
  );
}

export default App;
