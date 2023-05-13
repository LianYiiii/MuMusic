import React, { memo, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { HotWrapper, HotLeft, HotRight, Recommend, RightDj, RightInfo, RightSinger } from './style';
import TitleCpn from '../c-cpns/title-cpn';
import SongListModule from '../c-cpns/song-list-module/index';
import NewDisc from '../c-cpns/new-album'
import RankingList from '../c-cpns/ranking-list';
import RightSingerItem from '@/components/hot-recommond-right-singer-item';
import RightDjItem from '@/components/hot-recommond-right-dj-item';
import titleTabData from '@/assets/data/title-tab.json';

import hyRequest from '@/service';
// import { fetchRankingDataAction } from '../store/recommend';
// import { useAppDispatch, useAppSelector } from '@/store';


interface IProps {
    children?: ReactNode,
}


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

interface DinfoAvatarDetail {
    userType: number,
    identityLevel: number,
    identityIconUrl: string
}

interface Dinfo {
    id: number
    rank: number,
    lastRank: number,
    score: number,
    nickName: string,
    avatarUrl: string,
    userType: number,
    userFollowedCount: 206901,
    mainAuthDesc: string,
    liveStatus: number,
    liveType: number,
    liveId: number,
    avatarDetail: DinfoAvatarDetail
    roomNo: number
}

interface DData {
    total: number
    updateTime: number
    list: Dinfo[]
}

interface SingerDataType {
    artists: Sinfo[]
    code: number
    more: boolean
}

interface DjDataType {
    code: number
    msg: any
    data: DData
}

interface HotRecommendDataType {
    hasTaste: boolean,
    code: number,
    category: number,
    result: HotRecommendResultDataType[]
}

interface HotRecommendResultDataType {
    id: number;
    type: number;
    name: string;
    copywriter: string;
    picUrl: string;
    canDislike: boolean;
    trackNumberUpdateTime: number;
    playCount: number;
    trackCount: number;
    highQuality: boolean;
    alg: string;
}

const HotRecommend: FC<IProps> = () => {
    const [singerInfo, setsingerInfo] = useState<Sinfo[]>([]);
    const [djInfo, setdjInfo] = useState<Dinfo[]>([]);
    const [hotRecommendInfo, setHotRecommendInfo] = useState<HotRecommendResultDataType[]>([]);


    useEffect(() => {
        async function requestSinger() {
            await hyRequest.get<SingerDataType>({ url: 'artist/list?cat=5001&limit=5' })
                .then(res => {
                    // console.log(res.artists);
                    setsingerInfo(res.artists);
                }).catch(err => {
                    console.log(err);
                })
        }
        requestSinger()
    }, []);             // 写明依赖

    useEffect(() => {
        async function requestDj() {
            await hyRequest.get<DjDataType>({ url: 'dj/toplist/popular?limit=6' })
                .then(res => {
                    // console.log(res);
                    setdjInfo(res.data.list);
                }).catch(err => {
                    console.log(err);
                })
        }
        requestDj()
    }, []);             // 写明依赖

    useEffect(() => {
        async function requestHotRecommend() {
            await hyRequest.get<HotRecommendDataType>({ url: '/personalized?limit=8' }).then(res => {
                // console.log(res);
                setHotRecommendInfo(res.result)
            }).catch(err => {
                console.log(err);
            })
        }

        requestHotRecommend()
    }, [])

    return (
        <div>
            <HotWrapper>
                <HotLeft>
                    <Recommend>
                        <TitleCpn
                            title="热门推荐"
                            tabData={titleTabData}
                            moreText="更多"
                            moreLink=''
                        />
                        <ul>
                            {
                                hotRecommendInfo.map(item => {
                                    const { name, id, picUrl, playCount } = item;
                                    return (
                                        <SongListModule listName={name} playCount={playCount} id={id} picUrl={picUrl} key={id} />
                                    )
                                })
                            }
                        </ul>

                    </Recommend>
                    {/* 每个模块 */}
                    <NewDisc></NewDisc>
                    <RankingList />
                </HotLeft>
                <HotRight>
                    {/* 右边模块 */}
                    <RightInfo>
                        <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                        <a href="#">用户登录</a>
                    </RightInfo>
                    <RightSinger>
                        <h3>
                            <span>入驻歌手</span>
                            <a href="">查看全部 &gt;</a>
                        </h3>
                        <ul>
                            {
                                singerInfo.map(item => {
                                    return (
                                        <RightSingerItem
                                            picUrl={item.picUrl}
                                            albumSize={item.albumSize}
                                            id={item.id}
                                            name={item.name}
                                            picId={item.picId}
                                            picId_str={item.picId_str}
                                            fansCount={item.fansCount}
                                            key={item.id}
                                        />
                                    )
                                })
                            }
                        </ul>
                    </RightSinger>
                    <RightDj>
                        <h3>
                            <span>热门主播</span>
                        </h3>
                        <ul>
                            {
                                djInfo.map(item => {
                                    return (
                                        <RightDjItem
                                            key={item.id}
                                            nickName={item.nickName}
                                            avatarUrl={item.avatarUrl}
                                            userFollowedCount={item.userFollowedCount}
                                        />
                                    )
                                })
                            }
                        </ul>
                    </RightDj>
                </HotRight>
            </HotWrapper>
        </div>
    )
}

export default memo(HotRecommend)