import Bookshelf from '../../bookshelf/BookShelf'
import React, { useState } from 'react';
import AnimatedSection from '../../myanimation/animatedsection/AnimatedSection'; // 导入新组件
import dogRunning from "../../../assets/Lottie/Moody Dog.json"; // 动画路径

const Part3Text: React.FC = () => {

    const [dogRunningState, setDogRunning] = useState(false);

    return (
      <div
        onMouseEnter={()=> {setDogRunning(true)}}
        onMouseLeave={()=> {setDogRunning(false)}}
      >
        <h1 style={{
              textAlign: 'left', 
              marginLeft: '32px',
              backgroundClip: 'text',
          }}>
          <AnimatedSection 
              animationState={dogRunningState}
              text="Education" 
              animationData={dogRunning} // 传入文本和动画数据
          />
          <hr style={{
              width: '90%',
              margin: '8px 0',
              borderTop: '1px solid black',
          }} />
        </h1>
        <div style={{ lineHeight: '1.6', padding: '0 8px' }}>
          <p style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '2rem', fontWeight: 'bold', textAlign: 'left' }}>
              就读于天津工业大学，主修计算机科学与技术。
          </p>
          <div style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '2rem', textAlign: 'left' }}>
              学习课程涵盖从语言基础到数据结构，算法设计，数据库概论和计算机组成原理等。
          </div>
          <p style={{ width: '100%', paddingLeft: '24px', marginBottom: '8px', fontSize: '2rem', fontWeight: 'bold', textAlign: 'left' }}>
            
          </p>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%', 

            paddingTop: '64px',
            marginBottom: '8px' 
          }}>
            <Bookshelf/>
          </div>
        </div>
      </div>
    )
};

export default Part3Text;