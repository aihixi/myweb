import React from 'react';
import { Card } from 'antd';
import './Part3.css'

import TGlogo from '../../assets/image/imgsvg/天津工业大学-logo.svg'


const Part3: React.FC = () => { 

    return (
      <div style={{width: '100%', height: '100%'}}>
        <div className='part3'> 
          <Card
            className='part3tcard1'
            hoverable
            variant="borderless"
          > 
            <div>
              <h1 style={{
                    textAlign: 'left', 
                    marginLeft: '32px',
                    color: 'white'
                }}>School
            </h1>
              <div className='educationimg'> 
                <img src={TGlogo} alt="TGlogo" style={{  width: '50%', height: '50%' }} />
              </div>
              <div className='educationontent'>
                <div>
                  <div>
                    <div style={{ fontSize: '32px', fontWeight: '500', margin: '10px' }}>
                      教育部、国家国防科技工业局和天津市共建的“双一流”重点建设高校
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card
            className='part3tcard2'
            hoverable
            variant="borderless"
          > 
            <div >
              {/* <div className='gradientlayer' /> */}
              <div style={{background: 'white'}}>
                <h1 style={{
                      textAlign: 'left', 
                      marginLeft: '32px',
                      backgroundClip: 'text',
                  }}>Education
                </h1>
                <div style={{ lineHeight: '1.6', padding: '0 8px' }}>
                  <p style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '32px', fontWeight: 'bold', textAlign: 'left' }}>
                      计算机科学与技术
                  </p>
                  <div style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '32px', textAlign: 'left' }}>
                      2023年9月————至今
                  </div>
                  <div style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '32px', textAlign: 'left' }}>
                      已学习课程:
                  </div>
                  <div style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '32px', textAlign: 'left' }}>
                      C语言，HTML基础开发实训，Python，数据库系统概论，数据结构，计算机组成原理，计算机网络，操作系统，算法设计与分析
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
};

export default Part3;