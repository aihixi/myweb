import React, { useEffect } from 'react';
import './Part5.css';

import VanillaTilt from 'vanilla-tilt'


//{
//    reverse:                false,  // 是否反转倾斜方向
//    max:                    35,     // 最大倾斜角度（单位：度）
//    startX:                 0,      // X 轴初始倾斜角度（单位：度）
//    startY:                 0,      // Y 轴初始倾斜角度（单位：度）
//    perspective:            1000,   // 透视深度，数值越小透视越强烈
//    scale:                  1,      // 缩放倍数，2 = 200%，1.5 = 150%
//    speed:                  300,    // 鼠标进入/离开时的过渡速度（毫秒）
//    transition:             true,   // 是否启用进入/离开时的过渡动画
//    axis:                   null,   // 限制启用的轴，可选 "x" 或 "y"
//    reset:                  true,   // 鼠标移出时是否重置为初始角度
//    "reset-to-start":       true,   // 移出时重置到 [0,0]（默认）还是 [startX, startY]
//    easing:                 "cubic-bezier(.03,.98,.52,.99)",    // 进入/离开时的缓动函数
//    glare:                  false,  // 是否启用“眩光”效果
//    "max-glare":            1,      // 最大眩光透明度（1 = 100%，0.5 = 50%）
//    "glare-prerender":      false,  // 是否需要自己预先在元素里添加眩光 DOM（默认 false = 自动生成）
//    "mouse-event-element":  null,   // 鼠标事件监听的元素（可以是 CSS 选择器或 DOM 元素）
//    gyroscope:              true,   // 是否启用设备陀螺仪（移动端）
//    gyroscopeMinAngleX:     -45,    // 设备在 X 轴的最小角度，对应元素的最左边界
//    gyroscopeMaxAngleX:     45,     // 设备在 X 轴的最大角度，对应元素的最右边界
//    gyroscopeMinAngleY:     -45,    // 设备在 Y 轴的最小角度，对应元素的最上边界
//    gyroscopeMaxAngleY:     45,     // 设备在 Y 轴的最大角度，对应元素的最下边界
//}


const Part5: React.FC = () => { 

  useEffect(() => {
    const elements = document.querySelectorAll('.part5allcard');
    const htmlElements = Array.from(elements) as HTMLElement[];
    VanillaTilt.init(htmlElements, {
      max: 16,
      speed: 400,
      scale: 1.1,
      glare: true,  // 测试时开个眩光，方便确认是否生效
      "max-glare": 0.5,
    });
  }, []);

  return (
    <div style={{ height: '100%', paddingTop: '64px' }}>
  <div className="part5">
    <div style={{ width: '100vw' }}>
      <h1>About The Web</h1>
    </div>
    <div className="cardgroup">
      {/* 第一行 */}
      <div className="part5firstrow">
        <div className="first1 part5allcard">
          Profile Web
        </div>
        <div className="first2 part5allcard">
          React + Vite + TypeScript
        </div>
        <div className="first3 part5allcard">
          Ant Design，Framer Motion，Vanilla-tilt
        </div>
      </div>

      {/* 第二行 */}
      <div className="part5secondrow">
        <div className="second1">
          <div className="second1card part5allcard">
            myweb/
            ├── src/                
            │   ├── components/     
            │   │   ├── contact/    
            │   │   ├── myanimation/
            │   │   ├── mytext/     
            │   │   └── newanchor/  
            │   ├── views/          
            │   │   ├── part1/      
            │   │   ├── part2/      
            │   │   ├── part3/      
            │   │   ├── part4/      
            │   │   ├── part5/      
            │   │   └── part6/      
            │   ├── assets/         
            │   ├── App.tsx         
            │   ├── main.tsx        
            │   └── ...
            ├── package.json        
            └── ...
          </div>
        </div>
        <div className="second2">
          <div className="second2card part5allcard">
          </div>
          <div className="second2card part5allcard">
          </div>
        </div>
        <div className="second3">
          <div className="second3card part5allcard"></div>
          <div className="second3card part5allcard"></div>
          <div className="second3card part5allcard"></div>
          <div className="second3card part5allcard"></div>
        </div>
        <div className="second4">
          <div className="second4one">
            <div className="second4onecard part5allcard"></div>
            <div className="second4onecard part5allcard"></div>
          </div>
          <div className="second4two">
            <div className="second4twocard part5allcard"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Part5;