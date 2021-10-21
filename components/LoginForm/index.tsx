import {Form, Input} from "antd";
import {LockOutlined, UserOutlined, } from "@ant-design/icons";
import { Button as BaseButton } from 'antd';

import Link from 'next/link';


const LoginForm = () => {

    const onFinish = (values:any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >

                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Пожалуйста, введите свой логин!' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Логин"
                        size="large"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Пожалуйста, введите свой пароль!' }]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        size="large"
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>

                    <BaseButton htmlType="submit" type="primary" className="button">Войти </BaseButton>

                </Form.Item>

                <Link href="/register">Зарегистрироваться </Link>
            </Form>
        </>
    );
};

export default LoginForm;