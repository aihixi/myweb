import React, { useEffect } from 'react';
import Lottie from "lottie-react";
import './Part5.css';

import VanillaTilt from 'vanilla-tilt'
import Confusedmanwork from '../../assets/Lottie/Confused man at work.json'


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
    <div style={{ height: '100%' }}>
      <div className="part5">
        <div style={{ width: '100vw' }}>
          <h1>About The Web</h1>
        </div>
        <div className="cardgroup">
          {/* 第一行 */}
          <div className="part5firstrow">
            <div className="first1 part5allcard">
              <div style={{fontSize: '1.6rem', marginBottom: '8px'}}>技术栈</div>
              <div style={{fontSize: '1rem', fontWeight: 'normal', lineHeight: '1.4', opacity: '0.9'}}>React19 + TypeScript + Vite</div>
            </div>
            <div className="first2 part5allcard">
              <div style={{fontSize: '1.6rem', marginBottom: '8px'}}>核心特性</div>
              <div style={{fontSize: '1rem', fontWeight: 'normal', lineHeight: '1.4', opacity: '0.9'}}>响应式设计、动画交互、组件化架构</div>
            </div>
            <div className="first3 part5allcard">
              <div style={{fontSize: '1.6rem', marginBottom: '8px'}}>项目亮点</div>
              <div style={{fontSize: '1rem', fontWeight: 'normal', lineHeight: '1.4', opacity: '0.9'}}>现代化构建、高性能渲染、良好用户体验</div>
            </div>
          </div>
      
          {/* 第二行 */}
          <div className="part5secondrow">
            <div className="second1">
              <div className="second1card part5allcard">
                <div style={{fontSize: '1.8rem', marginBottom: '20px', marginLeft: '20px', letterSpacing: '1px'}}>技术细节</div>   
                <div style={{fontSize: '1.1rem', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>• React 19 Hooks 状态管理</div>   
                <div style={{fontSize: '1.1rem', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>• TypeScript 类型安全</div>                     
                <div style={{fontSize: '1.1rem', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>• Vite 构建工具优化</div>
                <div style={{fontSize: '1.1rem', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>• VanillaTilt 3D交互效果</div>
                <div style={{fontSize: '1.1rem', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>• Ant Design UI组件库</div>
                <div style={{fontSize: '1.1rem', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>• Framer Motion 动画库</div>
                <div style={{fontSize: '1.1rem', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>• React Icons 图标系统</div>
                <div style={{fontSize: '1.1rem', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>• Responsive 响应式布局</div>
              </div>
            </div>
            <div className="second2">
              <div
                className="lottliecard"
              >
                <Lottie
                  animationData={Confusedmanwork}
                  loop={true}
                  className="lottie"
                />
              </div>
              <div className="second2card part5allcard">
                <div style={{fontSize: '1.6rem', marginBottom: '8px'}}>性能优化</div>
                <div style={{fontSize: '1rem', fontWeight: 'normal', lineHeight: '1.4', opacity: '0.9'}}>懒加载、代码分割、资源压缩</div>
              </div>
            </div>
            <div className="second3">
              <div
                className="second3card part5allcard"
              >
                <div style={{fontSize: '1.4rem', marginBottom: '6px', letterSpacing: '1px'}}>动画实现</div>
                <div style={{fontSize: '0.95rem', fontWeight: 'normal', lineHeight: '1.3', opacity: '0.9'}}>VanillaTilt 3D效果、滚动触发动画、粒子效果</div>
              </div>
              <div className="second3card part5allcard">
                <div style={{fontSize: '1.4rem', marginBottom: '6px', letterSpacing: '1px'}}>响应式设计</div>
                <div style={{fontSize: '0.95rem', fontWeight: 'normal', lineHeight: '1.3', opacity: '0.9'}}>适配移动端、平板和桌面端</div>
              </div>
              <div className="second3card part5allcard">
                <div style={{fontSize: '1.4rem', marginBottom: '6px', letterSpacing: '1px'}}>组件封装</div>
                <div style={{fontSize: '0.95rem', fontWeight: 'normal', lineHeight: '1.3', opacity: '0.9'}}>高内聚低耦合、可复用组件</div>
              </div>
            </div>
            <div className="second4">
              <div className="second4one">
                <div className="second4onecard part5allcard">
                  <div style={{fontSize: '1.3rem', marginBottom: '6px', letterSpacing: '1px'}}>模块化</div>
                  <div style={{fontSize: '0.9rem', fontWeight: 'normal', lineHeight: '1.3', opacity: '0.9'}}>ES6模块系统、按需加载</div>
                </div>
                <div className="second4onecard part5allcard">
                  <div style={{fontSize: '1.3rem', marginBottom: '6px', letterSpacing: '1px'}}>易维护</div>
                  <div style={{fontSize: '0.9rem', fontWeight: 'normal', lineHeight: '1.3', opacity: '0.9'}}>清晰目录结构、注释完整</div>
                </div>
              </div>
              <div className="second4two">
                <div className="second4twocard part5allcard">
                  <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                    <div style={{fontSize: '1.4rem', marginBottom: '10px'}}>持续集成</div>
                    <div style={{fontSize: '0.9rem', fontWeight: 'normal', lineHeight: '1.3', opacity: '0.9', textAlign: 'center'}}>Git版本控制、自动化部署</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Part5;