import React, { memo, Suspense } from 'react';
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router';

import DiscoverNavBar from './nav-bar/index'
import TopBanner from './child-views/recommend/c-cpns/top-banners/index'
import HotRecommend from './child-views/recommend/hot-recommend';
import MusicPlayer from '@/components/music-player';

interface IProps {
    children?: ReactNode,
}

const Discover: FC<IProps> = () => {
    return (
        <>
            <DiscoverNavBar></DiscoverNavBar>
            <TopBanner></TopBanner>
            <HotRecommend></HotRecommend>
            <Suspense fallback="">
                <Outlet />
            </Suspense>
            <MusicPlayer />
        </>
    )
}

export default memo(Discover)