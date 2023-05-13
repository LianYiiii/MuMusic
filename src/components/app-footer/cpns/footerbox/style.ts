import styled from "styled-components";
import footerItem from '@/assets/img/foot_enter_new2.png';

const background = [
    { bgName: '音乐开放平台', position: '0px 0px', beforeOrAfter: 'before' },
    { bgName: '音乐开放平台', position: 'px px', beforeOrAfter: 'after' },
    { bgName: '云村交易所', position: 'px px', beforeOrAfter: 'before' },
    { bgName: '云村交易所', position: 'px px', beforeOrAfter: 'after' },
    { bgName: 'Amped Studio', position: 'px px', beforeOrAfter: 'before' },
    { bgName: 'Amped Studio', position: 'px px', beforeOrAfter: 'after' },
    { bgName: '用户认证', position: 'px px', beforeOrAfter: 'before' },
    { bgName: '用户认证', position: 'px px', beforeOrAfter: 'after' },
    { bgName: '音乐交易平台', position: 'px px', beforeOrAfter: 'before' },
    { bgName: '音乐交易平台', position: 'px px', beforeOrAfter: 'after' },
    { bgName: '赞赏', position: 'px px', beforeOrAfter: 'before' },
    { bgName: '赞赏', position: 'px px', beforeOrAfter: 'after' },
    { bgName: '视频激励', position: 'px px', beforeOrAfter: 'before' },
    { bgName: '视频激励', position: 'px px', beforeOrAfter: 'after' },
]

export const BoxWrapper = styled.li`
    margin-left: 80px;
`;

export const BoxItem = styled.div`
    width: 45px;
    height: 45px;
    margin: 0 auto;
    .footerBoxItem{
        display: inline-block;
        width: 45px;
        height: 45px;
        background: url(${footerItem});
        background-size: 198px 198px;
        background-position:-170px -5px;

    }


    .open-plateform {
        background-position:-150px 0px;
        &:hover{
            background-position: 0px -100px;
        }
    }

    .trader {
        background-position: 0px -150px;
        &:hover{
            background-position: -50px -100px;
        }
    }

    .asudio {
        background-position: 0px -50px;
        &:hover{
            background-position: -50px 0px;
        }
    }

    .userreco {
        background-position:-50px -50px;
        &:hover{
            background-position: -100px 0px;
        }
    }

    .music-trade {
        background-position:-100px -100px;
        &:hover{
            background-position: 0px 0px;
        }
    }

    .appreciation {
        background-position:-150px -100px;
        &:hover{
            background-position: -50px -100px;
        }
    }

    .video-motivation {
        background-position:-150px -50px;
        &:hover{
            background-position: -100px -50px;
        }
    }

    span{
        display: inline-block;
        width: 100px;
        height: 16px;
        margin-top: 7px;
        margin-left: -27.5px;
        font-size: 12px;
        text-align: center;
        color: rgba(0,0,0, 0.5);
    }

`