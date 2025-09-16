import React from 'react';
import { Anchor } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import './myAnchor.css';

import Part1 from '../part1/Part1';
import Part2 from '../part2/Part2';

const MyAnchor: React.FC = () => {
  return (
    <>
      {/* 顶部导航条 */}
      <div className="navbar">
        {/* 左边图标，可以换成 Logo */}
        <div className="logo">
          <HomeOutlined style={{ fontSize: 32, color: 'white' }} />
        </div>

        {/* 右边横向导航 */}
        <Anchor
          // affix={false}
          direction="horizontal"
          style={{backgroundColor: 'transparent'}}
          items={[
            {
              key: 'part-1',
              href: '#part-1',
              title: 'Part 1',
            },
            {
              key: 'part-2',
              href: '#part-2',
              title: 'Part 2',
            },
            {
              key: 'part-3',
              href: '#part-3',
              title: 'Part 3',
            },
          ]}
        />
      </div>

      {/* 页面内容 */}
      <div>
        <div id="part-1" className="section section-red">
          <div className="spacer" />
          <div style={{height: '5%'}}/>
          <Part1 />
        </div>
        <div id="part-2" className="section section-blue">
          <div className="spacer" />
          <div style={{height: '5%'}}/>
          <Part2 />
        </div>
        <div id="part-3" className="section section-green">
          <div className="spacer" />
          <div style={{height: '5%'}}/>
        </div>
      </div>
    </>
  );
};

export default MyAnchor;
