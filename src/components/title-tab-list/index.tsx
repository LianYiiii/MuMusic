import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { TitleTabWrapper } from './style';

interface DataType {
    index: number,
    href: string,
    title: string
}

interface IProps {
    children?: ReactNode,
    tabData?: DataType[]
}

const TitleTabList: FC<IProps> = (props: IProps) => {
    return (
        <TitleTabWrapper>
            {
                props.tabData?.map(item => {
                    return (
                        <>
                            <a href={item.href} key={item.title}>
                                {item.title}
                            </a>
                            {
                                props.tabData &&
                                (item.index + 1 < props.tabData.length ?
                                    <span className='divided'>|</span>
                                    : null)
                            }
                        </>
                    )
                })
            }
        </TitleTabWrapper>
    )
}

export default memo(TitleTabList)