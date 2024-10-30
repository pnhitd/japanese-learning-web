import React from 'react'
import { Layout } from 'antd'
import NavbarDefault from '../components/NavbarDefault';
import Header from '../components/Header';

const NoFooterLayout = ({ children }) => {
    return (
        <Layout hasSider>
            <NavbarDefault />
            <Layout
                style={{
                    marginInlineStart: 200,
                    marginLeft: 220,
                    backgroundColor: 'white'
                }}
            >
                <Header />
                <div className="container mx-auto flex-1">{children}</div>
            </Layout>
        </Layout>
    )
}

export default NoFooterLayout