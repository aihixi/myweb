import React from "react";
import "./BookShelf.css";

interface BookshelfProps {
  books?: number; // 书本数量
  colors?: string[]; // 书本颜色列表
  bookname?: string; // 书本名称
}

const Bookshelf: React.FC<BookshelfProps> = ({ 
  books = 9, 
  colors = [
    "#2c3e50", // 深蓝灰
    "#e74c3c", // 红色
    "#27ae60", // 绿色
    "#8e44ad", // 紫色
    "#f39c12", // 橙色
    "#16a085", // 青色
    "#34495e", // 深灰蓝
    "#c0392b", // 深红
    "#2980b9"  // 蓝色
  ],
  bookname = ["C语言", "HTML基础开发", "Python程序设计", "数据库系统概论", "数据结构", "计算机组成原理", "计算机网络", "操作系统", "算法设计与分析"]
}) => {
  return (
    <div className="bookshelf">
      <div className="books">
        {Array.from({ length: books }).map((_, i) => (
          <div
            key={i}
            className="book"
            style={{
              height: `${140 + (i % 3) * 20}px`, // 高度动态
              backgroundColor: colors[i % colors.length], // 背景色动态
            }}
          >
            {bookname[i % bookname.length]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
