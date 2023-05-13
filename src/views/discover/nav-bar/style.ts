import styled from 'styled-components';

const lineHeight = '35px';

export const DiscoverNav = styled.div`
    width: 100%;
    height: ${lineHeight};
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
    box-sizing: border-box;
    .discover-nav{
        width: 1100px;
        height: ${lineHeight};
        margin: 0 auto;
    }
    ul {
        display: flex;
        list-style: none;
        padding-left: 200px;
        li{
            display: block;
            width: 110px;
            height: ${lineHeight};
        }
        a{
            display: block;
            height: ${lineHeight};
            text-decoration: none;
            color: green;
            text-align: center;
            /* background-color: orange; */
            em{
                display: inline-block;
                /* width: 70px; */
                height: 20px;
                margin: 7px 17px 0;
                padding: 0 13px;
                font-style: normal;
                border-radius: 20px;
                text-align: center;
                line-height: 20px;
                color: #fff;
                &:hover{
                    background-color: #9B0909;

                }
            }
        }
    }
`;