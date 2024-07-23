import * as React from "react";
import ToolBarLeft from "../ToolBarLeft";
import ToolBarRight from "../ToolBarRight";

const NavBar: React.FC = () => {
    return (
        <div className="nav-bar">
            <div className="tool-bar">
                <div className="tool-bar-left">
                    <ToolBarLeft />
                </div>
                <div className="tool-bar-right">
                    <ToolBarRight />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
