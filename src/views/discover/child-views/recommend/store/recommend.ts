import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RequestRanking, getBanners, getHotRecommend, getNewAlbum } from "../service/recommend";

interface IRecommendState {
    banners: any[],
    // 飙升榜
    upRanking: any
    // 原创榜
    originRanking: any
    // 新歌榜
    newRanking: any
    ranking: any
}

const initialState: IRecommendState = {
    banners: [],
    // 飙升榜
    upRanking: {},
    // 原创榜
    originRanking: {},
    // 新歌榜
    newRanking: {},
    // 前三个榜单的总和榜
    ranking: {}
}

export const fetchRecommendDataAction = createAsyncThunk(
    'recommendData',
    (_, { dispatch }) => {
        getBanners().then(res => {
            dispatch(changeBannersAction(res.banners));
        });
        // getHotRecommend(8).then(res => {
        //     dispatch(changeHotRecommendAction(res.result));
        // });
        // getNewAlbum().then(res => {
        //     dispatch(changeNewAlbumAction(res.albums));
        // });
    }
)

// 【飙升，新歌，原创】
const rankingIds = [19723756, 3779629, 2884035];

RequestRanking(rankingIds[0]).then(res => {
    console.log(res?.playlist.tracks.slice(0, 10));

})

export const fetchRankingDataAction = createAsyncThunk(
    'rankingData',
    (_, { dispatch }) => {
        // 获取榜单数据
        for (const id of rankingIds) {
            // 方法一：每个请求单独处理
            RequestRanking(id).then(res => {
                switch (id) {
                    case rankingIds[0]:
                        // console.log('飙升', res);
                        // res 里的 playlist 是每个榜单的曲目
                        dispatch(changeUpRankingAction(res?.playlist))
                        break;
                    case rankingIds[1]:
                        // console.log('新歌', res);
                        dispatch(changeNewRankingAction(res?.playlist));
                        break;
                    case rankingIds[2]:
                        // console.log('原创', res);
                        dispatch(changeOriginRankingAction(res?.playlist));
                        break;
                }
            })
        }
        //方法二：拿到三个结果，统一放到一个数组中管理
        // 要求：1. 拿到全部数据 2. 按顺序拿到
        // const promises: Promise<any>[] = [];
        // for (const id of rankingIds) {
        //     promises.push(RequestRanking(id));
        // }

        // Promise.all(promises).then(res => {
        //     const playlists = res.map(item => item.playlist);
        //     console.log(playlists);
        //     dispatch(changeRankingAction(playlists));
        // })
    }
)
if (initialState.upRanking) {

    console.log(initialState.upRanking);
}

const recommendSlice = createSlice({
    name: 'recommend',
    initialState,
    reducers: {
        changeBannersAction(state, { payload }) {
            state.banners = payload
        },
        changeUpRankingAction(state, { payload }) {
            // console.log(payload);
            state.upRanking = payload
        },
        changeOriginRankingAction(state, { payload }) {
            // console.log(payload);
            state.originRanking = payload
        },
        changeNewRankingAction(state, { payload }) {
            // console.log(payload);
            state.newRanking = payload
        },
        changeRankingAction(state, { payload }) {
            // console.log(payload);
            state.ranking = payload
        },
    },
    // extraReducers: (builder) => {
    //     // builder
    //     //     .addCase(fetchBanner)
    // }
})

export const {
    changeBannersAction,
    changeUpRankingAction,
    changeNewRankingAction,
    changeOriginRankingAction,
    changeRankingAction
} = recommendSlice.actions;
export default recommendSlice.reducer