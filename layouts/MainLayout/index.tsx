import React from 'react';
import s from './MainLayout.module.scss';
import cn from 'classnames';

import {Header} from "../../components/Header";
import LastNewsRight from "../../components/LastNewsRight";


interface MainLayoutProps {
    hideComments?: boolean;
    hideMenu?: boolean;
    contentFullWidth?: boolean;
    hideReportButton?: boolean;
    className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
                                                     children,
                                                     className,
                                                     hideReportButton= true,
                                                     hideMenu,
                                                     contentFullWidth,
                                                     hideComments,

                                                 }) => {
    return (
        <div className={cn([s.wrapper], className)}>
            <div className={s.content}>
                <Header hideReportButton={hideReportButton}/>
                <div>Пост</div>
                <div>Пост</div>
                <div>Пост</div>
                <div>Пост</div>
            </div>
            {hideReportButton && <LastNewsRight />

            /*<div className={s.lastNews}>dddd</div>*/}

        </div>
    );
};
