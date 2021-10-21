import React from 'react';
import cn from 'classnames';

import s from './Block.module.scss';

interface BlockProps {
    className?:string,
}

const Block:React.FC<BlockProps> = ({children, className}) => {
    return (
        <div className={cn(s.block, className)}>
            {children}
        </div>
    );
};

export default Block;