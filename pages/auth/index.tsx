import React from 'react';
import Block from './../../components/Block';

import s from './Auth.module.scss';
import LoginForm from "../../components/LoginForm";

export default function Auth() {
    return (
        <div className={s.auth}>
            <section>
                <Block>
                    <div className="block__content">
                        <div className="auth__top">
                            <h2>Войти в аккаунт</h2>
                            <p>Пожалуйста, ввойдите в свой аккаунт</p>


                            {/*                        <Route path="/register" render={() => <>
                            <h2>Регистрация</h2>
                            <p>Для входа в чат, вам нужно зарегистрироваться</p>
                        </>}
                        />*/}

                        </div>
                        <LoginForm />
                        {/*                    <Route exact path={["/", "/login"]} component={LoginForm}/>
                    <Route path="/register" component={RegisterForm}/>*/}
                    </div>
                </Block>
            </section>
        </div>
    )
}