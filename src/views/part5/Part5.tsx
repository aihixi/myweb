import React, { useEffect, useState } from 'react';
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

  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);


  const [poem, setPoem] = useState('');
  const [from, setFrom] = useState('');

  async function getPoem(): Promise<void> {
    try {
      const res = await fetch('https://v1.jinrishici.com/all.json')
      const data = await res.json()
      setPoem(data.content)
      setFrom(`—— ${data.author}《${data.origin}》`)
    } catch {
      setPoem('加载失败，请稍后重试')
      setFrom('')
    }
  }

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
              <div style={{fontSize: '1.6rem', marginBottom: '8px'}}>个人网站</div>
              <div style={{fontSize: '1rem', fontWeight: 'normal', lineHeight: '1.4', opacity: '0.9'}}>展示个人作品与技能的在线简历</div>
            </div>
            <div className="first2 part5allcard">
              <div style={{fontSize: '1.6rem', marginBottom: '8px'}}>技术栈</div>
              <div style={{fontSize: '1rem', fontWeight: 'normal', lineHeight: '1.4', opacity: '0.9'}}>使用 React 18 + Vite 4 + TypeScript 开发，确保代码质量和类型安全</div>
            </div>
            <div className="first3 part5allcard">
              <div style={{fontSize: '1.6rem', marginBottom: '8px'}}>UI 框架</div>
              <div style={{fontSize: '1rem', fontWeight: 'normal', lineHeight: '1.4', opacity: '0.9'}}>采用 Ant Design 组件库，配合 Framer Motion 和 Vanilla-tilt 实现丝滑动画效果</div>
            </div>
          </div>
      
          {/* 第二行 */}
          <div className="part5secondrow">
            <div className="second1">
              <div className="second1card part5allcard">
                <div style={{fontSize: '1.8rem', marginBottom: '20px', textAlign: 'center', letterSpacing: '1px'}}>项目结构</div>   
                <div style={{fontSize: '1.1rem', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>myweb</div>   
                <div style={{fontSize: '1.1rem', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>├── src</div>                     
                <div style={{fontSize: '1.1rem', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>│   ├── components</div>
                <div style={{fontSize: '1.1rem', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>│   ├── views</div>
                <div style={{fontSize: '1.1rem', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>│   ├── assets</div>
                <div style={{fontSize: '1.1rem', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>│   ├── App.tsx</div>
                <div style={{fontSize: '1.1rem', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>│   └── main.tsx</div>
                <div style={{fontSize: '1.1rem', marginLeft: '20px', fontFamily: 'monospace', lineHeight: '1.6'}}>└── package.json</div>
              </div>
            </div>
            <div className="second2">
              <div
                className="second2card part5allcard"
                onClick={() => {
                  getPoem();
                  setClick(true);
                }}
              >
                <span className={`text ${click ? "hiddenText" : "visibleText"}`} style={{fontSize: '1.6rem', letterSpacing: '2px'}}>
                  今日诗词
                </span>
                <span className={`text ${click ? "visibleText" : "hiddenText"}`} style={{fontSize: '1.5rem', padding: '15px', lineHeight: '1.6'}}>
                  {poem}
                  <br />
                  <span style={{fontSize: '1rem', marginTop: '8px', fontStyle: 'italic', opacity: '0.85', display: 'block'}}>{from}</span>
                </span>
              </div>
              <div className="second2card part5allcard">
                <div style={{fontSize: '1.6rem', marginBottom: '8px'}}>模块化架构</div>
                <div style={{fontSize: '1rem', fontWeight: 'normal', lineHeight: '1.4', opacity: '0.9'}}>采用组件化开发，保持代码整洁和可维护性</div>
              </div>
            </div>
            <div className="second3">
              <div
                className="second3card part5allcard"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <span className={`text ${hover ? "hiddenText" : "visibleText"}`} style={{fontSize: '1.4rem', letterSpacing: '1px'}}>
                  樱花特效
                </span>
                <span className={`text ${hover ? "visibleText" : "hiddenText"}`} style={{fontSize: '1.1rem', lineHeight: '1.4'}}>
                  浪漫飘落的花瓣动画
                </span>
              </div>
              <div className="second3card part5allcard">
                <div style={{fontSize: '1.4rem', marginBottom: '6px', letterSpacing: '1px'}}>智能导航</div>
                <div style={{fontSize: '0.95rem', fontWeight: 'normal', lineHeight: '1.3', opacity: '0.9'}}>平滑滚动导航</div>
              </div>
              <div className="second3card part5allcard">
                <div style={{fontSize: '1.4rem', marginBottom: '6px', letterSpacing: '1px'}}>3D效果</div>
                <div style={{fontSize: '0.95rem', fontWeight: 'normal', lineHeight: '1.3', opacity: '0.9'}}>悬浮立体感</div>
              </div>
              <div className="second3card part5allcard">
                <div style={{fontSize: '1.4rem', marginBottom: '6px', letterSpacing: '1px'}}>视差滚动</div>
                <div style={{fontSize: '0.95rem', fontWeight: 'normal', lineHeight: '1.3', opacity: '0.9'}}>沉浸式体验</div>
              </div>
            </div>
            <div className="second4">
              <div className="second4one">
                <div className="second4onecard part5allcard">
                  <div style={{fontSize: '1.3rem', marginBottom: '6px', letterSpacing: '1px'}}>响应式</div>
                  <div style={{fontSize: '0.9rem', fontWeight: 'normal', lineHeight: '1.3', opacity: '0.9'}}>适配各种屏幕</div>
                </div>
                <div className="second4onecard part5allcard">
                  <div style={{fontSize: '1.3rem', marginBottom: '6px', letterSpacing: '1px'}}>性能优化</div>
                  <div style={{fontSize: '0.9rem', fontWeight: 'normal', lineHeight: '1.3', opacity: '0.9'}}>快速加载</div>
                </div>
              </div>
              <div className="second4two">
                <div className="second4twocard part5allcard">
                  <div style={{fontSize: '1.3rem', marginBottom: '6px', letterSpacing: '1px'}}>作者：aihixi</div>
                  <div style={{fontSize: '0.9rem', fontWeight: 'normal', lineHeight: '1.3', opacity: '0.85'}}>2025 © All Rights Reserved</div>
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