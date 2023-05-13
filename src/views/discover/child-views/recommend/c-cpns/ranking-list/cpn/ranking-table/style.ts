import styled from "styled-components";
import bgCoever from '@/assets/img/coverall2.png';
import background1 from '@/assets/img/background1.png';
import icon1 from '@/assets/img/icon1.png';

interface ITopThree {
    index: number,
    isMouseMoveIn: boolean
}

export const RankingTableWrapper = styled.div`
    width: 229.8px;
    float:left;
    .top{
        height: 120px;
        padding: 20px 0 0 19px;
    .cover{
        position: relative;
        float:left;
        width: 80px;
        height: 80px;
        img{
            width: 100%;
            height: 100%;
        }
        a.msk{
            position: absolute;
            top: 0;
            left: 0;
            display:block;
            width: 100%;
            height: 100%;
            background: url(${bgCoever});
            background-position: -145px -57px;
        }
    }
    .tit{
        float: left;
        width: 116px;
        margin: 6px 0 0 10px;
        a{
            &:hover{
                text-decoration: underline;
            }
            h3{
                font-weight: 700;
            }
        }
        .btn{
            a{
                display: block;
                float: left;
                width: 22px;
                height: 22px;
                background: url(${background1});
                margin-right: 10px;
                /* background-position:-267px -235px; */
            }
            .play{
                background-position:-267px -235px;
                &:hover{
                    background-position:-267px -205px;
                }
            }
            .add-collection{
                background-position:-300px -205px;
                &:hover{
                    background-position:-300px -235px;
                }
            }
        }
    }}  
    .more{
        clear: both;
        height: 32px;
        margin-right: 32px;
        text-align: right;
        line-height: 32px;
    }
`;

export const ListWrapper = styled.div<ITopThree>`
    height: 319px;
    margin-left: 20px;
    line-height: 32px;
    ol{
        li{            
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;

            :nth-child(-n+3) .no{
                color: #c10d0c;
            }

            .no{
                float: left;
                position: relative;
                width: 35px;
                height: 32px;
                text-align: center;
                color: #666;
                font-size: 16px;
        }
            .song-name{
                /* display: inline; */
                color: #000;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: normal;
                width: 80px;
                /* float: none; */
                &:hover{
                    /* display: block;
                    float: left; */
                    text-decoration: underline;
                }
            }
            .opener{
                display: none;
                float: right;
                width: 82px;
                margin-top: 7px;
                vertical-align: middle;
                a{
                    float: left;
                    width: 17px;
                    height: 17px;
                    margin-right: 7px;
                }
                
                .opener-play{
                    background: url(${background1});
                    background-position: -267px -268px;
                    &:hover{
                        background-position: -267px -288px;
                    }
                }
                .opener-add-toplay{
                    background: url(${icon1});
                    background-position: 0px -700px;
                    margin-top: 2px;
                    margin-bottom: 1px;
                    margin-right: 3px;
                    &:hover{
                        background-position: -22px -700px;;
                    }
                }
                .opener-collection{
                    background: url(${background1});
                    background-position: -297px -268px;
                    &:hover{
                        background-position: -297px -288px;
                    }
                }
            }
        }
    }
`;