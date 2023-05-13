import styled from 'styled-components';
import topbar from '@/assets/img/topbar.png'

const lineHeight = '80px';


export const HeaderWrapper = styled.div`
    background-color: #333;
    width: 100%;
    box-sizing: border-box;
    .content {
        height: ${lineHeight};
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        font-weight: 700;
        // 混入
        ${(props) => props.theme.mixin.wrapv1};
    }
`

export const LeftHeader = styled.div`
    display: flex;
    /* background-color: red; */
    align-content:center;
    flex: 2;
    .logoBox{
        width: 200px;
        a{
            display: block;
            width: 200px;
            height: ${lineHeight};
            line-height: ${lineHeight};
            text-decoration: none;
            font-size: 28px;
            color: #ccc;
            .wyy-logo{
                width: 30px;
                height: 30px;
                /* background-color: orange; */
            }
            span{
                display: inline-block;
                margin-left: 10px;
                font-weight: 400;
                font-family: Arial, Helvetica, sans-serif;
            }
        }
    }
    .title-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        a{
            display: block;
            height: ${lineHeight};
            line-height: ${lineHeight};
            padding: 20px 15px;
            line-height: 40px;
            text-decoration: none;
            color: #ccc;
        }
        a: hover{
            background-color: black;
        }
        .hot{
            position: absolute;
            top: 20px;
            right: -10px;
            width: 27px;
            height: 16px;
            background: url(${topbar}) -190px 0;
            /* display: block;
            background-color: red;
            color: white;
            border-radius: 20px; */
        }
    }
`;

export const RightHeader = styled.div`
    display: flex;
    flex:1;
    flex-direction: row;
    justify-content: center;
    height: ${lineHeight};  
    /* background-color: green; */
    .searchBox{
        display: block;
        width: 150px;
        line-height: ${lineHeight};
        .search-ant{
            border-radius: 30px;
            font-size: 12px;
        }
    }
    .btn-search {
        line-height: ${lineHeight};
        margin-left: 10px;
        .btn{
            border-radius: 30px;
            border: 1px solid #787878;
            background-color: #333;
            font-size: 13px;
            font-weight: 400;
        }
        .loginBtn{
            color: #787878;
            &:hover{
                color: #fff;
            }
        }
    }
`;

export const Divider = styled.div`
    width: 100%;
    height: 10px;
    background-color: red;
`;