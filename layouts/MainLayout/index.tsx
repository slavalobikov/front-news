import React from 'react';
import s from './MainLayout.module.scss';
import cn from 'classnames';

import {Header} from "../../components/Header";


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
                                                     hideReportButton,
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
            {hideReportButton && <div className={s.lastNews}>dddd</div>}

        </div>
    );
};
