import React from 'react';

import s from './LastNews.module.scss';
import AsideNews from "../AsideNews";

interface LastNewsProps {

}

const LastNewsRight:React.FC<LastNewsProps> = () => {
    return (
        <aside className={s.aside}>
            <h3>Последнии новости</h3>
            <AsideNews time={'12:43'} title={'Гомельского волонтера, который отправил политзаключенным 2500 писем, проверяют на финансирование экстремизма'}  />
            <AsideNews time={'12:55'} title={'В Браславе показали царь-драник с картой Беларуси. Фотофакт'}  />

        </aside>
    )
}

export default LastNewsRight;