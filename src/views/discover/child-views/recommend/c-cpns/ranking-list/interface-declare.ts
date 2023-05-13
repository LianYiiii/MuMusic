export interface Track {
    first: string;
    second: string;
}

export interface List {
    subscribers: any[];
    subscribed?: any;
    creator?: any;
    artists?: any;
    tracks: Track[];
    updateFrequency: string;
    backgroundCoverId: number;
    backgroundCoverUrl?: any;
    titleImage: number;
    coverText?: any;
    titleImageUrl?: any;
    englishTitle?: any;
    opRecommend: boolean;
    recommendInfo?: any;
    socialPlaylistCover?: any;
    subscribedCount: number;
    cloudTrackCount: number;
    userId: number;
    createTime: number;
    highQuality: boolean;
    specialType: number;
    updateTime: number;
    coverImgId: number;
    anonimous: boolean;
    newImported: boolean;
    trackUpdateTime: number;
    trackCount: number;
    coverImgUrl: string;
    totalDuration: number;
    commentThreadId: string;
    privacy: number;
    playCount: number;
    trackNumberUpdateTime: number;
    adType: number;
    description: string;
    ordered: boolean;
    tags: any[];
    status: number;
    name: string;
    id: number;
    coverImgId_str: string;
    toplistType: string;
}

export interface Artist {
    first: string;
    second: string;
    third: number;
}

export interface ArtistToplist {
    coverUrl: string;
    artists: Artist[];
    name: string;
    upateFrequency: string;
    position: number;
    updateFrequency: string;
}

export interface Artist {
    name: string;
    id: number;
    picId: number;
    img1v1Id: number;
    briefDesc: string;
    picUrl: string;
    img1v1Url: string;
    albumSize: number;
    alias: any[];
    trans: string;
    musicSize: number;
    topicPerson: number;
}

export interface Artist {
    name: string;
    id: number;
    picId: number;
    img1v1Id: number;
    briefDesc: string;
    picUrl: string;
    img1v1Url: string;
    albumSize: number;
    alias: any[];
    trans: string;
    musicSize: number;
    topicPerson: number;
}

export interface Artist {
    name: string;
    id: number;
    picId: number;
    img1v1Id: number;
    briefDesc: string;
    picUrl: string;
    img1v1Url: string;
    albumSize: number;
    alias: any[];
    trans: string;
    musicSize: number;
    topicPerson: number;
}

export interface Album {
    name: string;
    id: number;
    type: string;
    size: number;
    picId: number;
    blurPicUrl: string;
    companyId: number;
    pic: number;
    picUrl: string;
    publishTime: number;
    description: string;
    tags: string;
    company?: any;
    briefDesc: string;
    artist: Artist;
    songs: any[];
    alias: any[];
    status: number;
    copyrightId: number;
    commentThreadId: string;
    artists: Artist[];
    subType: string;
    transName?: any;
    onSale: boolean;
    mark: number;
    gapless: number;
    dolbyMark: number;
    picId_str: string;
}

export interface SqMusic {
    name?: any;
    id: number;
    size: number;
    extension: string;
    sr: number;
    dfsId: number;
    bitrate: number;
    playTime: number;
    volumeDelta: number;
}

export interface BMusic {
    name?: any;
    id: number;
    size: number;
    extension: string;
    sr: number;
    dfsId: number;
    bitrate: number;
    playTime: number;
    volumeDelta: number;
}

export interface HMusic {
    name?: any;
    id: number;
    size: number;
    extension: string;
    sr: number;
    dfsId: number;
    bitrate: number;
    playTime: number;
    volumeDelta: number;
}

export interface MMusic {
    name?: any;
    id: number;
    size: number;
    extension: string;
    sr: number;
    dfsId: number;
    bitrate: number;
    playTime: number;
    volumeDelta: number;
}

export interface LMusic {
    name?: any;
    id: number;
    size: number;
    extension: string;
    sr: number;
    dfsId: number;
    bitrate: number;
    playTime: number;
    volumeDelta: number;
}

