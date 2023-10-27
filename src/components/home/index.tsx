import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Component, ReactNode } from "react";

export default class HomeContainer  extends Component{
    render(): ReactNode {
        return(
            <>
                <Layout>
                    <Sider>侧边</Sider>
                    <Layout>
                        <Layout.Header>头部</Layout.Header>    
                        <Layout.Content>正文</Layout.Content>    
                    </Layout> 
                </Layout>
            </>
        )
    }
}