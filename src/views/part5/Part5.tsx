import React, { useEffect } from 'react';
import Lottie from "lottie-react";
import './Part5.css';
import VanillaTilt from 'vanilla-tilt'
import ThinkingEmoji from '../../assets/Lottie/Thinking.json'

const Part5: React.FC = () => { 

  useEffect(() => {
    const elements = document.querySelectorAll('.part5allcard');
    const htmlElements = Array.from(elements) as HTMLElement[];
    VanillaTilt.init(htmlElements, {
      max: 16,
      speed: 400,
      scale: 1.1,
      glare: true,
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
              <div style={{fontSize: '25px', marginBottom: '8px'}}>技术栈</div>
              <div style={{fontSize: '16px', fontWeight: 'normal', lineHeight: '1.4', opacity: '0.9'}}>React19 + TypeScript + Vite</div>
            </div>
            <div className="first2 part5allcard">
              <div style={{fontSize: '25px', marginBottom: '8px'}}>核心特性</div>
              <div style={{fontSize: '16px', fontWeight: 'normal', lineHeight: '1.4', opacity: '0.9'}}>响应式设计、动画交互、组件化架构</div>
            </div>
            <div className="first3 part5allcard">
              <div style={{fontSize: '25px', marginBottom: '8px'}}>项目亮点</div>
              <div style={{fontSize: '16px', fontWeight: 'normal', lineHeight: '1.4', opacity: '0.9'}}>现代化构建、高性能渲染、良好用户体验</div>
            </div>
          </div>
      
          {/* 第二行 */}
          <div className="part5secondrow">
            <div className="second1">
              <div className="second1card part5allcard">
                <div style={{fontSize: '25px', marginBottom: '20px', marginLeft: '20px', letterSpacing: '1px'}}>技术细节</div>   
                <div style={{fontSize: '16px', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>• React 19 Hooks 状态管理</div>   
                <div style={{fontSize: '16px', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>• TypeScript 类型安全</div>                     
                <div style={{fontSize: '16px', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>• Vite 构建工具优化</div>
                <div style={{fontSize: '16px', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>• VanillaTilt 3D交互效果</div>
                <div style={{fontSize: '16px', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>• Ant Design UI组件库</div>
                <div style={{fontSize: '16px', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>• Framer Motion 动画库</div>
                <div style={{fontSize: '16px', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>• React Icons 图标系统</div>
                <div style={{fontSize: '16px', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>• Responsive 响应式布局</div>
              </div>
            </div>
            <div className="second2">
              <div className="lottliecard">
                <Lottie
                  animationData={ThinkingEmoji}
                  loop={true}
                  className="lottie"
                />
              </div>
              <div className="second2card part5allcard">
                <div style={{fontSize: '25px', marginBottom: '8px'}}>性能优化</div>
                <div style={{fontSize: '16px', fontWeight: 'normal', lineHeight: '1.4', opacity: '0.9'}}>懒加载、代码分割、资源压缩</div>
              </div>
            </div>
            <div className="second3">
              <div className="second3card part5allcard">
                <div style={{fontSize: '25px', marginBottom: '6px', letterSpacing: '1px'}}>动画实现</div>
                <div style={{fontSize: '16px', fontWeight: 'normal', lineHeight: '1.3', opacity: '0.9'}}>VanillaTilt 3D效果、滚动触发动画、粒子效果</div>
              </div>
              <div className="second3card part5allcard">
                <div style={{fontSize: '25px', marginBottom: '6px', letterSpacing: '1px'}}>响应式设计</div>
                <div style={{fontSize: '16px', fontWeight: 'normal', lineHeight: '1.3', opacity: '0.9'}}>适配移动端、平板和桌面端</div>
              </div>
              <div className="second3card part5allcard">
                <div style={{fontSize: '25px', marginBottom: '6px', letterSpacing: '1px'}}>组件封装</div>
                <div style={{fontSize: '16px', fontWeight: 'normal', lineHeight: '1.3', opacity: '0.9'}}>高内聚低耦合、可复用组件</div>
              </div>
            </div>
            <div className="second4">
              <div className="second4one">
                <div className="second4onecard part5allcard">
                  <div style={{fontSize: '25px', marginBottom: '6px', letterSpacing: '1px'}}>模块化</div>
                  <div style={{fontSize: '16px', fontWeight: 'normal', lineHeight: '1.3', opacity: '0.9'}}>ES6模块系统、按需加载</div>
                </div>
                <div className="second4onecard part5allcard">
                  <div style={{fontSize: '25px', marginBottom: '6px', letterSpacing: '1px'}}>易维护</div>
                  <div style={{fontSize: '16px', fontWeight: 'normal', lineHeight: '1.3', opacity: '0.9'}}>清晰目录结构、注释完整</div>
                </div>
              </div>
              <div className="second4two">
                <div className="second4twocard part5allcard">
                  <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                    <div style={{fontSize: '25px', marginBottom: '10px'}}>持续集成</div>
                    <div style={{fontSize: '16px', fontWeight: 'normal', lineHeight: '1.3', opacity: '0.9', textAlign: 'center'}}>Git版本控制、自动化部署</div>
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
