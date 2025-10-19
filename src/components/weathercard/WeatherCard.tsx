import React, { useEffect, useState } from "react";
import { getWeather } from "../../api"; // ✅ 你的API函数
import "./WeatherCard.css";

import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';

interface WeatherData {
  city: string;
  temp: number;
  description: string;
  humidity: number;
  wind_kph: number;
  icon: string;
  air_quality_index: number | null;
}

interface WeatherCardProps {
  refresh: boolean; // ✅ 接收刷新信号
}

const createHolder = (node: HTMLElement) => {
  const { borderWidth } = getComputedStyle(node);
  const borderWidthNum = Number.parseInt(borderWidth, 10) || 0;

  const div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.inset = `-${borderWidthNum}px`;
  div.style.borderRadius = 'inherit';
  div.style.background = 'transparent';
  div.style.zIndex = '999';
  div.style.pointerEvents = 'none';
  div.style.overflow = 'hidden';
  node.appendChild(div);

  return div;
};

// 创建波纹点
const createDot = (holder: HTMLElement, color: string, left: number, top: number, size = 0) => {
  const dot = document.createElement('div');
  dot.style.position = 'absolute';
  dot.style.left = `${left}px`;
  dot.style.top = `${top}px`;
  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;
  dot.style.borderRadius = '50%';
  dot.style.background = color;
  dot.style.transform = 'translate(-50%, -50%)';
  dot.style.transition = 'all 0.8s ease-out';
  holder.appendChild(dot);
  return dot;
};

const WeatherCard: React.FC<WeatherCardProps> = ({ refresh }) => {
  // ✅ 用 useState 保存天气数据
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    getWeatherClick();
  }, [refresh]);

  const getWeatherClick = async () => {
    try {
      // ✅ 1. 获取公网 IP
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();
      // ✅ 2. 使用 IP 获取天气
      const weather = await getWeather(data.city);
      console.log("WeatherData:", weather);

      // ✅ 3. 保存到 state
      setWeatherData(weather);
    } catch (error) {
      console.error("获取天气失败：", error);
       setWeatherData({
        city: "Tianjin",
        temp: 25,
        description: "晴",
        humidity: 50,
        wind_kph: 10,
        icon: "https://cdn.weatherapi.com/weather/64x64/day/116.png", // ☀️ 默认天气图标
        air_quality_index: 3,
      });
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    const node = ref.current!;
    const holder = createHolder(node);
    const rect = holder.getBoundingClientRect();
    const dot = createDot(holder, 'rgba(100, 150, 255, 0.3)', e.clientX - rect.left, e.clientY - rect.top);

    requestAnimationFrame(() => {
      dot.ontransitionend = () => holder.remove();
      dot.style.width = '550px';
      dot.style.height = '550px';
      dot.style.opacity = '0';
    });
  };

  return (
    <div className="weathercard" style={{ marginTop: '20px', marginBottom: '20px', background: 'transparent' }}>
        <div id="weatherDisplay" ref={ref} onClick={handleClick} >
          <div className="row1">
            <div className="r1c1">
              <span style={{ fontSize: '24px' }}>{weatherData?.city || ''}</span>
              <span style={{ fontSize: '16px', marginLeft: '0.5rem' }}>{weatherData?.description || ''}</span>
            </div>
            <div className="r1c2">
              {weatherData?.icon ? (
                <img src={weatherData.icon} alt="Weather Icon" />
              ) : (
                <span></span>
              )}
            </div>
          </div>
            
          <div className="row2">{weatherData?.temp !== undefined ? `${weatherData.temp}°C` : 
            <UseAnimations
              animation={loading}
              loop={true} // true 时循环动画
              size={50}
              strokeColor="#005bb0ff"
            />}</div>
      
          <div className="row3">
            <span>{weatherData?.humidity !== undefined ? `湿度: ${weatherData.humidity}%` : ''}</span>
            <span>{weatherData?.wind_kph !== undefined ? `风速: ${weatherData.wind_kph} km/h` : ''}</span>
          </div>
            
          <div className="row4">
            <div>
              {weatherData?.air_quality_index !== null && weatherData?.air_quality_index !== undefined
                ? `空气质量指数: ${weatherData.air_quality_index}`
                : ''}
              </div>
          </div>
        </div>
    </div>
    
    );
  };

export default WeatherCard;
