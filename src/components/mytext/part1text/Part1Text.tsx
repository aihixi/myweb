import React, { useState } from 'react';
import AnimatedSection from '../../myanimation/animatedsection/AnimatedSection'; // 导入新组件
import hedgehogRunning from "../../../assets/Lottie/Walking Hedgehog.json"; // 动画路径

const Part1Text: React.FC = () => {

    const [hedgehogRunningState, setHedgehogRunning] = useState(false);

    return (
      <div 
        onMouseEnter={()=> {setHedgehogRunning(true)}}
        onMouseLeave={()=> {setHedgehogRunning(false)}}
    >
        <h1 style={{
                textAlign: 'left', 
                marginLeft: '32px',
                marginRight: '32px',
            }}>
            <AnimatedSection 
                animationState={hedgehogRunningState}
                text="Introduce" 
                animationData={hedgehogRunning} // 传入文本和动画数据
            />
            <hr style={{
                width: '95%',
                margin: '8px 0',
                borderTop: '1px solid black',
            }} />
        </h1>
        <ul style={{ lineHeight: '1.6', padding: '0 8px', listStyle: 'none' }}>
            <li style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '2rem', fontWeight: 'bold', textAlign: 'left' }}>
                你好，我是一名大三本科生，热爱编程，喜欢探索新的技术和学习新的技能。
            </li>
            <li style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '2rem', textAlign: 'left' }}>
                目前学习于前端开发，了解 React框架，对Vue3也有一定认识，以及 Vite 构建工具。
            </li>
            <li style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '2rem', textAlign: 'left' }}>
                打算在前段开发上继续深入，学习更多的框架和工具，提升架构能力。
            </li>
        </ul>
      </div>
    );
};

export default Part1Text;
