import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import LoginForm from "./LoginForm";
import SwitchDark from "./SwitchDark";
import LoginLeftDark from "../../assets/images/login_left_dark.svg";
import LoginLeftSunny from "../../assets/images/login_left_sunny.svg";
import LogoDark from "../../assets/images/logo_dark.svg";
import LogoSunny from "../../assets/images/logo_sunny.svg";

import "./index.scss";

const Login: React.FC = () => {
    const isDark = useSelector((state: RootState) => state.global.isDark);

    return (
        <div className="login-container flx-center">
            <div className="login-box">
                <SwitchDark className="dark" />
                {isDark ? (
                    <div className="login-left">
                        <img
                            className="login-left-img"
                            src={LoginLeftDark}
                            alt="login"
                        />
                    </div>
                ) : (
                    <div className="login-left">
                        <img
                            className="login-left-img"
                            src={LoginLeftSunny}
                            alt="login"
                        />
                    </div>
                )}
                <div className="login-form">
                    {isDark ? (
                        <div className="login-logo">
                            <img className="login-icon" src={LogoDark} alt="" />
                            <h2 className="logo-text">HTTP接口管理平台</h2>
                        </div>
                    ) : (
                        <div className="login-logo">
                            <img
                                className="login-icon"
                                src={LogoSunny}
                                alt=""
                            />
                            <h2 className="logo-text">HTTP接口管理平台</h2>
                        </div>
                    )}
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default Login;
