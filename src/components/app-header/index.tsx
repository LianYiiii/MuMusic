import React, { memo, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { Link, NavLink, useRoutes } from 'react-router-dom';
import { HeaderWrapper, LeftHeader, RightHeader } from './style';

import headerTitles from '@/assets/data/header-titles.json';

import { SearchOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';

import wyyLogo from '@/assets/img/wyylogo.svg'

interface IProps {
    children?: ReactNode,
}

const AppHeader: FC<IProps> = () => {
    function showItem(item: any) {
        if (item.type === 'path') {
            return <NavLink to={item.link}>{item.title}</NavLink>
        } else {
            return <a href={item.link} target="_blank" rel='noreferrer '>{item.title}</a>
        }

    }

    const [isMouseMovein, setIsMouseMovein] = useState(false);

    return (
        <div>
            <HeaderWrapper>
                <div className="content">
                    {/* 左边 */}
                    <LeftHeader>
                        <div className="logoBox">
                            <a className="logo" href="/">
                                <img src={wyyLogo} alt='logo' className='wyy-logo' />
                                {/* <Html5TwoTone className='wyy-logo' /> */}
                                <span>
                                    网易云音乐
                                </span>
                            </a>
                        </div>
                        <div className='title-list'>
                            {headerTitles.map(item => {
                                if (item.title === '下载客户端') {
                                    return (
                                        <>
                                            <div className='item' key={item.title}
                                            >
                                                {showItem(item)}
                                            </div>
                                            <sup className="hot" key='hot'></sup>
                                        </>
                                    )
                                } else {
                                    return (
                                        <>
                                            <div className='item' key={item.title}>
                                                {showItem(item)}
                                            </div>
                                        </>

                                    )
                                }
                            })}
                        </div>
                        {/* <Link to='/discover'>发现音乐</Link>
                        <Link to='/mine'>我的音乐</Link>
                        <Link to='/focus'>我的关注</Link>
                        <Link to='/download'>下载客户端</Link> */}
                    </LeftHeader>
                    {/* 右边，包括搜索框和按钮 */}
                    <RightHeader>
                        <div className="searchBox">
                            <Input className='search-ant' placeholder="音乐/电台/视频/用户" prefix={<SearchOutlined />} />
                        </div>
                        <div className="btn-search">
                            <Button className='btn' type="primary">创作者中心</Button>
                        </div>
                        <div className="btn-search">
                            <Button type="link" className='loginBtn'>登录</Button>
                        </div>
                    </RightHeader>
                </div>
            </HeaderWrapper>
        </div>
    )
}

export default memo(AppHeader)