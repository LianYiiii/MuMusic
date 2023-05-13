import hyRequest from "@/service";
import { IRankingList, IBanner } from "./data-interface";

export function getBanners() {
    return hyRequest.get<IBanner>({
        url: '/banner'
    })
}
export function getHotRecommend() {
    // return hyRequest.get({
    //     url: '/banner'
    // })
}
export function getNewAlbum() {
    // return hyRequest.get({
    //     url: '/banner'
    // })
}

export function RequestRanking(id: number) {
    return hyRequest.get<IRankingList>({
        url: 'playlist/detail',
        params: {
            id
        }
    })
};