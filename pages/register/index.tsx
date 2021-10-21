import React from 'react';
import Block from './../../components/Block';

import s from './../auth/Auth.module.scss';

import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";

export default function Register() {
    return (
        <div className={s.auth}>
            <section>
                <Block>
                    <div className="block__content">
                        <div className="auth__top">
                            <h2>Регистрация</h2>
                            <p>Для входа вам нужно зарегистрироваться</p>
                        </div>
                        <RegisterForm />
                        {/*                    <Route exact path={["/", "/login"]} component={LoginForm}/>
                    <Route path="/register" component={RegisterForm}/>*/}
                    </div>
                </Block>
            </section>
        </div>
    )
}