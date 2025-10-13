import React, { useEffect, useState } from "react";
import { getWeather } from "../../api"; // ✅ 你的API函数
import "./WeatherCard.css";

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
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();

      // ✅ 2. 使用 IP 获取天气
      const weather = await getWeather(data.ip);
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
        air_quality_index: null,
      });
    }
  };

  return (
    <div className="weather-card">
      {/* ✅ 判断数据是否加载完成 */}
      {weatherData ? (
        <div id="weatherDisplay">
          <div className="row1">
            <div className="r1c1">
              <span style={{fontSize: '1.5rem'}}>{weatherData.city}</span>
              <span style={{fontSize: '1rem'}}>{weatherData.description}</span>
            </div>
            <div className="r1c2">
              <img src={weatherData.icon} alt="Weather Icon" />
            </div>
          </div>

          <div className="row2">{weatherData.temp}°C</div>

          <div className="row3">
            <span>湿度: {weatherData.humidity}%</span>
            <span>风速: {weatherData.wind_kph} km/h</span>
          </div>

          <div className="row4">
            空气质量指数: {weatherData.air_quality_index}
          </div>
        </div>
      ) : (
        <p>正在加载天气数据...</p>
      )}
    </div>
  );
};

export default WeatherCard;
