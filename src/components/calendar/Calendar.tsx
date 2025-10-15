import React, { useState } from "react";
import dayjs from "dayjs";
import { Button } from "antd";
import { Solar } from "lunar-typescript";
import "./Calendar.css";

const weekDays = ["日", "一", "二", "三", "四", "五", "六"];

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const year = currentDate.year();
  const month = currentDate.month();

  const startOfMonth = currentDate.startOf("month");
  const daysInMonth = currentDate.daysInMonth();
  const prefixDays = startOfMonth.day();

  // 生成当月所有日期
  const dates = [];
  for (let i = 0; i < prefixDays; i++) dates.push(null);
  for (let d = 1; d <= daysInMonth; d++) dates.push(d);

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  const today = dayjs();

  return (
    <div className="calendar">
      <div className="calendar-header">
        <Button onClick={prevMonth}>←</Button>
        <h2>
          {year}年 {month + 1}月
        </h2>
        <Button onClick={nextMonth}>→</Button>
      </div>

      <div className="calendar-weekdays">
        {weekDays.map((day) => (
          <div key={day} className="calendar-weekday">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-grid">
        {dates.map((day, index) => {
          if (!day) return <div key={index} className="calendar-day empty" />;

          // 使用 lunar-typescript 获取农历信息
          const solar = Solar.fromYmd(year, month + 1, day);
          const lunar = solar.getLunar();

          const lunarDay = lunar.getDayInChinese();
          const lunarFestival = lunar.getFestivals().join("、");
          const solarFestival = lunar.getSolar().getFestivals().join("、");
          const jieqi = lunar.getJieQi() || "";

          const isToday =
            today.date() === day &&
            today.month() === month &&
            today.year() === year;

          // 显示优先级：节日 > 节气 > 农历日
          const displayText =
            lunarFestival || solarFestival || jieqi || lunarDay;

          return (
            <div
              key={index}
              className={`calendar-day ${isToday ? "today" : ""} ${
                lunarFestival || jieqi ? "highlight" : ""
              }`}
            >
              <div className="gregorian">{day}</div>
              <div className="lunar" style={isToday ? { color: "white" } : undefined}>{displayText}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
