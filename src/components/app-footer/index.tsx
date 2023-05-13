import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

import FooterBox from './cpns/footerbox';
import footerBoxData from '@/assets/data/footer-box.json'
import { Footer, MiddleFooter, FooterCopy, FooterWrapper } from '@/components/app-footer/style';
import TitleTabList from '../title-tab-list';
import footerTabJson from '@/assets/data/footer-tab.json'

interface IProps {
    children?: ReactNode,
}

const AppFooter: FC<IProps> = () => {
    return (
        <>
            <Footer>
                <MiddleFooter>
                    <FooterWrapper>
                        <ul>
                            {
                                footerBoxData.map(item => {
                                    const { boxName } = item;
                                    return (
                                        <>
                                            <FooterBox boxName={boxName} key={boxName} />
                                        </>
                                    )
                                })
                            }
                        </ul>
                        <FooterCopy>
                            <div className='title-list-tab'>
                                <TitleTabList tabData={footerTabJson} />
                            </div>
                            <p>廉正举报 不良信息举报邮箱: 51jubao@service.netease.com 客服热线：95163298</p>
                            <p>互联网宗教信息服务许可证：浙（2022）0000120 增值电信业务经营许可证：浙B2-20150198 粤B2-20090191-18  工业和信息化部备案管理系统网站</p>
                            <p>网易公司版权所有©1997-2023杭州乐读科技有限公司运营：浙网文[2021] 1186-054号  浙公网安备 33010902002564号</p>
                        </FooterCopy>
                    </FooterWrapper>
                </MiddleFooter>
                <div>AppFooter</div>
            </Footer>
        </>
    )
}

export default memo(AppFooter)