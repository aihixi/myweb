import React from 'react';
import { Card } from 'antd';
import './Part3.css'

import TGlogo from '../../assets/image/imgsvg/天津工业大学-logo.svg'

import Part3Text from '../../components/mytext/part3text/Part3Text';
import ScrollFadeIn from '../../components/myanimation/ScrollFadeIn/ScrollFadeIn';

const Part3: React.FC = () => { 

    return (
      <div style={{height: '100%', paddingTop: '64px'}}>
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
          <ScrollFadeIn direction='right'> 
            <Part3Text />
          </ScrollFadeIn>
        </div>
      </div>
    );
};

export default Part3;