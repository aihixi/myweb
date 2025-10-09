import React from 'react';
import { motion } from "framer-motion";
import './Mypc.css';
import { FaLightbulb } from "react-icons/fa";

const Mypc: React.FC = () => { 
  // 要显示的文字
  const text = "HELLO,WORLD".split("");

  // 为每个字母生成一对随机旋转角度
  const rotations = Array.from({ length: text.length }, () => {
    const end = Math.random() * 360;
    const start = end + 360;
    return { start, end };
  });

  return (
    <div className='myPCcard'>
      <div className="myPC">
        <div className="mylightbulb"> 
          <div className="mylightbulbicon">
            <FaLightbulb size={64} />
          </div>
        </div>
        <div className="myPCscreen">
          <div className='myscreencontent'>
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className={`${["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth"][i]}line`} />
            ))}
          </div>
        </div>
        <div className="myPCkeyboard" /> 
      </div>

      {/* 滚动文字动画 */}
      <div className='scrollcontainer'>
        {text.map((char, i) => (
          <motion.h1
            key={i}
            animate={{ rotate: [rotations[i].start, rotations[i].end] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            {char}
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default Mypc;
