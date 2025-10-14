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

const WeatherCard: React.FC<WeatherCardProps> = ({ refresh }) => {
  // ✅ 用 useState 保存天气数据
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

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

  return (
    <div className="weathercard">
  <div id="weatherDisplay">
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
