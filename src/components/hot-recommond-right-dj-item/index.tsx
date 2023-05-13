import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { DjItemWrapper, ItemHeader, ItemIfo } from '../hot-recommond-right-dj-item/style';

interface IProps {
    children?: ReactNode,
    nickName: string
    avatarUrl: string
    userFollowedCount: number
}

const RightDjItem: FC<IProps> = (props) => {
    const { nickName, avatarUrl, userFollowedCount } = props;
    return (
        <>
            <DjItemWrapper>
                <a href="/">
                    <ItemHeader>
                        <img src={avatarUrl} alt={'dj pic none'} />
                    </ItemHeader>
                </a>
                <ItemIfo>
                    <h4>
                        <a href='/'>{nickName}</a>
                    </h4>
                    <p>粉丝数量：{userFollowedCount}</p>
                </ItemIfo>

            </DjItemWrapper>
        </>
    )
}

export default memo(RightDjItem)