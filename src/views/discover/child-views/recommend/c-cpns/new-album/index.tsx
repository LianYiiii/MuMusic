import React, { memo } from 'react';
import type { FC, ReactNode } from 'react'
import TitleCpn from '../title-cpn';
import { DiscWrapper, DiscList } from './style'

interface IProps {
    children?: ReactNode,
}

const NewDisc: FC<IProps> = () => {
    return (
        <div>
            <DiscWrapper>
                <TitleCpn title="新碟上架" moreText='更多' moreLink='' />
                <DiscList></DiscList>
            </DiscWrapper>
        </div>
    )
}

export default memo(NewDisc)