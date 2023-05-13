import React, { lazy } from "react";
import { Navigate } from "react-router";
import type { RouteObject } from "react-router";

const Discover = lazy(() => import("@/views/discover"));
const Download = lazy(() => import("@/views/download"));
const Mine = lazy(() => import("@/views/mine"));
const Focus = lazy(() => import("@/views/focus"));

// discover 的二级路由
const Recommend = lazy(() => import("@/views/discover/child-views/recommend"));
const Album = lazy(() => import("@/views/discover/child-views/album"));
const Djradio = lazy(() => import("@/views/discover/child-views/djradio"));
const Artist = lazy(() => import("@/views/discover/child-views/artist"));
const Ranking = lazy(() => import("@/views/discover/child-views/ranking"));
const Songs = lazy(() => import("@/views/discover/child-views/songs"));


// discover 二级路由
// const Recommend = lazy(() => import('@/views/discover/child-views/recommend'))

const routes: RouteObject[] = [
    {
        path: '/',
        // 组件需要传入一个实例
        element: <Navigate to='/discover' />
    },
    {
        path: '/discover',
        element: <Discover />,
        // 二级路由
        children: [
            {
                // 默认路由
                path: '/discover',
                element: <Navigate to="/discover/recommend" />
            },
            {
                path: '/discover/recommend',
                element: <Recommend />
            },
            {
                path: '/discover/djradio',
                element: <Djradio />
            },
            {
                path: '/discover/artist',
                element: <Artist />
            },
            {
                path: '/discover/album',
                element: <Album />
            },
            {
                path: '/discover/ranking',
                element: <Ranking />
            },
            {
                path: '/discover/songs',
                element: <Songs />
            },
        ]
    },
    {
        path: '/mine',
        element: <Mine />
    },
    {
        path: '/focus',
        element: <Focus />
    },
    {
        path: '/download',
        element: <Download />
    },
];

export default routes;