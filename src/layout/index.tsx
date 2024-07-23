import * as React from "react";

import LogoDark from "@/assets/images/logo_dark.svg";
import LogoSunny from "@/assets/images/logo_sunny.svg";
import { RootState } from "@/store";
import { toggleCollapse } from "@/store/slices/globalSlice";
import { Layout, theme } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NabBar";
import NavMenu from "./components/NavMenu";
import "./index.scss";

const { Header, Content, Footer, Sider } = Layout;

function DefaultLayout(): React.ReactElement {
    //--------------------------------------------------------------------
    // state
    //--------------------------------------------------------------------

    //--------------------------------------------------------------------
    // hooks
    //--------------------------------------------------------------------

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const isDark = useSelector((state: RootState) => state.global.isDark);
    const isCollapse = useSelector(
        (state: RootState) => state.global.isCollapse
    );
    const dispatch = useDispatch();

    //--------------------------------------------------------------------
    // function
    //--------------------------------------------------------------------

    //--------------------------------------------------------------------
    // render
    //--------------------------------------------------------------------

    return (
        <Layout className="container">
            <Sider
                collapsible
                collapsed={isCollapse}
                onCollapse={() => dispatch(toggleCollapse())}
                className="sider"
                theme={isDark ? "dark" : "light"}
            >
                <div className="logo">
                    {isDark ? (
                        <LogoDark className="logo-img" />
                    ) : (
                        <LogoSunny className="logo-img" />
                    )}
                    {!isCollapse && (
                        <span className="logo-img">HTTP接口管理平台</span>
                    )}
                </div>
                <NavMenu />
            </Sider>
            <Layout>
                <Header
                    style={{ padding: 0, background: colorBgContainer }}
                    className="header"
                >
                    <NavBar />
                </Header>
                <Content className="main">
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
                <Footer
                    style={{ textAlign: "center", padding: "10px 50px" }}
                    className="footer"
                >
                    mmdxiaoxin ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
}

export default DefaultLayout;
