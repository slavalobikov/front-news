import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import s from './Header.module.scss';
import {NavLink} from "../NavLink";


interface HeaderProps {
    hideReportButton?: boolean,
    usnews?: boolean,
}

export const Header: React.FC<HeaderProps> = ({
                                                  hideReportButton,
                                                  usnews,
                                              }) => {
    return (
        <header>
            <div className={s.header}>
                <Link href={'/'}>
                    <Image
                        src={'https://vesti.bntu.by/sites/all/themes/newspro/images/Logo-vesti-2014.png'}
                        alt={'Вести логотип - ссылка на главную страницу'}
                        height={63}
                        width={210}
                    />
                </Link>
                <div className={s.inputContainer}>
                    <input placeholder={'Поиск по новостям'} className={cn(s.input,
                        {[s.inputWithReportButton]: !hideReportButton})} type="text"/>
                    <button className={s.btn}>Найти</button>

                </div>

                {!hideReportButton && <Link href={'/unews'}>
                    <button className={cn(s.btnReport,
                        {[s.hidden]: usnews})}>Сообщить новость</button>
                </Link>}

            </div>
            {!hideReportButton && !usnews && <nav>
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
            {usnews && <nav>
                <ul className={s.ul}>
                    <li className={s.li}>
                        <NavLink className={'link'} href={'/unews'}>
                            Связь с редакцией
                        </NavLink>
                    </li>
                    <li className={s.li}>
                        <NavLink className={'link'} href={'/contacts'}>
                            Контакты
                        </NavLink>
                    </li>


                </ul>
                <div className={s.line}></div>
            </nav>}


        </header>
    );
};
