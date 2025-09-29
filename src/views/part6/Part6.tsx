import React from 'react';
import './Part6.css';
import Part2Tag from '../../components/contact/Contact';
import CommendCard from '../../components/commentcard/CommendCard';
import ScrollFadeIn from '../../components/myanimation/ScrollFadeIn/ScrollFadeIn';

import { IoPersonCircleSharp } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { Button } from 'antd';

const Part6: React.FC = () => { 

  return (
    <div style={{height: '100%' }}>
      <div className='part6'>
        <div style={{width: '100vw'}}><h1>Contact Me</h1></div>
        <div className='part6body'>
          <ScrollFadeIn direction='left'> 
            <div className='part6bodyleft'>
              <div className='textinput'>
                <h2 style={{fontSize: '24px'}}>Do a comment</h2>
                <div style={{display: 'flex', columnGap: '16px', background: 'transparent'}}>
                  <IoPersonCircleSharp size={32} />
                  <input placeholder='Name' style={{width: '100%', height: '32px', background: 'transparent', border: 'none', outline: 'none', fontSize: '16px', fontFamily: 'inherit',}} />
                </div>
                <div style={{display: 'flex', columnGap: '16px', background: 'transparent'}}>
                  <TiDocumentText size={32} />
                  <textarea
                    placeholder="Message"
                    style={{
                      width: '100%',
                      height: '128px',
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      resize: 'none',   // 禁止拖拽缩放
                      fontSize: '16px', // 改为使用em单位以匹配全局字体设置
                      fontFamily: 'inherit', // 继承字体族
                      paddingTop: '8px',
                      paddingBottom: '8px'
                    }}
                  />
                </div>
                <div>
                  <Button type="primary" className='sendbutton'>Send</Button>
                </div>
                <hr style={{width: '100%'}} />
              </div>
              <div className='econtact'>
                <Part2Tag />
              </div>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn direction='right'> 
            <div className='part6bodyright'>
              <div>
                <h2 style={{fontSize: '24px'}}>Commends</h2>
              </div>
              <div className='commends'>
                <CommendCard />
                <CommendCard />
                <CommendCard />
                <CommendCard />
                <CommendCard />
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </div>
  );
};

export default Part6;