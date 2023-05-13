import styled from 'styled-components';
import iconall1 from '@/assets/img/iconall1.png'
import maskBg from '@/assets/img/coverall2.png'

export const SongList = styled.li`
    width: 195px;
    height: 234px;
    /* border: 1px solid orange; */
    display: inline-block;
    padding-left: 64px;
    overflow: hidden;
    .describe{
        font-size: 14px;
        margin: 8px 0 3px;
    }
`;

export const SongModule = styled.div`
    position: relative;
    width: 140px;
    height: 140px;
    margin: 0 auto;
    img{
        width: 100%;
        height: 100%;
    }
    .mask{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(${maskBg}) 0px 0px;
    }
    .bottom{
        position: absolute;
        bottom: 0;
        display: flex;
        width: 140px;
        height: 20px;
        background: url(${maskBg}) 0 -537px;
        a{
            /* flex: 1; */
            color: #ccc;
            line-height: 20px;
        }
        .earphone{
            width: 14px;
            height: 11px;
            background: url(${iconall1}) 0px -24px;
            margin: 5px 7px 4px 8px;
        }
        .viewed {
            display: block;
            width: 16px;
            height: 17px;
            margin: 1px auto;
            background: url(${iconall1}) 0px 0px;
            &:hover{
                background: url(${iconall1}) 0px -60px;
            }
        }
    }
`;

export const SongNameModule = styled.div`
    .song-name:hover{
        text-decoration: underline;
    }
`