import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { BoxWrapper, BoxItem } from './style';

interface IProps {
    children?: ReactNode,
    boxName: string
    // beforeImg: string,
    // afterImg: string,
}

// interface ConfigType {
//     backgroundPosition: string,
//     color: string
// }

const FooterBox: FC<IProps> = (props) => {
    const { boxName } = props;

    return (
        <>
            <BoxWrapper >
                <BoxItem>
                    {
                        boxName === '音乐开放平台' && <a href="/" className='footerBoxItem open-plateform' title={boxName} target='_blank'> </a>
                    }
                    {
                        boxName === '云村交易所' && <a href="/" className='footerBoxItem trader' target='_blank' title={boxName}> </a>
                    }
                    {
                        boxName === 'Amped Studio' && <a href="/" className='footerBoxItem asudio' target='_blank' title={boxName}> </a>
                    }
                    {
                        boxName === '用户认证' && <a href="/" className='footerBoxItem userreco' target='_blank' title={boxName}> </a>
                    }
                    {
                        boxName === '音乐交易平台' && <a href="/" className='footerBoxItem music-trade' target='_blank' title={boxName}> </a>
                    }
                    {
                        boxName === '赞赏' && <a href="/" className='footerBoxItem appreciation' title={boxName} target='_blank'> </a>
                    }
                    {
                        boxName === '视频激励' && <a href="/" className='footerBoxItem video-motivation' title={boxName} target='_blank'> </a>
                    }
                    <span>{boxName}</span>
                </BoxItem>
            </BoxWrapper >
        </>
    )
}

export default memo(FooterBox)