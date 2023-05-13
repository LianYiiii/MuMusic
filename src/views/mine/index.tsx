import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import MusicPlayer from '@/components/music-player';

interface IProps {
    children?: ReactNode,
}

const Mine: FC<IProps> = () => {
    return (
        <div>mine
            <MusicPlayer />
        </div>
    )
}

export default memo(Mine)