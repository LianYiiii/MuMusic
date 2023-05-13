import styled from "styled-components";

export const SingerItemWrapper = styled.li`
    height: 70px;
    background: #fafafa;
    border:1px solid #ccc;
    margin-top: 16px;
    a{
        display: block;
        width: 100%;
        height: 70px;
    }
`;


export const ItemHeader = styled.div`
    float: left;
    width: 70px;
    height: 70px;
    img{
        width: 70px;
        height: 70px;
    }
`;

export const ItemIfo = styled.div`
    float: left;
    padding-left: 20px;
    /* cursor:point; */
    h4{
        padding-top: 18px;
        font-weight: 700;
    }
    p{
        padding-top: 5px;
    }
`;