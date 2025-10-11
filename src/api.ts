// src/api/api.ts

export interface CommentCardProps {
  id?: number;
  name?: string;
  message?: string;
  time?: string;
}

export interface WeatherData {
  source: string;
  city: string;
  country: string;
  localtime: string;
  temp: number;
  feels_like: number;
  description: string;
  humidity: number;
  wind_kph: number;
  icon: string;
  air_quality_index: number | null;
}
const BASE_URL = "http://localhost:3000";

// 获取所有评论
export const fetchComments = async (): Promise<CommentCardProps[]> => {
  const res = await fetch(`${BASE_URL}/commends`);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return await res.json();
};

// 提交新评论
export const submitMessage = async (name: string, message: string): Promise<void> => {
  const res = await fetch(`${BASE_URL}/commends`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, message })
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
};

//获取[city]天气
export const getWeather = async (city:string): Promise<WeatherData> => {
  
  if (!city) throw new Error('city is required');

  try {
    const res = await fetch(`${BASE_URL}/weather?city=${encodeURIComponent(city)}`);
    if (!res.ok) throw new Error('Failed to fetch weather');
    const json = await res.json();
    if (!json.success) throw new Error(json.error || 'Unknown error');
    return json.data;
  } catch (err) {
    console.error('Weather API error:', err);
    throw err;
  }

}