import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import discoverTitles from '@/assets/data/discover-titles.json'

import { DiscoverNav } from './style';

interface IProps {
    children?: ReactNode,
}

const DiscoverNavBar: FC<IProps> = () => {
    return (
        <>
            <DiscoverNav>
                <div className='discover-nav'>
                    <ul>
                        {
                            discoverTitles.map(item => {
                                return (
                                    <li key={item.title}>
                                        <Link to={item.link} key={item.title}>
                                            <em key={item.title}>{item.title}</em>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </DiscoverNav>
        </>
    )
}

export default memo(DiscoverNavBar)