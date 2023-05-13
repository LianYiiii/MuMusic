import styled from "styled-components";

const Height = '40px';

export const DjItemWrapper = styled.li`
    height: ${Height};
    margin-top: 15px;
    a{
        height: ${Height};
    }
`;


export const ItemHeader = styled.div`
    float: left;
    width: 40px;
    height: ${Height};
    img{
        width: 40px;
        height: ${Height};
    }
`;

export const ItemIfo = styled.div`
    float: left;
    padding-left: 14px;
    h4{
        padding-top: 3px;
        font-weight: 700;
        a:hover{
            text-decoration: underline;
        }
    }
`;