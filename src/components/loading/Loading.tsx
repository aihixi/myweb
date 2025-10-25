import React from "react";
import Lottie from "lottie-react";
import loadingAnim from "../../assets/Lottie/CMS computer animation.json"; // 你的动画路径
import "./Loading.css"; // 你的样式路径

interface LoadingProps {
  loading: boolean;
}
const Loading: React.FC<LoadingProps> = ({loading = true}) => {

  return (
    <div className="loading-overlay">
      <Lottie
        animationData={loadingAnim}
        loop={true}
        className={`loading-animation ${loading ? "" : "loading-over"} `}
      />
    </div>
  );
};

export default Loading;
