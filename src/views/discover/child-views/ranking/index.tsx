import React, { memo } from 'react';
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode,
}

// 排行榜
const Ranking: FC<IProps> = () => {
    return (
        <div>Ranking</div>
    )
}

export default memo(Ranking)