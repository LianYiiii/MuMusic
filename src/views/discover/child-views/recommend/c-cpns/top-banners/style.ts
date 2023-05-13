import styled from 'styled-components';
import leftArow from '@/assets/img/leftType.png';
import rightArow from '@/assets/img/rightType.png';
import download_client from '@/assets/img/download_client.png';

interface IBackground {
    backgroundImg: string
}

const Height = '300px';

export const BannerBgWrapper = styled.div``;

export const BannerWrapper = styled.div<IBackground>`
    position: relative;
    width: 1100px;
    height: ${Height};
    margin: 0 auto;
    background: ${props => { return props.backgroundImg }};
`;

export const BannerLeft = styled.div`
    width: 70%;
    height: ${Height};
    float: left;
    
    .item img {
        width: 100%;
        height: ${Height};
    }
`;

export const BannerRight = styled.div`
    float: right;
    width: 30%;
    height: ${Height};
    background: no-repeat url(${download_client}) 0px -50px;
    background-size: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    a{
        display: inline-block;
        width: 100%;
        height: 85%;
    }
    .pc-about{
        display: inline-block;
        width: 100%;
        text-align: center;
        margin: 15px auto;
        color: #ccc;
    }
`;

export const BannerControl = styled.div`
    &:hover{
        background: #ccc;
    } 
`;

export const LeftControl = styled.div`
    position: absolute;
    left: -70px;
    top: 50%;  
    transform: translateY(-50%);
    width: 50px;
    height: 120px;
    background: no-repeat 50%/100% url(${leftArow});
    &:hover{
        background-color: #cccccc77;
        cursor:pointer;
    } 
`;

export const RightControl = styled.div`
    position: absolute;
    right: -70px;
    top: 50%;  
    transform: translateY(-50%);
    width: 50px;
    height: 120px;
    background: no-repeat 50%/100% url(${rightArow});
    &:hover{
        background-color: #cccccc77;
        cursor:pointer;
    } 
`;
