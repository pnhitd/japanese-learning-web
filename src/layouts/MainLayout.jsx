import React from 'react'
import { Layout } from 'antd'
import NavbarDefault from '../components/NavbarDefault';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainLayout = ({ children }) => {
    return (
        <Layout hasSider>
            <NavbarDefault />
            <Layout
                style={{
                    marginInlineStart: 200,
                    marginLeft: 220,
                }}
            >
                <Header />
                <div className="container mx-auto flex-1">{children}</div>
                <Footer />
            </Layout>
        </Layout>
    )
}

export default MainLayout