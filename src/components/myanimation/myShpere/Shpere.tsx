import React, { useRef } from 'react';
import './Shpere.css';
import Glasses from '../../../assets/image/imgsvg/图标_眼镜(icon_glasses)_爱给网_aigei_com.png';
import { CiDesktopMouse2 } from "react-icons/ci";
import { useIsMobile } from '../../mediaquery/MediaQuery';

// === 扩展 HTMLDivElement 的类型，允许有 _listeners 属性 ===
declare global {
  interface HTMLDivElement {
    _listeners?: EventListener[];
  }
}

const Sphere: React.FC = () => { 

    const ballRef = useRef<HTMLDivElement>(null);
    const ballShadowRef = useRef<HTMLDivElement>(null);
    const mymouseRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();

    // 鼠标进入：启动动画 + 清除旧监听
    const handleBallEnter = () => {
        const ball = ballRef.current;
        if (ball) {
            // 清除之前绑定的所有 animationiteration 监听器
            if (ball._listeners) {
                ball._listeners.forEach((fn) => {
                    ball.removeEventListener('animationiteration', fn);
                });
                ball._listeners = [];
            }

            ball.style.animationPlayState = 'running';
        }

        if (ballShadowRef.current)
            ballShadowRef.current.style.animationPlayState = 'running';
        if (mymouseRef.current)
            mymouseRef.current.style.animationPlayState = 'running';
    };
  
    // 鼠标离开：等动画循环完再停
    const handleBallLeave = () => {
        const ball = ballRef.current;
        const shadow = ballShadowRef.current;
        const mouse = mymouseRef.current;

        if (ball && shadow) {
            let stopped = false;

            const stopAfterLoop = () => {
                if (stopped) return;
                stopped = true;
                ball.style.animationPlayState = 'paused';
                shadow.style.animationPlayState = 'paused';
                if (mouse) mouse.style.animationPlayState = 'paused';
                ball.removeEventListener('animationiteration', stopAfterLoop);
            };

            // 记录监听函数，方便下次清除
            if (!ball._listeners) ball._listeners = [];
            ball._listeners.push(stopAfterLoop);

            ball.addEventListener('animationiteration', stopAfterLoop);
        }
    };

    return (
        <div
            className="spherediv"
            onMouseEnter={handleBallEnter}
            onMouseLeave={handleBallLeave}
        >
            <div className="sphereball" ref={ballRef}>
                <img src={Glasses} alt="Glasses" className="glasses" />
            </div>
            <div className="part2ballshadow" ref={ballShadowRef}/>
            {!isMobile && (
                <div style={{ width: '400px', display: 'flex', justifyContent: 'right' }}>
                    <div className='mymouse' ref={mymouseRef}>
                        <CiDesktopMouse2 size={64} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sphere;
