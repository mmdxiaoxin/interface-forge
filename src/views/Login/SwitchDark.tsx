import React from "react";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../../store/slices/globalSlice";
import { Switch } from "antd";

interface SwitchDarkProps {
    className: string;
}

const SwitchDark: React.FC<SwitchDarkProps> = (props) => {
    const dispatch = useDispatch();

    return (
        <div className={props.className}>
            <Switch
                checkedChildren="夜间"
                unCheckedChildren="日间"
                onChange={() => dispatch(toggleDarkMode())}
            />
        </div>
    );
};

export default SwitchDark;
