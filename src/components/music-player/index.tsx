import React, { memo, useRef, MutableRefObject, useState, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import {
    PlayerWrapper,
    MusicControllerWrapper,
    UpBox,
    BottomWrapper,
    BtnWrapper,
    MusicHead,
    MusicPlayerProgress,
    MusicOpener,
    MusicCtrler,
    MusicWords,
    MusicCtr
} from './style';
import { Slider, message } from 'antd';
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/store';
import hyRequest from '@/service';
import { formatSongTime } from '@/utils/format';
import { changeLyricIndexAction, changeMusicAction, changePlayModeAction } from './store/player';

interface IProps {
    children?: ReactNode,
}

interface FreeTrialInfo {
    start: number;
    end: number;
}

interface FreeTrialPrivilege {
    resConsumable: boolean;
    userConsumable: boolean;
    listenType?: any;
    cannotListenReason?: any;
}

interface FreeTimeTrialPrivilege {
    resConsumable: boolean;
    userConsumable: boolean;
    type: number;
    remainTime: number;
}

interface AudioDataType {
    id: number;
    url: string;
    br: number;
    size: number;
    md5: string;
    code: number;
    expi: number;
    type: string;
    gain: number;
    peak: number;
    fee: number;
    uf?: any;
    payed: number;
    flag: number;
    canExtend: boolean;
    freeTrialInfo: FreeTrialInfo;
    level: string;
    encodeType: string;
    freeTrialPrivilege: FreeTrialPrivilege;
    freeTimeTrialPrivilege: FreeTimeTrialPrivilege;
    urlSource: number;
    rightSource: number;
    podcastCtrp?: any;
    effectTypes?: any;
    time: number;
}

interface AudioRequestDataType {
    data: AudioDataType[],
    code: number
}

const MusicPlayer: FC<IProps> = () => {
    // 显示暂停键或播放键
    const mouseEl: MutableRefObject<any> = useRef(null);
    const [isShow, setIsShow] = useState(false);

    // 定义当前是否播放
    const plyPauseEl: MutableRefObject<any> = useRef(null);
    const [isPlayMusic, setIsPlayMusic] = useState(false);

    // 定义播放列表是否展出
    const [isPlayListPanel, setIsPlayListPanel] = useState(false);

    // audio获取歌曲地址
    const audioEl: MutableRefObject<any> = useRef(null);
    const [audioUrl, setAudioUrl] = useState<string>();

    // 歌曲播放进度
    const [progress, setProgress] = useState(0);

    // 记录是否在拖拽
    const [isSliding, setIsSliding] = useState(false);

    // 歌曲播放的当前时间点
    const [crtSongTime, setCrtSongTime] = useState(0);

    // 歌曲时长
    const [songTime, setSongTime] = useState(0);

    // 从 redux 中取到数据
    // 获取当前播放歌曲
    const { currentSong, lyrics, lyricIndex, playMode } = useAppSelector(state => ({
        currentSong: state.player.currentSong,
        lyrics: state.player.lyrics,
        lyricIndex: state.player.lyricIndex,
        playMode: state.player.playMode
    }),
        // 只有值发生变化才会拿
        appShallowEqual
    );

    const dispatch = useAppDispatch()

    const MouseMoveEnterUpBox = () => {
        // mouseEl.current.style.display = 'block';
        // setIsShow(true);
        // // console.log('xianshi');
    }

    const MouseMoveLeaveUpBox = () => {
        //     mouseEl.current.style.display = 'none';
        //     setIsShow(false);
        //     // console.log('不显示');
    }


    // 获取音频
    useEffect(() => {
        async function requestMusicAudio() {
            await hyRequest.get<AudioRequestDataType>({
                url: "/song/url?id=" + currentSong?.id
            })
                .then(res => {
                    // console.log(res.data[0]);
                    const time = res.data[0].time;
                    setAudioUrl(res.data[0].url);
                    setSongTime(time);
                    // console.log(audioUrl);
                }).catch(err => {
                    console.log(err);
                    message.error('音频获取失败')
                })
        }
        requestMusicAudio();
        audioEl.current?.play().then(() => {
            setIsPlayMusic(true);
            // message.success('歌曲播放成功');
        }).catch(() => {
            setIsPlayMusic(false);
            // message.error('歌曲播放失败');
        })
    }, [currentSong])

    // 歌曲播放完成
    const musicEnd = () => {
        plyPauseEl.current.className = 'ply';
        setIsPlayMusic(false);
        if (playMode === 2) {
            audioEl.current!.currentTime = 0;
            audioEl.current?.play();
        } else {
            // 不是单曲循环
            handleChangeMusic(true);
        }
    }

    // 播放、暂停
    const plyClick = () => {
        // 默认播放为false，图片默认为播放样式
        // console.log('开始的' + isPlayMusic);

        if (!isPlayMusic) {
            // 开始是暂停（false），点击后就要播放音乐
            // console.log('播放音乐', isPlayMusic);
            audioEl.current.play();
            setIsPlayMusic(!isPlayMusic);
            // 图片就要变成暂停样式
            plyPauseEl.current.className = 'ply-pause';

        } else {
            // console.log('暂停音乐', isPlayMusic);
            audioEl.current.pause();
            setIsPlayMusic(!isPlayMusic);
            // 图片就要变成播放样式
            plyPauseEl.current.className = 'ply';
        }
    };

    // 随着歌曲播放，设置进度
    const handleTimeUpdate = () => {
        // console.log('正在播放'); 
        const currentTime = audioEl.current!.currentTime;
        if (!isSliding) {
            const slider = (currentTime.toFixed(2) / (songTime / 1000)) * 100;
            setProgress(slider);
            setCrtSongTime(currentTime)
        }

        // 1. 根据时间匹配歌词
        let index = lyrics.length - 1;
        // console.log(lyrics);

        for (let i = 0; i < lyrics.length; i++) {
            const lyric = lyrics[i]
            // console.log('currentTime' + currentTime * 1000);

            if (lyric.time > currentTime * 1000) {
                // 找个某个时间戳的歌词，就要找到第一个当前时间戳比指定时间戳大的地方
                // 要找的时间戳的歌词就是前一句
                // 缺点：index为-1时最后一句可能匹配不上
                // 所以默认是最后一句
                // console.log('lyricTime' + lyric.time);
                // console.log('currentTime' + currentTime * 1000);
                // console.log('lyricText' + lyric.text);
                index = i - 1;
                // console.log(index);
                if (lyrics[index].text === '') index -= 1;
                break;
            }
        }
        // console.log(lyrics[index]);

        // 4. 每句歌词配对索引值
        if (lyricIndex === index || index === -1) return
        dispatch(changeLyricIndexAction(index));
        // console.log('当前歌词' + lyrics[index].text);
        // console.log(('************'));

        // 5. 展示对应的歌词
        message.open({
            content: lyrics[index].text,
            // 每次打开的key相同，之后的歌词就会顶掉前一句
            key: 'lyric',
            // 自动关闭延时，0为不自动关闭
            duration: 0
        })
    }

    // 拖动进度条
    const handleSliderChanging = (value: number) => {
        // 0. 目前处于拖拽状态
        setIsSliding(true);
        const currentTime = (value / 100) * (songTime / 1000);
        setCrtSongTime(currentTime);
        // 1.设置progress
        setProgress(value);
        // 解除拖拽状态
        setIsSliding(false);

    };

    // 点击进度条
    const handleSliderChange = (value: number) => {
        // 1. 获取点击位置时间
        const currentTime = (value / 100) * (songTime / 1000);

        // 2.设置当前播放时间
        audioEl.current.currentTime = currentTime;
        setIsSliding(true);

        // 3.改变currentTime和progress
        setCrtSongTime(currentTime);
        setProgress(currentTime);
        // console.log('progress' + progress);
        // console.log('currentTime' + currentTime);
        // console.log('crtSongTime' + crtSongTime);
        // console.log('------------------');

        setIsSliding(false);

    };

    // 点击播放模式
    const handleChangeLoop = () => {
        console.log('loop');
        let newPlayMode = playMode + 1;
        if (newPlayMode > 2) newPlayMode = 0
        dispatch(changePlayModeAction(newPlayMode))
    }

    // 点击播放列表
    const handleClickPlayList = () => {
        console.log('clickplylis');
        setIsPlayListPanel(!isPlayListPanel);
    }

    // 切歌
    const handleChangeMusic = (isNext = true) => {
        console.log('changemsc');
        dispatch(changeMusicAction(isNext))
    }

    const songDetailLink = 'songs?id=' + currentSong?.songs?.[0]?.al?.id;
    // console.log(currentSong);

    return (
        <BottomWrapper>
            <UpBox onMouseEnter={MouseMoveEnterUpBox} onMouseLeave={MouseMoveLeaveUpBox}></UpBox>
            <PlayerWrapper ref={mouseEl}>
                <MusicControllerWrapper isPlayListPanel={isPlayListPanel}>
                    <BtnWrapper isPlayMusic={isPlayMusic}>
                        <a href="javascript:;" className="pre" title='上一首(ctr+←)'
                            onClick={() => handleChangeMusic(false)}>
                            {/* 上一首 */}
                        </a>
                        <a href="javascript:;" className="ply" title='播放/暂停(p)'
                            onClick={plyClick} ref={plyPauseEl}>
                            {/* 播放/暂停 */}
                        </a>
                        <a href="javascript:;" className="nxt" title='下一首(ctr+→)'
                            onClick={() => handleChangeMusic()}>
                            {/* 下一首 */}
                        </a>
                        <audio ref={audioEl} id='cur-music'
                            // controls
                            src={audioUrl}
                            onTimeUpdate={handleTimeUpdate}
                            style={{ position: 'fixed', top: '20px' }}
                            onEnded={musicEnd}
                        >
                            <source src={audioUrl} type="audio/mp3" />
                        </audio>
                    </BtnWrapper>

                    <MusicHead>
                        <img src={currentSong?.al?.picUrl + '?param=34y34'} alt="songs img" />
                        <a href="/" className="mask" title={currentSong?.al?.name}> </a>
                    </MusicHead>
                    <MusicCtr>
                        <MusicWords>
                            <a href={songDetailLink} title={currentSong?.name} className='song-name'>{currentSong?.name}</a>
                            <a href="/" className='song-mv' title='歌曲mv'> </a>
                            <span className='song-wrapper'>
                                <span className='song-writer'>
                                    <a href="/" title={currentSong?.al?.name} className='song-writer-link'>{currentSong?.al?.name}</a>
                                </span>
                            </span>
                            <a href="/" title="来自榜单" className='song-link'> </a>
                        </MusicWords>
                        <Slider
                            // defaultValue={0}
                            // tooltip={{ open: false }}
                            tooltip={{ formatter: null }}
                            // range={{ draggableTrack: true }}
                            max={100}
                            min={0}
                            step={0.1}
                            value={progress}
                            onAfterChange={handleSliderChange}
                            onChange={handleSliderChanging}
                        />
                        <span className="song-time">
                            {formatSongTime(crtSongTime * 1000)} /
                            {formatSongTime(songTime)}
                        </span>
                    </MusicCtr>
                    <MusicOpener>
                        <a href="/" className="lyrics" title='歌词'> </a>
                        <a href="/" className="collection" title='收藏'> </a>
                        <a href="/" className="share" title='分享'> </a>
                    </MusicOpener>
                    <MusicCtrler playMode={playMode}>
                        <div className="voice"></div>
                        <a href="javascript:;" title='声音' className="loud-speaker"> </a>
                        <a href="javascript:;" title='循环' className="loop"
                            onClick={handleChangeLoop}> </a>
                        <span className="play-list-combination">
                            <span className='tip' style={{ display: 'none' }}>已添加至播放列表</span>
                            <a href="javascript:;" title='播放列表' className="play-list"
                                onClick={handleClickPlayList}>6</a>
                        </span>
                        <div className="tip-1"></div>
                    </MusicCtrler>
                    <div className="playlist-panel">
                        <div className="listhd">
                            <h4>
                                <span></span>
                            </h4>
                            <a href=""></a>
                            <span></span>
                            <a href=""></a>
                            <p></p>
                            <span></span>

                        </div>
                        <div className="listbd"></div>
                    </div>
                </MusicControllerWrapper>
            </PlayerWrapper>
        </BottomWrapper >
    )
}

export default memo(MusicPlayer);