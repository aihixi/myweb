import React from 'react';
import { Anchor } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import './myAnchor.css';

import Part1 from '../part1/Part1';
import Part2 from '../part2/Part2';
import Part3 from '../part3/Part3';
import Part4 from '../part4/Part4';
import Part5 from '../part5/Part5';

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
            {
              key: 'part-4',
              href: '#part-4',
              title: 'Part 4',
            },
            {
              key: 'part-5',
              href: '#part-5',
              title: 'Part 5',
            },
          ]}
        />
      </div>

      {/* 页面内容 */}
      <div>
        <div id="part-1" className="section section-red">
          <div style={{height: '10%'}}/>
          <Part1 />
        </div>
        <div id="part-2" className="section section-blue">
          <div style={{height: '10%'}}/>
          <Part2 />
        </div>
        <div id="part-3" className="section section-green">
          <div style={{height: '10%'}}/>
          <Part3 />
        </div>
        <div id="part-4" className="section section-yellow">
          <div style={{height: '10%'}}/>
          <Part4 />
        </div>
        <div id="part-5" className="section section-yellow"> 
          <div style={{height: '10%'}}/>
          <Part5 />
        </div>
      </div>
    </>
  );
};

export default MyAnchor;
