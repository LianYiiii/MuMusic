import React, { memo, useRef, useEffect, MutableRefObject, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { RankingTableWrapper, ListWrapper } from './style'
import rankingList from '../..';
import { useAppDispatch } from '@/store';
import { fetchCurrentSongAction } from '@/components/music-player/store/player';
import { ITracks, IData, Track, Playlist } from '@/views/discover/child-views/recommend/c-cpns/ranking-list/interface-declare'
import { current } from '@reduxjs/toolkit';

interface IProps {
    children?: ReactNode,
    data: Playlist
}

const RankingTable: FC<IProps> = (props) => {
    // const liEl: MutableRefObject<any> = useRef(null);
    // const songNameRef: MutableRefObject<any> = useRef(null);
    // console.log(props.data);


    const dispatch = useAppDispatch();
    function handlePlayClick(id: number) {
        dispatch(fetchCurrentSongAction(id));
    }

    // 鼠标是否进入
    const [isMouseMoveIn, setIsMouseMoveIn] = useState(false);

    const olList: MutableRefObject<any> = useRef(null);

    useEffect(() => {
        if (olList.current) {
            const lis = olList.current.children;
            for (let index = 0; index < lis.length; index++) {
                const songName = lis[index].children[1];
                let songNameStyle = songName.style;
                let opener = lis[index].getElementsByClassName('opener')[0];

                lis[index].addEventListener('mouseenter', function () {
                    opener.style.display = 'block';
                    songNameStyle.float = 'left';
                    songNameStyle.display = 'block';
                });

                lis[index].addEventListener('mouseleave', function () {
                    opener.style.display = 'none'
                    songNameStyle.float = 'none';
                    songNameStyle.display = 'inline';
                });
            }
        };
    }, [olList.current])

    const handleClickAddCollection = (name: string) => { }

    if (!props.data) return null;
    const { name = '暂无歌曲', id, coverImgUrl, tracks = [], } = props.data;

    let index = 1;
    return (
        <RankingTableWrapper>
            <dl>
                <dt className='top'>
                    <div className="cover">
                        <img src={coverImgUrl} alt={name} />
                        <a href="" title={name} className='msk'> </a>
                    </div>
                    <div className="tit">
                        <a href="" title={name}>
                            <h3>{name}</h3>
                        </a>
                        <div className="btn">
                            <a href="" className='play' title='播放'></a>
                            <a href="" className='add-collection' title='收藏'></a>
                        </div>
                    </div>
                </dt>

                <ListWrapper index={index} isMouseMoveIn={isMouseMoveIn} >
                    <dd>
                        <ol className='ranking-list' ref={olList}>
                            {tracks.slice(0, 10).map((item: Track, index: number) => {
                                const { name, id } = item;
                                return (
                                    <li
                                        key={name}
                                        className=''
                                        data-index={index}
                                    >
                                        <span className='no'>{++index}</span>
                                        {/* <div className="info"> */}
                                        <a href="javascript:;" title={name} className='song-name'>{name}</a>
                                        <div className="opener" key={id}>
                                            <a href="javascript:;" className='opener-play' title='播放' onClick={() => handlePlayClick(id)}></a>
                                            <a href="javascript:;" className='opener-add-toplay' title='添加到播放列表'></a>
                                            <a href="javascript:;" className='opener-collection' title='收藏'></a>
                                            {/* </div> */}
                                        </div>
                                    </li>

                                )
                            })}
                        </ol></dd>
                </ListWrapper>
                <div className="more">
                    <a href="/">查看全部&gt;</a>
                </div>
            </dl>
        </RankingTableWrapper >
    )
}


export default memo(RankingTable)