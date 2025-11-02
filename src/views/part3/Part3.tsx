import React from 'react';
import './Part3.css'

import TGlogo from '../../assets/image/imgsvg/天津工业大学-logo.svg'

import Part3Text from '../../components/mytext/part3text/Part3Text';
import ScrollFadeIn from '../../components/myanimation/ScrollFadeIn/ScrollFadeIn';

const Part3: React.FC = () => { 

    return (
      <div style={{height: '100%'}}>
        <div className='part3'> 
          <div
            className='part3tcard1' 
          > 
            <div className='educationimg'> 
              <img src={TGlogo} alt="TGlogo" className='imgsize' />
            </div>
            <div className='educationontent'>
              <div style={{ fontSize: '2rem', fontWeight: '500', margin: '10px' }}>
                教育部、国家国防科技工业局和天津市共建的“双一流”重点建设高校
              </div>
            </div>
          </div>
          <ScrollFadeIn direction='right'> 
            <Part3Text />
          </ScrollFadeIn>
        </div>
      </div>
    );
};

export default Part3;