import React from 'react';
import Image from "next/image";

import s from './ImageWithTime.module.scss';

interface ImageWithTimeProps {
    href:string,
    alt?:string,
    height:number,
    width:number,
    time: string

}

const ImageWithTime:React.FC<ImageWithTimeProps> = ({href, alt, width, height, time}) => {
    return (
        <div className={s.container}>
            <Image src={href} alt={alt} width={width} height={height} draggable={false} />
            <span className={s.time}>{time}</span>
        </div>
    )
}

export default ImageWithTime;