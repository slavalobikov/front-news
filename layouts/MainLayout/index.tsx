import React from 'react';
import s from './MainLayout.module.scss';
import cn from 'classnames';

import {Header} from "../../components/Header";
import LastNewsRight from "../../components/LastNewsRight";
import MainPosts from "../../components/MainPosts";


interface MainLayoutProps {
    hideComments?: boolean;
    hideMenu?: boolean;
    contentFullWidth?: boolean;
    hideReportButton?: boolean;
    className?: string;
    usnews?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
                                                          children,
                                                          className,
                                                          hideReportButton=false,
                                                          usnews,
                                                          hideMenu,
                                                          contentFullWidth,
                                                          hideComments,

                                                      }) => {
    return (
        <div className={cn([s.wrapper], className)}>
            <div className={s.fl}>
                <div className={s.content}>
                    <Header usnews={usnews} hideReportButton={hideReportButton}/>
                    {hideReportButton && usnews && <MainPosts/>}
                </div>
                {hideReportButton && <LastNewsRight/>}
            </div>
            {children}
        </div>
    );
};
