import React,{ useRef } from 'react';
import './Shpere.css';
import Glasses from '../../../assets/image/imgsvg/图标_眼镜(icon_glasses)_爱给网_aigei_com.png';
import { CiDesktopMouse2 } from "react-icons/ci";

const Sphere: React.FC = () => { 

    const ballRef = useRef<HTMLDivElement>(null);
    const ballShadowRef = useRef<HTMLDivElement>(null);
    const mymouseRef = useRef<HTMLDivElement>(null);
    
    // 鼠标进入：启动动画
    const handleBallEnter = () => {
        if (ballRef.current) ballRef.current.style.animationPlayState = 'running';
        if (ballShadowRef.current) ballShadowRef.current.style.animationPlayState = 'running';
        if (mymouseRef.current) mymouseRef.current.style.animationPlayState = 'running';
    };
  
    // 鼠标离开：等动画循环完再停
    const handleBallLeave = () => {
      if (ballRef.current && ballShadowRef.current) {
        let stopped = false;
        const stopAfterLoop = () => {
          if (stopped) return;
          stopped = true;
          ballRef.current!.style.animationPlayState = 'paused';
          ballShadowRef.current!.style.animationPlayState = 'paused';
          mymouseRef.current!.style.animationPlayState = 'paused';
          ballRef.current!.removeEventListener('animationiteration', stopAfterLoop);
        };
        ballRef.current.addEventListener('animationiteration', stopAfterLoop);
      }
    };

    return (
        <div
            className="spherediv"
            onMouseEnter={handleBallEnter}
            onMouseLeave={handleBallLeave}
            // style={{
            //   backgroundImage: url('../../../assets/image/imgsvg/laptop_zobkvkkw3jr9.svg'),
            //   backgroundSize: 'cover',        // 铺满
            //   backgroundRepeat: 'no-repeat',
            //   backgroundPosition: 'bottom'    // 贴底
            // }}
        >
          <div className="sphereball" ref={ballRef}>
            <img src={Glasses} alt="Glasses" className="glasses" />
          </div>
          <div className="part2ballshadow" ref={ballShadowRef}/>
          <div style={{ width: '450px', display: 'flex', justifyContent: 'right' }}>
            <div className='mymouse' ref={mymouseRef} >
              <CiDesktopMouse2 size={64} />
            </div>
          </div>
        </div>
    );
};

export default Sphere;