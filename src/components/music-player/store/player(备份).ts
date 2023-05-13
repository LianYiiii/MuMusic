import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSongDetail, getSongLyrics } from "../service/player";
import { ParseLyrics } from "@/utils/parse-lyrics";
import type { LyricType } from "@/utils/parse-lyrics";

interface IPlayerState {
    currentSong: any,
    lyrics: LyricType[],
    lyricIndex: number,
    playMode: number,
    playIndex: number,
    playList: any[]
}

export const fetchCurrentSongAction = createAsyncThunk('currentSong', (id: number, { dispatch }) => {
    getSongDetail(id).then(res => {
        if (!res.songs.length) return
        // 1. 获取song
        // console.log(res);
        // console.log(res.songs[0]);
        const song = res.songs[0];

        // 2. 将song放入CurrentSong
        dispatch(changeCurrentSongAction(song));
    })

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
})

const initialState: IPlayerState = {
    currentSong: {},
    lyrics: [],
    // 同句歌词可能会多次匹配，所以传入一个歌词索引值，保证只匹配一次
    lyricIndex: -1,
    playIndex: -1,
    playList: [],
    // 0 顺序播放 1 随机播放 2单曲循环
    playMode: 0
    // currentSong: { "songs": [{ "name": "温柔", "id": 386538, "pst": 0, "t": 0, "ar": [{ "id": 13193, "name": "五月天", "tns": [], "alias": [] }], "alia": [], "pop": 100, "st": 0, "rt": "600902000000534560", "fee": 1, "v": 77, "crbt": null, "cf": "", "al": { "id": 38285, "name": "我们是五月天", "picUrl": "https://p2.music.126.net/v4V40sXKnaqsG0ACyY0aDg==/109951164912221924.jpg", "tns": [], "pic_str": "109951164912221924", "pic": 109951164912221920 }, "dt": 269800, "h": { "br": 320000, "fid": 0, "size": 10794885, "vd": -63963, "sr": 44100 }, "m": { "br": 192000, "fid": 0, "size": 6476948, "vd": -61380, "sr": 44100 }, "l": { "br": 128000, "fid": 0, "size": 4317980, "vd": -59700, "sr": 44100 }, "sq": { "br": 1053723, "fid": 0, "size": 35536822, "vd": -63997, "sr": 44100 }, "hr": null, "a": null, "cd": "1", "no": 2, "rtUrl": null, "ftype": 0, "rtUrls": [], "djId": 0, "copyright": 0, "s_id": 0, "mark": 8704, "originCoverType": 1, "originSongSimpleData": null, "tagPicList": null, "resourceState": true, "version": 77, "songJumpInfo": null, "entertainmentTags": null, "awardTags": null, "single": 0, "noCopyrightRcmd": null, "mv": 10929721, "mst": 9, "cp": 684010, "rtype": 0, "rurl": null, "publishTime": 1049126400000 }], "privileges": [{ "id": 386538, "fee": 1, "payed": 0, "st": 0, "pl": 0, "dl": 0, "sp": 0, "cp": 0, "subp": 0, "cs": false, "maxbr": 999000, "fl": 0, "toast": false, "flag": 4, "preSell": false, "playMaxbr": 999000, "downloadMaxbr": 999000, "maxBrLevel": "lossless", "playMaxBrLevel": "lossless", "downloadMaxBrLevel": "lossless", "plLevel": "none", "dlLevel": "none", "flLevel": "none", "rscl": null, "freeTrialPrivilege": { "resConsumable": true, "userConsumable": false, "listenType": null }, "chargeInfoList": [{ "rate": 128000, "chargeUrl": null, "chargeMessage": null, "chargeType": 1 }, { "rate": 192000, "chargeUrl": null, "chargeMessage": null, "chargeType": 1 }, { "rate": 320000, "chargeUrl": null, "chargeMessage": null, "chargeType": 1 }, { "rate": 999000, "chargeUrl": null, "chargeMessage": null, "chargeType": 1 }] }], "code": 200 }
}

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
        }
    }
})

export const { changeCurrentSongAction, changeLyricsAction, changeLyricIndexAction, changePlayModeAction } = playerSlice.actions;
export default playerSlice.reducer