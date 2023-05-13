import React, { memo } from 'react';
import type { FC, ReactNode } from 'react'
import { TitleWrapper } from './style';
import TitleTabList from '@/components/title-tab-list';

interface DataType {
    index: number,
    href: string,
    title: string
}

interface IProps {
    children?: ReactNode,
    title: string,
    moreText: string,
    tabData?: DataType[],
    moreLink: string
}

const TitleCpn: FC<IProps> = (props: IProps) => {
    const { title, moreText, tabData } = props;
    return (
        <>
            <TitleWrapper>
                <div className='title'>
                    <div className="backgroundRedDot"></div>
                    <a href='/' className='title-href'>{title}</a>
                    <div className='title-tab'>
                        <TitleTabList
                            tabData={tabData}
                        />
                    </div>
                </div>
                <span className='more'>
                    <a href='/'>{moreText}</a>
                    {moreText && <i className='right-arrow'>&nbsp;</i>}
                </span>
            </TitleWrapper >
        </>
    )
}

export default memo(TitleCpn)