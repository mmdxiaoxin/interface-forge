import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import LoginForm from "./LoginForm";
import SwitchDark from "./SwitchDark";
import LoginLeftDark from "@/assets/images/logo_dark.svg";
import LoginLeftSunny from "@/assets/images/login_left_sunny.svg";
import LogoDark from "@/assets/images/logo_dark.svg";
import LogoSunny from "@/assets/images/logo_sunny.svg";

import styles from "./index.module.scss";

const Login: React.FC = () => {
    const isDark = useSelector((state: RootState) => state.global.isDark);

    return (
        <div className={styles["login-container"]}>
            <div className={styles["login-box"]}>
                <SwitchDark className={styles["dark"]} />
                {isDark ? (
                    <div className={styles["login-left"]}>
                        <LoginLeftDark className={styles["login-left-img"]} />
                    </div>
                ) : (
                    <div className={styles["login-left"]}>
                        <LoginLeftSunny className={styles["login-left-img"]} />
                    </div>
                )}
                <div className={styles["login-form"]}>
                    {isDark ? (
                        <div className={styles["login-logo"]}>
                            <LogoDark className={styles["login-icon"]} />
                            <h2 className={styles["logo-text"]}>
                                HTTP接口管理平台
                            </h2>
                        </div>
                    ) : (
                        <div className={styles["login-logo"]}>
                            <LogoSunny className={styles["login-icon"]} />
                            <h2 className={styles["logo-text"]}>
                                HTTP接口管理平台
                            </h2>
                        </div>
                    )}
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default Login;
