import { useMediaQuery } from "react-responsive";
import { BiSolidFileHtml } from "react-icons/bi";
import { BiSolidFileCss } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNpm } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { IoLogoElectron } from "react-icons/io5";
import { SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import './Part2Text.css'

import React, { useState } from 'react';
import AnimatedSection from '../../myanimation/animatedsection/AnimatedSection'; // 导入新组件
import camelRunning from "../../../assets/Lottie/Baby Camel.json"; // 动画路径

const Part2Text: React.FC = () => {
    
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const iconsize = isMobile ? 48 : 64

    const [camelRunningState, setCamelRunning] = useState(false);

    return (
      <div
        onMouseEnter={()=> {setCamelRunning(true)}}
        onMouseLeave={()=> {setCamelRunning(false)}}
      >
        <h1 style={{
                textAlign: 'left', 
                marginLeft: '32px',
            }}>
            <AnimatedSection 
                animationState={camelRunningState}
                text="Skills" 
                animationData={camelRunning} // 传入文本和动画数据
            />
            <hr style={{
                width: '90%',
                margin: '8px 0',
                borderTop: '1px solid black',
            }} />
        </h1>
        <ul style={{ lineHeight: '1.6', padding: '0 8px', listStyle: 'none' }}>
            <li style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '2rem', fontWeight: 'bold', textAlign: 'left' }}>
                具备 Web 前端开发能力，能够基于业务需求打造高交互性、高性能的用户界面
            </li>
            <li style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '2rem', textAlign: 'left' }}>
                基于 Vite 构建工具搭建高效开发环境, 运用 Vue3 与 React 两大主流框架，擅长组件化开发，保障代码可维护性与扩展性
            </li>
            <li style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '2rem', textAlign: 'left' }}>
                了解 Electron 技术，可将 Web 应用封装为跨平台桌面应用（Windows/macOS），拓展应用使用场景
            </li>
            <li style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '2rem', textAlign: 'left' }}>
                可以使用python，C++进行后端开发，并使用mysql进行数据库管理
            </li>
        </ul>
        <div style={{textAlign: 'left',paddingLeft: '24px'}}>
          <BiSolidFileHtml className='myicon' size={iconsize} />
          <BiSolidFileCss className='myicon' size={iconsize} />
          <FaNpm className='myicon' size={iconsize} />
          <BiLogoJavascript className='myicon' size={iconsize} />
          <BiLogoTypescript className='myicon' size={iconsize} />
          <FaReact className='myicon' size={iconsize} />
          <IoLogoVue className='myicon' size={iconsize} />
          <IoLogoElectron className='myicon' size={iconsize} />
          <SiCplusplus className='myicon' size={iconsize} />
          <FaPython className='myicon' size={iconsize} />
          <SiMysql className='myicon' size={iconsize} />
        </div>
      </div>
    )
};

export default Part2Text;