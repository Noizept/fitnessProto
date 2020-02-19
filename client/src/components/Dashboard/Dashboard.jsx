import React, { useState } from "react"

import { Layout, Menu, Icon } from "antd"
const { Header, Sider, Footer, Content } = Layout

export default function App() {
    const [isCollapsed, setCollapsed] = useState(false)
    const toogle = () => {
        setCollapsed(!isCollapsed)
    }
    return (
        <div>
            <Layout>
                <Sider
                    style={{ minHeight: "100vh" }}
                    theme="light"
                    collapsible
                    collapsed={isCollapsed}
                    onCollapse={toogle}
                >
                    <div className="logo" style={{ color: "red" }}>
                        LOGO HERE
                    </div>
                    <Menu theme="light" mode="inline">
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span className="nax-text">Nav1</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: "#fff" }}>
                        <Icon
                            className="trigger"
                            type={isCollapsed ? "menu-unfold" : "menu-fold"}
                            onClick={toogle}
                        />
                        Header
                    </Header>
                    <Content style={{ marging: "24px 16px 0" }}>
                        Content
                    </Content>
                    <Footer style={{ textAlign: "center" }}>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
}
