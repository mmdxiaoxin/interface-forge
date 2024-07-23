import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { setLoading, setToken } from "../../store/slices/userSlice";
import styles from "./index.module.scss"; // 导入样式模块

const LoginForm: React.FC = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const loading = useSelector((state: RootState) => state.user.loading);
    const navigate = useNavigate();

    const onFinish = async (values: { username: string; password: string }) => {
        dispatch(setLoading(true));
        try {
            // TODO: loginApi登陆接口
            // const { data } = await loginApi({
            //     ...values,
            //     password: md5(values.password),
            // });
            const data = { access_token: "123456" };
            dispatch(setToken(data.access_token));
            notification.success({
                message: "登录成功",
                description: "欢迎登录 HTTP接口管理平台",
            });
            navigate("/");
        } catch (error) {
            notification.error({
                message: "登录失败",
                description: "请检查您的用户名和密码",
            });
        } finally {
            dispatch(setLoading(false));
        }
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <Form form={form} name="login" onFinish={onFinish} size="large">
            <Form.Item
                name="username"
                rules={[{ required: true, message: "请输入用户名" }]}
            >
                <Input
                    prefix={<UserOutlined />}
                    placeholder="用户名：admin / user"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: "请输入密码" }]}
            >
                <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="密码：123456"
                />
            </Form.Item>
            <div className={styles["login-tip"]}>
                <div className={styles["register-link"]}>
                    <span className={styles["link-text"]}>还没有账号？</span>
                    <a href="/register" className={styles["register-button"]}>
                        立即注册
                    </a>
                </div>
                <div className={styles["forgot-password-link"]}>
                    <span className={styles["link-text"]}>忘记密码？</span>
                    <a
                        href="/forgot-password"
                        className={styles["forgot-password-button"]}
                    >
                        找回密码
                    </a>
                </div>
            </div>
            <div className={styles["login-btn"]}>
                <Button
                    icon={<UserOutlined />}
                    shape="round"
                    size="large"
                    onClick={onReset}
                >
                    重置
                </Button>
                <Button
                    type="primary"
                    icon={<LockOutlined />}
                    shape="round"
                    size="large"
                    htmlType="submit"
                    loading={loading}
                >
                    登录
                </Button>
            </div>
        </Form>
    );
};

export default LoginForm;
