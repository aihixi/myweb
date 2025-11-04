import React, { useRef, useEffect } from 'react';
import Lottie from "lottie-react";
import { useIsMobile } from "../../mediaquery/MediaQuery";

interface AnimatedSectionProps {
    animationState: boolean; // 接受动画状态
    text: string; // 接受的文本内容
    animationData: object; // 接受的动画数据
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ animationState, text, animationData }) => {
    const isMobile = useIsMobile(); // 判断是否是移动端
    const animationRef = useRef<HTMLDivElement>(null);

    const handleLion = () => {
        if (animationRef.current) {
            animationRef.current.style.transform = 'translateX(50%)'; // 鼠标进入时移动动画
        }
    };

    const handleLionGone = () => {
        if (animationRef.current) {
            animationRef.current.style.transform = 'translateX(0)'; // 鼠标离开时恢复位置
        }
    };

    useEffect(() => {
        if (!isMobile) {
            if (animationState) {
                handleLion();
            } else {
                handleLionGone();
            }
        }
    }, [isMobile,animationState]);

    return (
        <div 
            style={{
                display: 'flex',
                alignItems: 'flex-end',
            }}
        >
            <span>{text}</span>
            <div
                ref={animationRef}
                style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: isMobile ? 'center' : 'flex-start',
                    transition: 'transform 3s ease-in-out', // 平滑过渡效果
                    position: 'relative',
                }}
            >
                <Lottie
                    animationData={animationData} // 传入动画数据
                    loop={true} // 循环播放
                    style={{
                        width: isMobile ? '170px' : '38%', // 移动端宽度和桌面端宽度不同
                        minWidth: '170px',
                        // marginBottom: '-30px',
                        position: 'absolute',
                        bottom: '-40px',
                    }}
                />
            </div>
        </div>
    );
};

export default AnimatedSection;
