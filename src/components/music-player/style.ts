import styled from "styled-components";
import iconall1 from '@/assets/img/iconall1.png'
import playbar1 from '@/assets/img/playbar1.png';
import playbar3 from '@/assets/img/playbar3.png';
import starbar1 from '@/assets/img/statbar1.png'

interface IBarOperator {
    playMode: number,
}
interface IMusicCtrWrapper {
    isPlayListPanel: boolean
}

interface IPlyBtn {
    isPlayMusic: boolean
}

const Height = '53px';

export const BottomWrapper = styled.div`
    position: relative;
    bottom: 0;
    /* height: 80px; */
    background: green;
`;

export const PlayerWrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: ${Height};
    background: #333;
    z-index: 999;
`;

export const UpBox = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 10px;
    background: red;
`;

export const MusicControllerWrapper = styled.div<IMusicCtrWrapper>`
    position: relative;
    width: 65%;
    height: ${Height};
    background: #333;
    margin: 0 auto;
    .playlist-panel{
        display: ${props => {
        if (!props.isPlayListPanel) {
            return 'none;'
        } else {
            return 'block;'
        }
    }}
        position: absolute;
        bottom: ${Height};
        width: 100%;
        height: 300px;
        background: #333;
        z-index: 999;
    }
`;

export const BtnWrapper = styled.div<IPlyBtn>`
    float: left;
    width: 137px;
    height: 42px;
    padding: 3px 0 0 0;
    a{
        display: inline-block;
        float: left;
        background: url(${playbar1});
        outline: none;
        color: #333;
        margin-right: 8px;
        margin-top: 5px;
    }
    .pre{
        width: 28px;
        height: 28px;
        margin-top: 10px;

        background-position: 0 -130px;
        &:hover{
            background-position: -30px -130px;
        }
    }
    .ply{
        width: 36px;
        height: 36px;
        background-position: ${props => {
        if (!props.isPlayMusic) {
            return '0 -204px;'
        } else {
            return '0 -165px;'
        }
    }};
        
        

        &:hover{
            background-position: ${props => {
        if (!props.isPlayMusic) {
            return '-40px -204px;'
        } else {
            return '-40px -165px;'
        }
    }};
        }
    }
    .ply-pause {
        
        width: 36px;
        height: 36px;
        background-position: 0 -165px;
        
        &:hover{
            background-position: -40px -165px;
        }
    }
    /* 暂停按键： 0 -165px */
    .nxt{
        width: 28px;
        height: 28px;       
         margin-top: 10px;

        background-position: -80px -130px;
        &:hover{
            background-position: -110px -130px;
        }
    }
`

export const MusicHead = styled.div`    
    float: left;
    position: relative;
    width: 34px;
    height: 34px;
    background:#fff;
    margin: 10px 0 0 0;
    a{
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 34px;
        height: 34px;
        background: url(${playbar1}) 0px -80px;
    }
`;

export const MusicCtr = styled.div`
    float: left;
    width: 500px;
    /* height: 9px; */
    .ant-slider{
        width: 380px;
        float: left;
        margin-top: 7px;
        margin-left: 18px;
        .ant-slider-rail{
            background: url(${starbar1});    
            background-position: right 0;
        }
        .ant-slider-track{
            background: url(${starbar1});    
            background-position: left -66px;
        }
        .ant-slider-handle::after{
            width: 22px;
            height: 24px;
            top: -7px;
            left: -1px;
            background: url(${iconall1});    
            background-position: 0 -250px;
            box-shadow: 0 0 0 0;
            &:focus{
                box-shadow: 0 0 0 0;

            }
        }
    }

    .song-time{
        display: block;
        margin-left: 10px;
        margin-top: 6px;
        float: left;
        color: #ccc;
    }
`;

export const MusicWords = styled.div`
    height: 22px;
    /* background: #fff; */
    margin-left: 10px;
    overflow: hidden;
    line-height: 28px;
    margin-top: 4px;

    a.song-name{
        /* width: 110px; */
        height: 30px;
        /* line-height: 30px; */
        color: #e8e8e8;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        float: left;
        margin-left: 10px;
        &:hover{
            text-decoration: underline;
        }
    }
    a.song-mv {
        float: left;
        display: block;
        width: 19px;
        height: 17px;
        background: url(${playbar1}) 0 -57px;
        margin: 6px 0 0 5px;
        &:hover{
            background-position: -20px -57px;
        }
    }
    .song-wrapper{
        float: left;
        margin-left: 30px;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        .song-writer {
            .song-writer-link {
                color: #9b9b9b;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
    .song-link{
        float: left;
        width: 14px;
        height: 15px;
        margin: 7px 0 0 13px;
        background: url(${playbar1}) -110px -103px;
        &:hover {
            background-position: -130px -103px;
        }
    }
`;

export const MusicPlayerProgress = styled.div`
    
`;

export const MusicOpener = styled.div`
    float: left;
    /* background: #ccc; */
    margin: 15px 0px 0px 4px;
    a{
        float: left;
        display: block;
        width: 25px;
        height: 25px;
        background: url(${playbar1});
        margin: 0px 0px 0px 3px;
    }
    .lyrics {
        background: url(${playbar3});
        background-position: 0px 0px;
        &:hover{
            background-position-y: -25px;
        }
    }
    .collection {
        background-position: -88px -163px;
        &:hover{
            background-position: -88px -189px;
        }

    }
    .share {
        background-position: -114px -163px;
        &:hover{
            background-position: -114px -189px;
        }

    }
`;

export const MusicCtrler = styled.div<IBarOperator>`
    float: left;
    margin: 5px 0px 0 20px;
    span{
        float: left;
    }
    a{
        margin: 10px 1px;
        float: left;
        width: 25px;
        height: 25px;
        display: block;
        background: url(${playbar1});
    }

    .loud-speaker{
        background-position: -2px -248px;
        &:hover{
            background-position: -31px -248px;
        }
    }

    .loop{
        /* background-position: -3px -344px; */
        background-position: ${props => {
        switch (props.playMode) {
            case 0:
                return '-3px -344px'
            case 1:
                return '-66px -248px'
            case 2:
                return '-66px -344px'
        }
    }};
        /* &:hover{
            background-position: -33px -344px;
        } */
    }
    
    .play-list-combination{
        position: relative;
        width: 59px;
        height: 30px;
        margin-top: -2px;
        .tip{
            position: absolute;
            top: -51px;
            left: -65px;
            clear: both;
            width: 152px;
            height: 49px;
            background: url(${playbar1});
            background-position: 0 -287px;
            text-align: center;
            color: #fff;
            line-height: 37px;
        }
        .play-list{
            
            width: 59px;
            height: 30px;
            background-position: -42px -68px;
            padding-left: 35px;
            padding-top: 6px;
        
        &:hover{
            background-position: -42px -98px;
        }}
    }
    
    .tip-1{
        float: left;
    }
`;

