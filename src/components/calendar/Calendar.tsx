import React, { useState } from "react";
import dayjs from "dayjs";
import "./Calendar.css";
import { Button } from "antd";

const weekDays = ["日", "一", "二", "三", "四", "五", "六"];

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const year = currentDate.year();
  const month = currentDate.month();

  const startOfMonth = currentDate.startOf("month");
  const daysInMonth = currentDate.daysInMonth();

  // 计算前面空格天数
  const prefixDays = startOfMonth.day();

  // 构建日期数组
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
        <h2>{year}年 {month + 1}月</h2>
        <Button onClick={nextMonth}>→</Button>
      </div>

      <div className="calendar-weekdays">
        {weekDays.map((day) => (
          <div key={day} className="calendar-weekday">{day}</div>
        ))}
      </div>

      <div className="calendar-grid">
        {dates.map((day, index) => {
          const isToday =
            day &&
            today.date() === day &&
            today.month() === month &&
            today.year() === year;

          return (
            <div
              key={index}
              className={`calendar-day ${isToday ? "today" : ""}`}
            >
              {day || ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
