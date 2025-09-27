import React from 'react';
import './Part6.css';
import Part2Tag from '../../components/contact/Contact';
import CommendCard from '../../components/commentcard/CommendCard';

import { IoPersonCircleSharp } from "react-icons/io5";
import { LuMessageSquareCode } from "react-icons/lu";
import { Button } from 'antd';

const Part6: React.FC = () => { 


  return (
    <div style={{height: '100%' }}>
      <div className='part6'>
        <div style={{width: '100vw'}}><h1>Contact Me</h1></div>
        <div className='part6body'>
          <div className='part6bodyleft'>
            <div className='textinput'>
              <h2>Do a comment</h2>
              <div style={{display: 'flex', alignItems: 'center', columnGap: '16px', background: 'transparent'}}>
                <IoPersonCircleSharp size={32} />
                <input type="text" placeholder='Name' style={{width: '100%', height: '24px', background: 'transparent', border: 'none', outline: 'none'}} />
              </div>
              <div style={{display: 'flex', alignItems: 'center', columnGap: '16px', background: 'transparent'}}>
                <LuMessageSquareCode size={32} />
                <input type="text" placeholder='Message' style={{width: '100%', height: '24px', background: 'transparent', border: 'none', outline: 'none'}} />
              </div>
              <div>
                <Button type="primary" className='button'>Send</Button>
              </div>
              <hr style={{width: '100%'}} />
            </div>
            <div className='einfo'>
              <div>E-mail</div>
              <div>12345678@mail.com</div>
            </div>
            <div className='econtact'>
              <Part2Tag />
            </div>
          </div>
          <div className='part6bodyright'>
            <div>
              <h2>Commends</h2>
            </div>
            <div className='commends'>
              <CommendCard />
              <CommendCard />
              <CommendCard />
              <CommendCard />
              <CommendCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part6;