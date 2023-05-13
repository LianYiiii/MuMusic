import React, { memo } from 'react';
import type { FC, ReactNode } from 'react'
import { SongModule, SongList, SongNameModule } from './style';
import { formatCount } from '@/utils/format';

interface IProps {
    children?: ReactNode,
    listName: string,
    id: number,
    picUrl: string,
    playCount: number
}

export const SongListModule: FC<IProps> = (props) => {
    const { listName, id, picUrl, playCount } = props;
    const formatPlayCount = formatCount(playCount);
    return (
        <SongList>
            <SongModule>
                <img src={picUrl} alt={listName} />
                <a href="/" title={listName} className='mask'> </a>
                <div className='bottom'>
                    <span className='earphone'></span>
                    <a href="/">{formatPlayCount}</a>
                    <a href='/' className='viewed' title='播放'> </a>
                </div>
            </SongModule>
            <SongNameModule>
                <p className='describe'>
                    <i></i>
                    <a title={listName} href='/' className='song-name'>{listName}</a>
                </p>
            </SongNameModule>
        </SongList>
    )
}

export default memo(SongListModule)