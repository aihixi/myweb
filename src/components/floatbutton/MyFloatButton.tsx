import React from 'react';
import { ProductOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import './MyFloatButton.css';
import { useIsMobile } from '../mediaquery/MediaQuery';
import { useNavigate } from 'react-router-dom';

import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
// import { RiNumber3 } from "react-icons/ri";
// import { RiNumber4 } from "react-icons/ri";

const MyFloatButton: React.FC = () => {

    const rightSize = useIsMobile() ? 14 : 64;

    const navigate = useNavigate();

    return (
    <>
    {/* <FloatButton.Group
      trigger="click"
      type="primary"
      style={{ insetInlineEnd: 24 }}
      icon={<CustomerServiceOutlined />}
    >
      <FloatButton />
      <FloatButton icon={<CommentOutlined />} />
    </FloatButton.Group> */}
    <FloatButton.Group
      trigger="hover"
      type="primary"
      style={{ insetInlineEnd: rightSize ,border: '0'}}
      icon={<ProductOutlined />}

    >
      {/* <FloatButton /> */}
      <FloatButton icon={<RiNumber1 style={{ color: '#1677FF'}}/>} onClick={ () => navigate('/page1') }/>
      <FloatButton icon={<RiNumber2 style={{ color: '#1677FF'}}/>} onClick={ () => navigate('/page2') }/>
    </FloatButton.Group>
    </>
    );
};

export default MyFloatButton;