import React, { useRef } from 'react';
import MyFloatButton from '../../components/floatbutton/MyFloatButton';
import Lottie from "lottie-react";
import loadingMusic from "../../assets/Lottie/player music.json";
import { useIsMobile } from "../../components/mediaquery/MediaQuery";
import Feng from "../../assets/audio/枫 - 钢琴版-LightKeys.mp3";

const Page2: React.FC = () => {

    const isMobile = useIsMobile();

    // 只创建一次 audio
    const audioRef = useRef(new Audio(Feng));

    const handleClick = () => {
        const audio = audioRef.current;

        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
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
                <Lottie
                    animationData={loadingMusic}
                    loop={true}
                    onClick={handleClick}
                    style={{
                        width: isMobile ? '170px' : '38%',
                        minWidth: '170px',
                        cursor: 'pointer'
                    }}
                />

                <span style={{ width: '100%' }}>
                    <h1>点击图标音乐播放</h1>
                </span>
            </div>

            <MyFloatButton />
        </>
    );
};

export default Page2;