import React from 'react';
import Image from 'next/image'
import cn from 'classnames';

import s from './Header.module.scss';
import {NavLink} from "../NavLink";



interface HeaderProps {
    hideReportButton?: boolean,
}

export const Header: React.FC<HeaderProps> = ({
                                                  hideReportButton,
                                              }) => {
    return (
        <header>
            <div className={s.header}>
                <Image
                    src={'https://vesti.bntu.by/sites/all/themes/newspro/images/Logo-vesti-2014.png'}
                    alt={'Вести'}
                    height={63}
                    width={210}
                />
                <div className={s.inputContainer}>
                    <input placeholder={'Поиск по новостям'} className={cn(s.input,
                        {[s.inputWithReportButton]: !hideReportButton})} type="text"/>
                    <button className={s.btn}>Найти</button>

                </div>

                {!hideReportButton && <button className={s.btnReport}>Сообщить новость</button>}
            </div>
            {!hideReportButton && <nav>
                <ul className={s.ul}>
                    <li className={s.li}>
                        <NavLink className={'link'} href={'/daynews'}>
                            Главная
                        </NavLink>
                    </li>
                    <li>Политика и финансы</li>
                    <li>Жизнь</li>
                    <li>В мире</li>
                    <li>Происшествия</li>
                    <li>Подвал</li>
                </ul>
                <div className={s.line}></div>
            </nav>}


        </header>
    );
};
