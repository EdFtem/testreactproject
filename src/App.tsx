import React, { useState } from 'react';
import './App.scss';
import { ProductItem, ProductList, AddProductItemForm, ApplicationHeader } from './components';
import { Product, AddProduct, RemoveProduct, IncreaseProductCount, ReduceProductCount } from './types.d';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Content, Footer } = Layout;

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
    const lastProduct = products[products.length - 1];
    const id = lastProduct != null ? lastProduct.Id + 1 : 1;
    newProduct.Id = id;
    setProducts([...products, newProduct]);
  }

  const removeProduct: RemoveProduct = removeProduct => {
    const index = products.indexOf(removeProduct, 0);
    if (index > -1) {
      products.splice(index, 1);
    }
    setProducts([...products]);
  }

  const increaseProductCount: IncreaseProductCount = selectedProduct => {
    const newProduct = products.map(product => {
      if(product === selectedProduct) {
        product.Quantity++;
        return {
          ...product
        };
      }
      return product;
    });
    setProducts(newProduct);
  }

  const reduceProductCount: ReduceProductCount = selectedProduct => {
    const newProduct = products.map(product => {
      if(product === selectedProduct) {
        product.Quantity = product.Quantity - 1 < 0 ? 0 : product.Quantity - 1;
        return {
          ...product
        };
      }
      return product;
    });
    setProducts(newProduct);
  }

  return (
    <Layout className="layout">
      <ApplicationHeader/>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <AddProductItemForm addProduct = {addProduct}/>
          <ProductList 
            products = {products} 
            removeProduct = {removeProduct} 
            increaseProductCount = {increaseProductCount} 
            reduceProductCount = {reduceProductCount}
          />
        </div>       
      </Content>
      <Footer style={{ textAlign: 'center' }}>Product List ©2020 Created by Eduard Ftemov</Footer>
    </Layout>
  );
}

export default App;
