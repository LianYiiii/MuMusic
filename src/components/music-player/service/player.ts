import hyRequest from "@/service";
import { SongsDataType, LyricDataType } from "./playerInterface";
// 拿歌曲
export function getSongDetail(ids: number) {
    return hyRequest.get<SongsDataType>({
        url: '/song/detail',
        params: {
            ids
        }
    })
}

// 获取歌词
export function getSongLyrics(id: number) {
    return hyRequest.get<LyricDataType>({
        url: '/lyric',
        params: {
            id
        }
    })
}