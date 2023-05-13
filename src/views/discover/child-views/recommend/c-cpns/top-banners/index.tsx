import React, { memo, useState, useEffect, useRef, MutableRefObject } from 'react';
import type { FC, ReactNode } from 'react'
import { BannerControl, LeftControl, RightControl, BannerLeft, BannerRight, BannerWrapper, BannerBgWrapper } from './style';
import hyRequest from '@/service';

import { Carousel } from 'antd';

interface IProps {
    children?: ReactNode,
}

interface BannersDataType {
    imageUrl: string;
    targetId: number;
    adid?: any;
    targetType: number;
    titleColor: string;
    typeTitle: string;
    url?: any;
    exclusive: boolean;
    monitorImpress?: any;
    monitorClick?: any;
    monitorType?: any;
    monitorImpressList?: any;
    monitorClickList?: any;
    monitorBlackList?: any;
    extMonitor?: any;
    extMonitorInfo?: any;
    adSource?: any;
    adLocation?: any;
    adDispatchJson?: any;
    encodeId: string;
    program?: any;
    event?: any;
    video?: any;
    song?: any;
    scm: string;
    bannerBizType: string;
}

interface RequestBannersDataType {
    code: number,
    banners: BannersDataType[]
}

interface dotsDataType {
    className?: string
}

const TopBanner: FC<IProps> = () => {
    const [bannersImg, setBannersImg] = useState<BannersDataType[]>([]);
    const bannerImgEl: MutableRefObject<any> = useRef(null);
    // const bannerBg = useRef(null);

    useEffect(() => {
        async function requestBanners() {
            await hyRequest.get<RequestBannersDataType>({ url: '/banner' }).then(res => {
                // console.log(res);
                // console.log(res.banners);
                setBannersImg(res.banners)
            }).catch(err => {
                console.log(err);

            })
        }

        requestBanners();
    }, []);

    const leftControl: MutableRefObject<any> = useRef(null);
    const rightControl: MutableRefObject<any> = useRef(null);
    const cControlRef: MutableRefObject<any> = useRef();

    const onLeftBtnClick = () => {
        if (cControlRef.current) {
            cControlRef.current?.prev()
        }
    }

    const onRightBtnClick = () => {
        console.log(bannerImgEl.current);

        if (cControlRef.current) {
            cControlRef.current?.next();
        }
    }

    const bannerImgBeforeChange = () => {
        console.log(bannerImgEl.current);

    };

    const bannerImgAferChange = () => {

    };

    let bg = ''

    return (
        <BannerBgWrapper>
            <BannerWrapper backgroundImg={bg}>
                <BannerLeft>
                    <LeftControl ref={leftControl} onClick={onLeftBtnClick} />
                    <RightControl ref={rightControl} onClick={onRightBtnClick} />
                    <Carousel
                        speed={5000}
                        dotPosition='bottom'
                        ref={cControlRef}
                    // afterChange={(3) => bannerImgAferChange}
                    // beforeChange={() => bannerImgBeforeChange}
                    // autoplay
                    // dotsClass='dotsclass'
                    >
                        {
                            bannersImg.map(item => {
                                const { targetId, typeTitle, imageUrl } = item;
                                bg = imageUrl;
                                console.log(bg);

                                return (
                                    <>
                                        <div key={targetId} className="item">
                                            <img src={imageUrl} alt={typeTitle} ref={bannerImgEl} key={targetId}></img>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight>
                    <a href='/download' title='下载客户端'> </a>
                    <span className='pc-about'>PC 安卓 iPhone WP iPad Mac 六大客户端</span>
                </BannerRight>
                <BannerControl></BannerControl>
            </BannerWrapper >
            {/* <div>TopBanner</div> */}
        </BannerBgWrapper>
    )
}

export default memo(TopBanner)