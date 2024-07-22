import * as React from "react";

import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NabBar";
import NavMenu from "./components/NavMenu";

const { Header, Content, Footer, Sider } = Layout;

function DefaultLayout(): React.ReactElement {
    //--------------------------------------------------------------------
    // state
    //--------------------------------------------------------------------

    const [collapsed, setCollapsed] = React.useState(false);

    //--------------------------------------------------------------------
    // hooks
    //--------------------------------------------------------------------

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    //--------------------------------------------------------------------
    // function
    //--------------------------------------------------------------------

    //--------------------------------------------------------------------
    // render
    //--------------------------------------------------------------------

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className="demo-logo-vertical" />
                <NavMenu />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <NavBar />
                </Header>
                <Content style={{ margin: "0 16px" }}>
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
}

export default DefaultLayout;
