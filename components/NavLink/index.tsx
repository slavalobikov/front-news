import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import s from './NavLink.module.scss';

import PropTypes from 'prop-types';


interface HeaderProps {
    href: string,
    exact?: boolean,
    className?: string,
}



export let NavLink: React.FC<HeaderProps> = ({ href, exact, children,className }) => {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        className = s.active;
    }

    return (
        <Link href={href}>
            <a className={className}>
                {children}
            </a>
        </Link>
    );
}
