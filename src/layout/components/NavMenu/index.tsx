import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Menu, type MenuProps } from "antd";
import * as React from "react";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(<Link to={"/"}>主页</Link>, "home", <PieChartOutlined />),
    getItem(<Link to={"/about"}>关于</Link>, "about", <DesktopOutlined />),
    getItem(<Link to={"/contact"}>联系</Link>, "contact", <UserOutlined />),
];

const NavMenu: React.FC = () => {
    return <Menu theme="dark" mode="inline" items={items} />;
};

export default NavMenu;
