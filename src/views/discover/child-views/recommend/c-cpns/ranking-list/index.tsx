import React, { memo, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react'
import TitleCpn from '../title-cpn';
import { RankingWrapper, RankingModule } from './style';

import hyRequest from '@/service';
import RankingTable from './cpn/ranking-table';
import { List, RootObject } from './interface-declare';
import { useAppDispatch, useAppSelector } from '@/store';
import { shallowEqual } from 'react-redux';
import { fetchRankingDataAction } from '../../store/recommend';

interface IProps {
    children?: ReactNode,
}

const RankingList: FC<IProps> = () => {
    const { upRankings, originRankings, newRankings } = useAppSelector(state => ({
        upRankings: state.recommond.upRanking,
        newRankings: state.recommond.newRanking,
        originRankings: state.recommond.originRanking,
    }),
        shallowEqual)

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchRankingDataAction());
    }, [])
    // console.log(upRankings);


    // const [ranking, setRanking] = useState<List[]>([]);

    // useEffect(() => {
    //     async function requestRanking() {
    //         await hyRequest.get<RootObject>({
    //             url: 'toplist/detail'
    //         }).then(res => {
    //             // console.log(res);
    //             // console.log(res.list);
    //             setRanking(res.list);
    //         }).catch(err => {
    //             console.log(err);
    //         })
    //     }

    //     requestRanking();
    // }, []);

    // console.log(upRankings);

    return (
        <RankingWrapper>
            <TitleCpn
                title='榜单'
                moreText=""
                moreLink='更多'
            />
            <RankingModule>
                <RankingTable data={upRankings} />
                <RankingTable data={originRankings} />
                <RankingTable data={newRankings} />
            </RankingModule>
        </RankingWrapper>
    )
}

export default memo(RankingList)