import React from 'react';

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

import  Mypc  from "../myanimation/myPc/Mypc";

import './Part2.css';

const Part2: React.FC = () => {

  return (
    <div>
      <div className="part2">
        <div
          className="part2content"
        >
          <div>
            <h1 style={{
                    textAlign: 'left', 
                    marginLeft: '32px',
                }}>What Can I Do
            </h1>
            <div style={{ lineHeight: '1.6', padding: '0 8px' }}>
                <p style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '32px', fontWeight: 'bold', textAlign: 'left' }}>
                    具备 Web 前端开发能力，能够基于业务需求打造高交互性、高性能的用户界面
                </p>
                <div style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '32px', textAlign: 'left' }}>
                    基于 Vite 构建工具搭建高效开发环境, 运用 Vue3 与 React 两大主流框架，擅长组件化开发，保障代码可维护性与扩展性
                </div>
                <div style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '32px', textAlign: 'left' }}>
                    掌握 Electron 技术，可将 Web 应用封装为跨平台桌面应用（Windows/macOS），拓展应用使用场景
                </div>
                <div style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '32px', textAlign: 'left' }}>
                    可以使用python进行后端开发，并使用mysql进行数据库管理
                </div>
            </div>
          </div>
          <div style={{textAlign: 'left',paddingLeft: '24px'}}>
            <BiSolidFileHtml className='myicon' size={64} />
            <BiSolidFileCss className='myicon' size={64} />
            <FaNpm className='myicon' size={64} />
            <BiLogoJavascript className='myicon' size={64} />
            <BiLogoTypescript className='myicon' size={64} />
            <FaReact className='myicon' size={64} />
            <IoLogoVue className='myicon' size={64} />
            <IoLogoElectron className='myicon' size={64} />
            <SiCplusplus className='myicon' size={64} />
            <FaPython className='myicon' size={64} />
            <SiMysql className='myicon' size={64} />
          </div>
        </div>
        <Mypc />
      </div>
    </div>
  );
};

export default Part2;
