import React, { useEffect } from 'react';
import Lottie from "lottie-react";
import './Part5.css';
import VanillaTilt from 'vanilla-tilt'
import CatEmoji from '../../assets/Lottie/cat Mark loading.json'

const Part5: React.FC = () => { 

//   {
//     reverse: false,  // 反转倾斜方向
//     max: 35,  // 最大倾斜角度（度）
//     startX: 0,  // X 轴的初始倾斜角度，单位为度
//     startY: 0,  // Y 轴的初始倾斜角度，单位为度
//     perspective: 1000,  // 变换透视效果，值越小倾斜效果越极端
//     scale: 1,  // 缩放比例，2 表示 200%，1.5 表示 150% 等
//     speed: 300,  // 进入 / 退出时的过渡速度
//     transition: true,  // 是否在进入 / 退出时设置过渡效果
//     axis: null,  // 启用的轴，可以是 "x" 或 "y"
//     reset: true,  // 倾斜效果是否在退出时重置
//     "reset-to-start": true,  // 退出重置时是否回到 [startX, startY]（默认回到 [0,0]）
//     easing: "cubic-bezier (.03,.98,.52,.99)",  // 进入 / 退出时的缓动函数
//     glare: false,  // 是否启用 "眩光" 效果
//     "max-glare": 1,  // "眩光" 的最大不透明度（1 表示 100%，0.5 表示 50%）
//     "glare-prerender": false,  // false 表示由 VanillaTilt 自动创建眩光元素，否则需要手动添加.js-tilt-glare>.js-tilt-glare-inner
//     "mouse-event-element": null,  // 监听鼠标事件的元素（CSS 选择器或 HTML 元素链接）
//     gyroscope: true,  // 是否启用设备方向检测（布尔值）
//     gyroscopeMinAngleX: -45,  // 设备 X 轴角度的下限，在此角度时元素倾斜效果相当于鼠标在元素左边界
//     gyroscopeMaxAngleX: 45,  // 设备 X 轴角度的上限，在此角度时元素倾斜效果相当于鼠标在元素右边界
//     gyroscopeMinAngleY: -45,  // 设备 Y 轴角度的下限，在此角度时元素倾斜效果相当于鼠标在元素上边界
//     gyroscopeMaxAngleY: 45,  // 设备 Y 轴角度的上限，在此角度时元素倾斜效果相当于鼠标在元素下边界
// }

  useEffect(() => {
    const elements = document.querySelectorAll('.part5allcard');
    const htmlElements = Array.from(elements) as HTMLElement[];
    VanillaTilt.init(htmlElements, {
      max: 16,
      speed: 400,
      scale: 1.1,
      glare: true,
      "max-glare": 0.5,
      gyroscope: false, 
    });
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <div className="part5">
        <div style={{ width: '100vw' }}>
          <h1>About</h1>
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
                <div style={{fontSize: '25px', marginBottom: '20px', marginLeft: '24px'}}>技术细节</div>   
                <div style={{fontSize: '16px', fontWeight: 'normal', marginLeft: '20px', lineHeight: '1.6'}}>• React 19 Hooks 状态管理</div>   
                <div style={{fontSize: '16px', fontWeight: 'normal', marginLeft: '20px', lineHeight: '1.6'}}>• TypeScript 类型安全</div>                     
                <div style={{fontSize: '16px', fontWeight: 'normal', marginLeft: '20px', lineHeight: '1.6'}}>• Vite 构建工具优化</div>
                <div style={{fontSize: '16px', fontWeight: 'normal', marginLeft: '20px', lineHeight: '1.6'}}>• VanillaTilt 3D交互效果</div>
                <div style={{fontSize: '16px', fontWeight: 'normal', marginLeft: '20px', lineHeight: '1.6'}}>• Ant Design UI组件库</div>
                <div style={{fontSize: '16px', fontWeight: 'normal', marginLeft: '20px', lineHeight: '1.6'}}>• Framer Motion 动画库</div>
                <div style={{fontSize: '16px', fontWeight: 'normal', marginLeft: '20px', lineHeight: '1.6'}}>• React Icons 图标系统</div>
                <div style={{fontSize: '16px', fontWeight: 'normal', marginLeft: '20px', lineHeight: '1.6'}}>• Responsive 响应式布局</div>
              </div>
            </div>
            <div className="second2">
              <div className="lottliecard">
                <Lottie
                  animationData={CatEmoji}
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
                <div style={{fontSize: '16px', fontWeight: 'normal', lineHeight: '1.3', opacity: '0.9'}}>适配移动端和桌面端</div>
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
