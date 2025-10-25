import { useState, useEffect } from "react";
import "./App.css";
import NewAnchor from "./components/newanchor/NewAnchor";
import FallingPetals from "./components//myanimation/fallingpetals/FallingPetals";
import Loading from "./components/loading/Loading";
function App() {
  const [loading1, setLoading] = useState(true);  // 控制动画显示
  const [loading2, setLoading2] = useState(true); // 控制整个遮罩层是否挂载

  useEffect(() => {
    // 第一阶段：动画播放约 1.5s
    const t1 = setTimeout(() => setLoading(false), 1500);

    // 第二阶段：当 loading1 结束后，再延迟卸载整个 Loading 容器
    if (!loading1) {
      const t2 = setTimeout(() => setLoading2(false), 400);
      return () => clearTimeout(t2);
    }

    return () => clearTimeout(t1);
  }, [loading1]); // ✅ 注意这里依赖 loading1

  if (loading2) {
    return <Loading loading={loading1} />;
  }

  return (
    <div style={{ position: "relative" }}>
      <FallingPetals />
      <NewAnchor />
      <footer
        style={{
          textAlign: "center",
          padding: "16px",
          color: "#666",
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} aihixi. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
