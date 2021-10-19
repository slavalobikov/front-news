import React from 'react';

import s from './AsideNews.module.scss';

interface  AsideNewsProps {
    time?:string,
    title?:string,
    date?:string,
}

const AsideNews:React.FC<AsideNewsProps> = ({time, title, date}) => {
    return (
        <div className={s.aside}>
            <div>
                 <span className={s.title}> <span className={s.time}>{time}</span> {title}</span>
                <div className={s.date}>{date}</div>
            </div>
        </div>
    )
}

export default AsideNews;