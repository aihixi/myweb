// src/api/api.ts

export interface CommentCardProps {
  id?: number;
  name?: string;
  message?: string;
  time?: string;
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
