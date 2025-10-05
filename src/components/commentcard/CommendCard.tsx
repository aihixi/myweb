import React, { useEffect, useState } from "react";
import "./CommendCard.css";
import { fetchComments } from "../../api";
import type { CommentCardProps } from "../../api";

interface CommendCardProps {
  refresh: boolean; // ✅ 接收刷新信号
}

const CommendCard: React.FC<CommendCardProps> = ({ refresh }) => {
  const [commends, setCommends] = useState<CommentCardProps[]>([]);

  const loadComments = async () => {
    try {
      const data = await fetchComments();
      setCommends(data);
    } catch (err) {
      console.error("获取评论失败:", err);
    }
  };

  useEffect(() => {
    loadComments();
  }, [refresh]); // ✅ refresh 改变时重新加载

  return (
    <div style={{ width: "100%" }}>
      {commends.length > 0 ? (
        commends.map((commend, index) => (
          <div key={commend.id ?? index} className="comment-card">
            <div className="comment-header">
              <div className="comment-author">{commend.name}</div>
              <div className="comment-time">
                {commend.time
                  ? new Date(commend.time).toLocaleString()
                  : "未知时间"}
              </div>
            </div>
            <div className="comment-content">{commend.message}</div>
          </div>
        ))
      ) : (
        <div style={{ textAlign: "center", color: "#888", fontSize: "16px" }}>暂无评论</div>
      )}
    </div>
  );
};

export default CommendCard;
