import React from 'react';
import 'antd/dist/antd.css';
import './index.scss';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

export const ApplicationHeader = () => {
    return (
    <Layout className="layout">
        <Header>
            <img className="logo" src="/logo.png"/>
        </Header>
    </Layout>);   
};