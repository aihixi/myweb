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
    <div className='part6-root'>
      <div className='part6'>
        <div className='part6-title-wrap'><h1>Contact</h1></div>
        <div className='part6body'>
          <ScrollFadeIn direction='left'> 
            <div className='part6bodyleft'>
              <div className='textinput'>
                <h2 className='section-title'>Do a comment</h2>
                <div className='field-row'>
                  <IoPersonCircleSharp size={32} />
                  <input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} // 更新输入框的值
                    placeholder='Name' 
                    className='input-field' 
                  />
                </div>
                <div className='field-row'>
                  <TiDocumentText size={32} />
                  <textarea
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)} // 更新输入框的值
                    placeholder="Message"
                    className='textarea-field'
                  />
                </div>
                <div>
                  <Button
                    type="primary" 
                    className='sendbutton'
                    onClick={handleClick}
                  >
                    <span>Send</span>
                  </Button>
                </div>
                <hr className='hr-full' />
              </div>
              <div className='econtact'>
                <Part2Tag />
              </div>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn direction='right'> 
            <div className='part6bodyright'>
              <div>
                <h2 style={{fontSize: '24px'}}>Comments</h2>
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