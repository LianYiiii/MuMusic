import styled from 'styled-components';
import backgroundImg from '@/assets/img/background1.png'

export const HotWrapper = styled.div`
    display: flex;
    width: 1100px;
    border: 1px solid #ccc;
    margin: 0 auto;
    padding: 20px 0px;
    background: #fff;
`;

export const HotLeft = styled.div`
    width: 70%;
    padding: 20px 20px 40px;
`;

export const HotRight = styled.div`
    flex: 1;
`;

export const RightInfo = styled.div`
    height: 126px;
    background: url(${backgroundImg}) 0 0;
    background-size: 166%;
    p{
        width: 75%;
        margin: 0 auto;
        padding: 20px 20px;
        line-height: 18px;
    }

    a{
        display: block;
        width: 100px;
        height: 31px;
        line-height: 31px;
        background: url(${backgroundImg}) 0 -195px;
        text-align:center;
        color: #fff;
        margin: 0px auto;
        border-radius: 10px;
        text-shadow: 0 1px 0 #2a1a1a;
    }
`;

export const RightSinger = styled.div`
    padding: 20px 30px;

    h3{
        height: 23px;
        border-bottom: 1px gray solid;
        span{
            float: left;
            font-weight: 500;
            color: #333;
        }
        a{
            float: right;
        }
    }
`;

export const RightDj = styled.div`
    padding: 20px 30px;
    h3{
        height: 23px;
        border-bottom: 1px gray solid;
        span{
            float: left;
            font-weight: 500;
            color: #333;
        }
        a{
            float: right;
        }
    }
`;


export const Recommend = styled.div`
    ul{
        margin: 25px 0 0 -58px;
    }
`