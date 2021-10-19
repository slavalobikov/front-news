import React from 'react';

import s from './MainSubNews.module.scss';

interface MainSubNewsProps {
    title:string,
    time:string,
}

const MainSubNews:React.FC<MainSubNewsProps> = ({time, title}) => {
    return (
        <div className={s.content}>
            <h3><span className={s.time}>{time}</span> <span className={s.title}>{title}</span>
            </h3>
        </div>
    )
}

export default MainSubNews;