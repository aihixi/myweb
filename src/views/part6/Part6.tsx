import React, { useState} from 'react';
import './Part6.css';
import Part2Tag from '../../components/contact/Contact';
import CommendCard from '../../components/commentcard/CommendCard';
import ScrollFadeIn from '../../components/myanimation/ScrollFadeIn/ScrollFadeIn';

import { IoPersonCircleSharp } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { Button } from 'antd';

import { submitMessage } from "../../api"; // ✅ 引入API

const Part6: React.FC = () => { 

  const [inputValue, setInputValue] = useState("");   // 输入框的值
  const [textValue, setTextValue] = useState("");   // 多行文本框的值
  const [refresh, setRefresh] = useState(false); // 用于触发评论刷新

  const handleClick = async () => {
  if (inputValue.trim() && textValue.trim() !== "") {
    try {
      await submitMessage(inputValue, textValue);
      console.log("提交成功:", inputValue, textValue);
      setInputValue("");
      setTextValue("");

      setRefresh(!refresh); // ✅ 提交后切换 refresh，触发 CommendCard 刷新
    } catch (err) {
      console.error("提交失败:", err);
    }
  } else {
    alert("请填写完整的信息！");
  }
};

  return (
    <div style={{height: '100%' }}>
      <div className='part6'>
        <div style={{width: '100vw'}}><h1>Contact Me</h1></div>
        <div className='part6body'>
          <ScrollFadeIn direction='left'> 
            <div className='part6bodyleft'>
              <div className='textinput'>
                <h2 style={{fontSize: '24px'}}>Do a comment</h2>
                <div 
                  style={{
                    display: 'flex', 
                    columnGap: '16px', 
                    background: 'transparent',
                    backdropFilter: 'blur(4px)',
                    borderRadius: '8px',
                  }}
                >
                  <IoPersonCircleSharp size={32} />
                  <input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} // 更新输入框的值
                    placeholder='Name' 
                    style={{
                      width: '100%', 
                      height: '32px', 
                      background: 'transparent', 
                      border: 'none', 
                      outline: 'none', 
                      fontSize: '16px', 
                      fontFamily: 'inherit',
                    }} 
                  />
                </div>
                <div 
                  style={{
                    display: 'flex', 
                    columnGap: '16px', 
                    background: 'transparent',
                    backdropFilter: 'blur(4px)',
                    borderRadius: '8px',
                  }}
                >
                  <TiDocumentText size={32} />
                  <textarea
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)} // 更新输入框的值
                    placeholder="Message"
                    style={{
                      width: '100%',
                      height: '128px',
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      resize: 'none',   // 禁止拖拽缩放
                      fontSize: '16px', // 改为使用em单位以匹配全局字体设置
                      fontFamily: 'inherit', // 继承字体族
                      paddingTop: '6px',
                      paddingBottom: '6px'
                    }}
                  />
                </div>
                <div>
                  <Button
                    type="primary" 
                    className='sendbutton'
                    onClick={handleClick}
                  >
                    Send
                  </Button>
                </div>
                <hr style={{width: '100%'}} />
              </div>
              <div className='econtact'>
                <Part2Tag />
              </div>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn direction='right'> 
            <div className='part6bodyright'>
              <div>
                <h2 style={{fontSize: '24px'}}>Commends</h2>
              </div>
              <div className='commends'>
                <CommendCard refresh={refresh} />
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </div>
  );
};

export default Part6;