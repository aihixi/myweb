import React, { useRef, useEffect, useState } from 'react';
import MyFloatButton from '../../components/floatbutton/MyFloatButton';
import Lottie from "lottie-react";
import type { LottieRefCurrentProps } from "lottie-react";
import loadingMusic from "../../assets/Lottie/Music - Record Player Button.json";
import { useIsMobile } from "../../components/mediaquery/MediaQuery";
import Feng from "../../assets/audio/枫 - 钢琴版-LightKeys.mp3";

const START: [number, number] = [0, 40];
const LOOP: [number, number] = [40, 87];
const END: [number, number] = [87, 150];

const Page2: React.FC = () => {

    const isMobile = useIsMobile();

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const lottieRef = useRef<LottieRefCurrentProps | null>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [shouldStop, setShouldStop] = useState(false);

    // 创建音频
    useEffect(() => {
        audioRef.current = new Audio(Feng);

        return () => {
            audioRef.current?.pause();
            audioRef.current = null;
        };
    }, []);

    // 监听循环结束（用于优雅停止）
    useEffect(() => {
        const anim = lottieRef.current?.animationItem;
        if (!anim) return;

        const handleLoopComplete = () => {
            if (shouldStop) {
                anim.loop = false;
                anim.playSegments(END, true);
                setShouldStop(false);
                setIsPlaying(false);
            }
        };

        anim.addEventListener("loopComplete", handleLoopComplete);

        return () => {
            anim.removeEventListener("loopComplete", handleLoopComplete);
        };
    }, [shouldStop]);

    const handleClick = () => {
        const anim = lottieRef.current?.animationItem;
        const audio = audioRef.current;
        if (!anim || !audio) return;

        // ▶ 第一次点击
        if (!isPlaying) {
            setIsPlaying(true);

            audio.play();

            anim.loop = false;

            // ① 播放开场
            anim.playSegments(START, true);

            const handleStartComplete = () => {
                anim.removeEventListener("complete", handleStartComplete);

                // ② 进入循环
                anim.loop = true;
                anim.playSegments(LOOP, true);
            };

            anim.addEventListener("complete", handleStartComplete);

        } else {
            // ⏹ 第二次点击
            const initialVolume = audio.volume;
            const fadeDuration = 3000; // 2秒
            const fadeInterval = 50; // 每50ms调整一次
            const steps = fadeDuration / fadeInterval;
            const volumeDecrement = initialVolume / steps;

            const fadeOut = setInterval(() => {
                if (audio.volume > volumeDecrement) {
                    audio.volume -= volumeDecrement;
                } else {
                    audio.volume = initialVolume; // 恢复初始音量
                    clearInterval(fadeOut);
                    audio.pause();
                    setShouldStop(true);
                }
            }, fadeInterval);
        }
    };

    return (
        <>
            <header>
                <span></span>
            </header>

            <div
                style={{
                    display: 'flex',
                    margin: '64px',
                    alignItems: 'center',
                    flexDirection: isMobile ? 'column' : 'row'
                }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection : 'column',
                    alignItems: 'center',
                    width: '30%',
                }}>
                    <Lottie
                        lottieRef={lottieRef}
                        animationData={loadingMusic}
                        autoplay={false}
                        loop={false}
                        onClick={handleClick}
                        style={{
                            width: isMobile ? '250px' : '100%',
                            minWidth: '170px',
                            cursor: 'pointer'
                        }}
                    />
                    <p style={{ 
                        minWidth: '250px', 
                        textAlign: 'center', 
                        fontSize: '24px', 
                        fontWeight: 'bold', // 将bold改为800，更粗的字体
                        textShadow: '1px 1px 2px rgba(0,0,0,0.3)' // 添加文字阴影增强视觉效果
                    }}>
                        枫（钢琴版）-周杰伦
                    </p>
                </div>

                <span style={{ width: '70%' }}>
                    <h1>点击图标音乐播放</h1>
                </span>
            </div>

            <MyFloatButton />
        </>
    );
};

export default Page2;