import React, { useState } from 'react';
import './App.scss';
import { ProductItem, ProductList, AddProductItemForm } from './components';
import { Product, AddProduct } from './types.d';

const initialProducts: Array<Product> = [
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
  const [products, setProducts] = useState(initialProducts);

  const addProduct: AddProduct = newProduct => {
    const lastId = products[products.length - 1].Id;
    newProduct.Id = lastId + 1;
    setProducts([...products, newProduct]);
  }

  return (
    <div className="MainContainer">
      <AddProductItemForm addProduct = {addProduct}/>
      <ProductList products = {products}/>
    </div>
  );
}

export default App;
