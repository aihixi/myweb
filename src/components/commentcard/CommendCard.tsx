import React from 'react';
import './CommendCard.css';

interface CommentCardProps {
  name?: string;
  message?: string;
  time?: string;
}

const CommendCard: React.FC<CommentCardProps> = ({ 
  name = "访客", 
  message = "这是一条示例留言内容。", 
  time 
}) => {
  // 如果没有提供时间，则使用当前时间
  const displayTime = time || new Date().toLocaleDateString('zh-CN');

  return (
    <div className="comment-card">
      <div className="comment-header">
        <div className="comment-author">{name}</div>
        <div className="comment-time">{displayTime}</div>
      </div>
      <div className="comment-content">
        {message}
      </div>
    </div>
  );
};

export default CommendCard;