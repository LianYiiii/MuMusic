import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { SingerItemWrapper, ItemHeader, ItemIfo } from './style';

interface Sinfo {
    albumSize: number
    alias: []
    briefDesc: string
    fansCount: number
    followed: boolean
    id: number
    img1v1Id: number
    img1v1Id_str: string
    img1v1Url: string
    musicSize: number
    name: string
    picId: number
    picId_str: string
    picUrl: string
    topicPerson: number
    trans: string
}
interface IProps {
    children?: ReactNode,
    albumSize: number
    // alias: []
    // briefDesc: string
    fansCount: number
    // followed: boolean
    id: number
    // img1v1Id: number
    // img1v1Id_str: string
    // img1v1Url: string
    // musicSize: number
    name: string
    picId: number
    picId_str: string
    picUrl: string
    // topicPerson: number
    // trans: string
}


const RightSingerItem: FC<IProps> = (props) => {
    const { picUrl, name, fansCount } = props;

    return (
        <SingerItemWrapper>
            <a href="/">
                <ItemHeader>
                    <img src={picUrl} alt={'singer pic none'} />
                </ItemHeader>
                <ItemIfo>
                    <h4>
                        <span>{name}</span>
                    </h4>
                    <p>粉丝数量：{fansCount}</p>
                </ItemIfo>
            </a>
        </SingerItemWrapper>
    )
}

export default memo(RightSingerItem)