export interface Song {
    name: string;
    id: number;
    position: number;
    alias: any[];
    status: number;
    fee: number;
    copyrightId: number;
    disc: string;
    no: number;
    artists: Artist[];
    album: Album;
    starred: boolean;
    popularity: number;
    score: number;
    starredNum: number;
    duration: number;
    playedNum: number;
    dayPlays: number;
    hearTime: number;
    sqMusic: SqMusic;
    hrMusic?: any;
    ringtone?: any;
    crbt?: any;
    audition?: any;
    copyFrom: string;
    commentThreadId: string;
    rtUrl?: any;
    ftype: number;
    rtUrls: any[];
    copyright: number;
    transName?: any;
    sign?: any;
    mark: number;
    originCoverType: number;
    originSongSimpleData?: any;
    single: number;
    noCopyrightRcmd?: any;
    mvid: number;
    bMusic: BMusic;
    mp3Url?: any;
    hMusic: HMusic;
    mMusic: MMusic;
    lMusic: LMusic;
    rtype: number;
    rurl?: any;
}

export interface RewardToplist {
    coverUrl: string;
    songs: Song[];
    name: string;
    position: number;
}

export interface RootObject {
    code: number;
    list: List[];
    artistToplist: ArtistToplist;
    rewardToplist: RewardToplist;
}

// rankinglist遍历的类型
export interface Subscriber {
    defaultAvatar: boolean;
    province: number;
    authStatus: number;
    followed: boolean;
    avatarUrl: string;
    accountStatus: number;
    gender: number;
    city: number;
    birthday: number;
    userId: number;
    userType: number;
    nickname: string;
    signature: string;
    description: string;
    detailDescription: string;
    avatarImgId: number;
    backgroundImgId: number;
    backgroundUrl: string;
    authority: number;
    mutual: boolean;
    expertTags?: any;
    experts?: any;
    djStatus: number;
    vipType: number;
    remarkName?: any;
    authenticationTypes: number;
    avatarDetail?: any;
    avatarImgIdStr: string;
    backgroundImgIdStr: string;
    anchor: boolean;
    avatarImgId_str: string;
}

export interface AvatarDetail {
    userType: number;
    identityLevel: number;
    identityIconUrl: string;
}

export interface Creator {
    defaultAvatar: boolean;
    province: number;
    authStatus: number;
    followed: boolean;
    avatarUrl: string;
    accountStatus: number;
    gender: number;
    city: number;
    birthday: number;
    userId: number;
    userType: number;
    nickname: string;
    signature: string;
    description: string;
    detailDescription: string;
    avatarImgId: number;
    backgroundImgId: number;
    backgroundUrl: string;
    authority: number;
    mutual: boolean;
    expertTags?: any;
    experts?: any;
    djStatus: number;
    vipType: number;
    remarkName?: any;
    authenticationTypes: number;
    avatarDetail: AvatarDetail;
    avatarImgIdStr: string;
    backgroundImgIdStr: string;
    anchor: boolean;
    avatarImgId_str: string;
}

export interface Ar {
    id: number;
    name: string;
    tns: any[];
    alias: any[];
}

export interface Al {
    id: number;
    name: string;
    picUrl: string;
    tns: any[];
    pic_str: string;
    pic: number;
}

export interface H {
    br: number;
    fid: number;
    size: number;
    vd: number;
}

export interface M {
    br: number;
    fid: number;
    size: number;
    vd: number;
}

export interface L {
    br: number;
    fid: number;
    size: number;
    vd: number;
}

export interface Sq {
    br: number;
    fid: number;
    size: number;
    vd: number;
}

export interface Track {
    name: string;
    id: number;
    pst: number;
    t: number;
    ar: Ar[];
    alia?: any[];
    pop: number;
    st: number;
    rt: string;
    fee: number;
    v: number;
    crbt?: any;
    cf: string;
    al: Al;
    dt: number;
    h: H;
    m: M;
    l: L;
    sq: Sq;
    hr?: any;
    a?: any;
    cd: string;
    no: number;
    rtUrl?: any;
    ftype: number;
    rtUrls: any[];
    djId: number;
    copyright: number;
    s_id: number;
    mark: number;
    originCoverType: number;
    originSongSimpleData?: any;
    tagPicList?: any;
    resourceState: boolean;
    version: number;
    songJumpInfo?: any;
    entertainmentTags?: any;
    awardTags?: any;
    single: number;
    noCopyrightRcmd?: any;
    mst: number;
    cp: number;
    mv: number;
    rtype: number;
    rurl?: any;
    publishTime: number;
}

