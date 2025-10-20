import React from "react";
import "./BookShelf.css";

interface BookshelfProps {
  books?: number;
  colors?: string[];
  bookname?: string[];
}

const Bookshelf: React.FC<BookshelfProps> = ({
  books = 9,
  colors = [
    "#2c3e50",
    "#e74c3c",
    "#27ae60",
    "#8e44ad",
    "#f39c12",
    "#16a085",
    "#34495e",
    "#c0392b",
    "#2980b9",
  ],
  bookname = [
    "C语言",
    "HTML基础开发",
    "Python程序设计",
    "数据库系统概论",
    "数据结构",
    "计算机组成原理",
    "计算机网络",
    "操作系统",
    "算法设计与分析",
  ],
}) => {
  return (
    <div className="bookshelf">
      <div className="books">
        {Array.from({ length: books }).map((_, i) => (
          <div
            key={i}
            className="book"
            style={{
              height: `${140 + (i % 3) * 20}px`,
              backgroundColor: colors[i % colors.length],
            }}
          >
            <span className="book-title">{bookname[i % bookname.length]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
