import React from "react";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../../store/slices/globalSlice";

interface SwitchDarkProps {
    className: string;
}

const SwitchDark: React.FC<SwitchDarkProps> = (props) => {
    const dispatch = useDispatch();

    return (
        <div className={props.className}>
            <button onClick={() => dispatch(toggleDarkMode())}>
                Toggle Dark Mode
            </button>
        </div>
    );
};

export default SwitchDark;
