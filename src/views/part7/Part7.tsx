import React, { useEffect } from 'react';
import { Drawer } from 'antd';
import { useMediaQuery } from "react-responsive";

import { getWeather } from "../../api"; // ✅ 引入API

interface AppProps {
  open: boolean;              // 由父组件控制 Drawer 是否打开
  onClose: () => void;
}

const Part7: React.FC<AppProps> = ({ open = false, onClose }) => {

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const heightD = isMobile ? '60px' : '65px';

  useEffect(() => {
    if (open) {
      // 当 open 从 false 变为 true 时触发
      console.log("open 变成 true，触发函数");
      getWeatherClick();
    }
  }, [open]); // 监听 open 值的变化

  const getWeatherClick = async () => { 
    const weatherData = await getWeather("Beijing");
    console.log(weatherData);
  };

  return (
    <div>
      <Drawer
        title="Basic Drawer"
        closable={{ 'aria-label': 'Close Button' }}
        placement='left'
        onClose={onClose}
        open={open}
        styles={{
          header: {
            minHeight: heightD
          }
        }}
      >
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default Part7;