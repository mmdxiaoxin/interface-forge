import { Breadcrumb } from "antd";
import * as React from "react";

const NavBar: React.FC = () => {
    return (
        <div className="nav-bar">
            <div className="tool-bar">
                <div className="tool-bar-left">
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="tool-bar-right">
                    <div className="tool-bar-item">nav 3</div>
                    <div className="tool-bar-item">nav 4</div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
