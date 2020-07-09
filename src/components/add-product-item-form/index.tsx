import React, { useState, ChangeEvent, FormEvent } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { Product, AddProduct } from '../../types.d';
import { FormInstance } from 'antd/lib/form';

interface AddProductFormProps {
    addProduct: AddProduct;
}

const layout = {
    labelCol: {
      span: 2,
    },
    wrapperCol: {
      span: 16,
    },
  };

const formRef = React.createRef<FormInstance>();

export const AddProductItemForm: React.FC<AddProductFormProps> = ( {addProduct} ) => {
    const [newProduct, setNewProduct] = useState({
        title: "",
        description: "",
        quantity: 0,
        price: 0,
        imageURL: ""
    });
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setNewProduct({
            ...newProduct,
            [e.target.name]: value
        });
    };

    const isBlank = (str : string) => {
        return (!str || /^\s*$/.test(str));
    }

    const handleSubmit = () => {
        let product: Product = {
            Id: 0,
            Title: newProduct.title,
            Description: newProduct.description,
            ImageURL: newProduct.imageURL,
            Price: newProduct.price,
            Quantity: newProduct.quantity
        }
        if(!isBlank(product.Title) && !isBlank(product.Description)){
            addProduct(product);
            
            setNewProduct({
                title: "",
                description: "",
                quantity: 0,
                price: 0,
                imageURL: ""
            });
            formRef.current?.resetFields();
        }    
    };

    return (
        <Form {...layout} ref={formRef} onFinish={handleSubmit}>
            <Form.Item 
                label="Title"
                name="title"
                rules={[
                {
                    required: true,
                },
                ]}
            >
            <Input 
                type="text" 
                name="title"
                value={newProduct.title}
                onChange={handleChange}
            />
            </Form.Item>

            <Form.Item 
                label="Description"
                name="description"
                rules={[
                {
                    required: true,
                },
                ]}
            >
            <Input 
                type="text"
                name="description"
                value={newProduct.description}
                onChange={handleChange}
            />
            </Form.Item>

            <Form.Item 
                label="Quantity"
                name="quantity"
                rules={[
                {
                    required: true,
                },
                ]}
            >
            <Input 
                type="number"
                name="quantity"
                value={newProduct.quantity}
                onChange={handleChange}
            />
            </Form.Item>

            <Form.Item 
                label="Price"
                name="price"
                rules={[
                {
                    required: true,
                },
                ]}
            >
            <Input 
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleChange}
            />
            </Form.Item>

            <Form.Item label="Image URL">
            <Input 
                type="text"
                name="imageURL"
                value={newProduct.imageURL}
                onChange={handleChange}
            />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};