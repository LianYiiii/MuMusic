import { react, tsExportAssignment, tsTypePredicate } from "@babel/types";
import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { AlbumItemWrapper } from './style';

interface IProps {
    children?: ReactNode,
    boxName: string
}

const NewAlbumItem: FC<IProps> = () => {
    return (
        <AlbumItemWrapper></AlbumItemWrapper>
    )
}

export default memo(NewAlbumItem)