export interface TrackId {
    id: number;
    v: number;
    t: number;
    at: number;
    alg?: any;
    uid: number;
    rcmdReason: string;
    sc?: any;
    f?: any;
    sr?: any;
    ratio: number;
}

export interface Playlist {
    id: number;
    name: string;
    coverImgId: number;
    coverImgUrl: string;
    coverImgId_str: string;
    adType: number;
    userId: number;
    createTime: number;
    status: number;
    opRecommend: boolean;
    highQuality: boolean;
    newImported: boolean;
    updateTime: number;
    trackCount: number;
    specialType: number;
    privacy: number;
    trackUpdateTime: number;
    commentThreadId: string;
    playCount: number;
    trackNumberUpdateTime: number;
    subscribedCount: number;
    cloudTrackCount: number;
    ordered: boolean;
    description: string;
    tags: any[];
    updateFrequency?: any;
    backgroundCoverId: number;
    backgroundCoverUrl?: any;
    titleImage: number;
    titleImageUrl?: any;
    englishTitle?: any;
    officialPlaylistType?: any;
    copied: boolean;
    relateResType?: any;
    subscribers: Subscriber[];
    subscribed: boolean;
    creator: Creator;
    tracks: Track[];
    videoIds?: any;
    videos?: any;
    trackIds: TrackId[];
    bannedTrackIds?: any;
    mvResourceInfos?: any;
    shareCount: number;
    commentCount: number;
    remixVideo?: any;
    sharedUsers?: any;
    historySharedUsers?: any;
    gradeStatus: string;
    score?: any;
    algTags?: any;
    toplistType: string;
}

export interface FreeTrialPrivilege {
    resConsumable: boolean;
    userConsumable: boolean;
    listenType?: any;
}

export interface ChargeInfoList {
    rate: number;
    chargeUrl?: any;
    chargeMessage?: any;
    chargeType: number;
}

export interface Privilege {
    id: number;
    fee: number;
    payed: number;
    realPayed: number;
    st: number;
    pl: number;
    dl: number;
    sp: number;
    cp: number;
    subp: number;
    cs: boolean;
    maxbr: number;
    fl: number;
    pc?: any;
    toast: boolean;
    flag: number;
    paidBigBang: boolean;
    preSell: boolean;
    playMaxbr: number;
    downloadMaxbr: number;
    maxBrLevel: string;
    playMaxBrLevel: string;
    downloadMaxBrLevel: string;
    plLevel: string;
    dlLevel: string;
    flLevel: string;
    rscl?: any;
    freeTrialPrivilege: FreeTrialPrivilege;
    chargeInfoList: ChargeInfoList[];
}

export interface ITracks {
    code: number;
    relatedVideos?: any;
    playlist: Playlist;
    urls?: any;
    privileges: Privilege[];
    sharedPrivilege?: any;
    resEntrance?: any;
    fromUsers?: any;
    fromUserCount: number;
    songFromUsers?: any;
}

export interface IData {
    subscribers: any[]
    subscribed?: any;
    creator?: any;
    artists?: any;
    tracks?: any;
    updateFrequency: string;
    backgroundCoverId: number;
    backgroundCoverUrl?: any;
    titleImage: number;
    titleImageUrl?: any;
    englishTitle?: any;
    opRecommend: boolean;
    recommendInfo?: any;
    socialPlaylistCover?: any;
    subscribedCount: number;
    cloudTrackCount: number;
    adType: number;
    trackNumberUpdateTime: number;
    userId: number;
    createTime: number;
    highQuality: boolean;
    anonimous: boolean;
    specialType: number;
    newImported: boolean;
    updateTime: number;
    coverImgId: number;
    trackUpdateTime: number;
    trackCount: number;
    totalDuration: number;
    commentThreadId: string;
    coverImgUrl: string;
    privacy: number;
    playCount: number;
    ordered: boolean;
    tags: any[];
    description: string;
    status: number;
    name: string;
    id: number;
    coverImgId_str: string;
    toplistType: string;

}
