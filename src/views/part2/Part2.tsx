import React from 'react';

import  Mypc  from "../../components/myanimation/myPc/Mypc";
import Part2Text from '../../components/mytext/part2text/Part2Text';
import ScrollFadeIn from '../../components/myanimation/ScrollFadeIn/ScrollFadeIn';

import './Part2.css';

const Part2: React.FC = () => {

  return (
    <div style={{height: '100%', paddingTop: '64px'}}>
      <div className="part2">
        <ScrollFadeIn direction='left'>
          <div
            className="part2content"
          >
            <Part2Text />
          </div>
        </ScrollFadeIn>
        <Mypc />
      </div>
    </div>
  );
};

export default Part2;
