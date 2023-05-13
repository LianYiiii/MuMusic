import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSongDetail, getSongLyrics } from "../service/player";
import { ParseLyrics } from "@/utils/parse-lyrics";
import type { LyricType } from "@/utils/parse-lyrics";
import { getStatusClassNames } from "antd/es/_util/statusUtils";
import type { IRootState } from "@/store";

interface IPlayerState {
    currentSong: any,
    lyrics: LyricType[],
    lyricIndex: number,
    playMode: number,
    playIndex: number,
    playSongList: any[]
}

interface IThunkState {
    state: IRootState
}

export const fetchCurrentSongAction = createAsyncThunk<void, number, IThunkState>(
    'currentSong',
    (id: number, { dispatch, getState }) => {
        // 设置播放列表
        // 1. 尝试是否可以在播放列表获取这首歌
        const playSongList = getState().player.playSongList;
        const findIndex = playSongList.findIndex(item => item.id === id);
        if (findIndex === -1) {
            // 没找到，就去
            getSongDetail(id).then(res => {
                if (!res.songs.length) return
                // 1. 获取song
                // console.log(res);
                // console.log(res.songs[0]);
                const song = res.songs[0];

                // 2. 将song放入CurrentSong
                const newPlaySongList = [...playSongList];
                newPlaySongList.push(song);
                dispatch(changeCurrentSongAction(song));
                dispatch(changeSongListAction(newPlaySongList));
                dispatch(changeSongIndexAction(newPlaySongList.length - 1));
            })
        } else {
            // 找到了
            const song = playSongList[findIndex];
            dispatch(changeCurrentSongAction(song));
            dispatch(changeSongIndexAction(findIndex));
        }



        // 获取歌词
        getSongLyrics(id).then(res => {
            // console.log(res);
            // 1. 获取歌词字符串
            const lyricString = res.lrc.lyric;
            // console.log(lyricString);

            // 2. 解析歌词,将每一句歌词都解析成一个对象，最终歌词会变成一个数组
            const lyrics = ParseLyrics(lyricString);


            dispatch(changeLyricsAction(lyrics));
            // console.log(lyrics);

        }).catch(err => {
            console.log(err);

        })
    });

export const changeMusicAction = createAsyncThunk<void, boolean, IThunkState>(
    'changeMusic',
    (isNext, { dispatch, getState }) => {
        // 1. 获取新歌曲索引(判断播放上一首还是下一首)
        // 拿到state的数据
        const playMode = getState().player.playMode;
        const songIndex = getState().player.playIndex;
        const songList = getState().player.playSongList;

        // 2. 在不同模式下计算下一首歌的索引
        let newIndex = songIndex;
        if (playMode === 1) {
            // 随机播放
            newIndex = Math.floor(songList.length * Math.random());
            if (newIndex === songIndex) newIndex = Math.floor(songList.length * Math.random());
        } else {
            // 单曲循环或顺序播放
            newIndex = isNext ? newIndex + 1 : newIndex - 1;
            if (newIndex > songList.length - 1) newIndex = 0;
            if (newIndex < 0) newIndex = songList.length - 1;
        }

        // 3.获取当前歌曲
        const song = songList[newIndex];
        dispatch(changeCurrentSongAction(song));
        dispatch(changeSongIndexAction(newIndex));

        // 4.请求新的歌词
        getSongLyrics(song.id).then(res => {
            // console.log(res);
            // 1. 获取歌词字符串
            const lyricString = res.lrc.lyric;
            // console.log(lyricString);

            // 2. 解析歌词,将每一句歌词都解析成一个对象，最终歌词会变成一个数组
            const lyrics = ParseLyrics(lyricString);
            dispatch(changeLyricsAction(lyrics));
            // console.log(lyrics);

        }).catch(err => {
            console.log(err);

        })
    }
);

const initialState: IPlayerState = {
    currentSong: {},
    lyrics: [],
    // 同句歌词可能会多次匹配，所以传入一个歌词索引值，保证只匹配一次
    lyricIndex: -1,
    playIndex: -1,
    // 0 顺序播放 1 随机播放 2单曲循环
    playMode: 0,
    // 播放歌单
    playSongList: [{ "name": "海阔天空", "id": 347230, "pst": 0, "t": 0, "ar": [{ "id": 11127, "name": "Beyond", "tns": [], "alias": [] }], "alia": [], "pop": 100, "st": 0, "rt": "600902000004240302", "fee": 1, "v": 114, "crbt": null, "cf": "", "al": { "id": 34209, "name": "海阔天空", "picUrl": "https://p1.music.126.net/8y8KJC1eCSO_vUKf2MyZwA==/109951165796899183.jpg", "tns": [], "pic_str": "109951165796899183", "pic": 109951165796899180 }, "dt": 326000, "h": { "br": 320001, "fid": 0, "size": 13042460, "vd": -5649, "sr": 44100 }, "m": { "br": 192001, "fid": 0, "size": 7825493, "vd": -3083, "sr": 44100 }, "l": { "br": 128001, "fid": 0, "size": 5217010, "vd": -1486, "sr": 44100 }, "sq": { "br": 798710, "fid": 0, "size": 32547445, "vd": -5639, "sr": 44100 }, "hr": null, "a": null, "cd": "1", "no": 1, "rtUrl": null, "ftype": 0, "rtUrls": [], "djId": 0, "copyright": 1, "s_id": 0, "mark": 8192, "originCoverType": 1, "originSongSimpleData": null, "tagPicList": null, "resourceState": true, "version": 114, "songJumpInfo": null, "entertainmentTags": null, "awardTags": null, "single": 0, "noCopyrightRcmd": null, "rtype": 0, "rurl": null, "mst": 9, "cp": 7002, "mv": 376199, "publishTime": 747504000000 }]
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        // fetchCurrentSongAction();
        changeCurrentSongAction(state, { payload }) {
            state.currentSong = payload;
            // console.log(payload);
        },
        changeLyricsAction(state, { payload }) {
            state.lyrics = payload;
        },
        changeLyricIndexAction(state, { payload }) {
            state.lyricIndex = payload;
        },
        changePlayModeAction(state, { payload }) {
            state.playMode = payload
        },
        changeSongListAction(state, { payload }) {
            state.playSongList = payload
        },
        changeSongIndexAction(state, { payload }) {
            state.playSongList = payload
        },
    }
})

export const {
    changeCurrentSongAction,
    changeLyricsAction,
    changeLyricIndexAction,
    changePlayModeAction,
    changeSongIndexAction,
    changeSongListAction
} = playerSlice.actions;
export default playerSlice.reducer