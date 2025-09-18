import React from 'react';
import { Card } from 'antd';
import './Part4.css';
import Culatorpng from '../../assets/image/屏幕截图 2025-09-17 191134.png'
import Profilepng from '../../assets/image/屏幕截图 2025-09-17 190045.png'


const Part4: React.FC = () => { 

  const { Meta } = Card;

    return (
      <div>
        <div className='part4'>
          <div> 
            <div>
              <h1>What I Have Done</h1>
            </div>
            <div className='projects'>
              <Card
                hoverable
                cover={<img alt="Culator" src={Culatorpng} />}
                className='part4card1'
                onClick={() => {window.open('https://github.com/aihixi/Standardcalculator2')}}
              >
                <Meta title="Standardcalculator2" description="一款功能简单的计算器" />
              </Card>
              <Card
                hoverable
                cover={<img alt="Profile" src={Profilepng} />}
                className='part4card1'
                onClick={() => {window.open('https://github.com/https://github.com/aihixi/myweb/Standardcalculator2')}}
              >
                <Meta title="Profileweb" description="个人网站" />
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Part4;