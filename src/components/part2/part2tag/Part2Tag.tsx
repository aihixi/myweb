import React from 'react';
import { Popover } from 'antd';
import './Part2Tag.css';

import BilibiliIcon from '../../../assets/image/imgsvg/bilibili/icons8-bilibili.svg';
import BilibiliColorIcon from '../../../assets/image/imgsvg/bilibili/icons8-bilibili(1).svg';
import BilibiliQR from '../../../assets/image/QRcode/bilibili.png';

import GithubIcon from '../../../assets/image/imgsvg/github/icons8-github(2).svg';
import GithubColorIcon from '../../../assets/image/imgsvg/github/icons8-github(3).svg';
import GithubQR from '../../../assets/image/QRcode/github.png';

import TiktokIcon from '../../../assets/image/imgsvg/tiktok/icons8-tiktok.svg';
import TiktokColorIcon from '../../../assets/image/imgsvg/tiktok/icons8-tiktok(2).svg';
import TiktokQR from '../../../assets/image/QRcode/tiktok.png';

import WechatIcon from '../../../assets/image/imgsvg/wechat/icons8-wechat.svg';
import WechatColorIcon from '../../../assets/image/imgsvg/wechat/icons8-wechat(1).svg';


const bilibilicontent = (
  <div>
    <h2>
        <img src={BilibiliQR} alt="Bilibili QR Code" style={{ width: '200px', height: '200px' }} />
    </h2>
  </div>
);

const wechatcontent = (
  <div>
    <h2>
        <img src={BilibiliQR} alt="Wechat QR Code" style={{ width: '200px', height: '200px' }} />
    </h2>
  </div>
);

const githubcontent = (
  <div>
    <h2>
        <img src={GithubQR} alt="Github QR Code" style={{ width: '200px', height: '200px' }} />
    </h2>
  </div>
);

const tiktokcontent = (
  <div>
    <h2>
        <img src={TiktokQR} alt="Tiktok QR Code" style={{ width: '200px', height: '200px' }} />
    </h2>
  </div>
);

const Part2Tag: React.FC = () => {
    return (
        <div className='part2tag'>
                <Popover className='part2tagstyle' placement="bottom" content={bilibilicontent} title="Title">
                    <img className='default' src={BilibiliIcon} alt="Bilibili" />
                    <img className='hovercolor' src={BilibiliColorIcon} alt="Bilibili Color" />
                </Popover >
                <Popover className='part2tagstyle' placement="bottom" content={githubcontent} title="Title">
                    <img className='default' src={GithubIcon} alt="Github" />
                    <img className='hovercolor' src={GithubColorIcon} alt="Github Color" />
                </Popover>
                <Popover className='part2tagstyle' placement="bottom" content={tiktokcontent} title="Title">
                    <img className='default' src={TiktokIcon} alt="Tiktok" />
                    <img className='hovercolor' src={TiktokColorIcon} alt="Tiktok Color" />
                </Popover>
                <Popover className='part2tagstyle' placement="bottom" content={wechatcontent} title="Title">
                    <img className='default' src={WechatIcon} alt="Wechat" />
                    <img className='hovercolor' src={WechatColorIcon} alt="Wechat Color" />
                </Popover>
            </div>
    );
};

export default Part2Tag;