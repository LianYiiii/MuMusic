import styled from "styled-components";
import background from '@/assets/img/background1.png'
const Height = '33px';

export const TitleWrapper = styled.div`
    width: 100%;
    height: ${Height};
    /* background-color: #ccc; */
    border-bottom: 2px solid #C10D0C;
    line-height: ${Height};
    /* padding-left: 30px; */
    .title{
        float: left;
        .backgroundRedDot{
            float: left;
            width: 30px;
            height: 33px;
            background: url(${background}) -225px -156px;
        }
        .title-href{
            float: left;
            color: #333333;
            font-size: 20px;
        }
        .title-tab{ 
            float: left;
            display: flex;
            flex-direction: row;
            margin: 0px 0 0 20px;
        }
    }
    .more{
        float: right;
        i{
            display: inline-block;
            width: 12px;
            height: 12px;
            background: url(${background}) 0px -240px;
            margin-left: 4px;
            vertical-align: middle;
        }
    }
`; 