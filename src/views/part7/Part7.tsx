import React from 'react';
import { Drawer } from 'antd';
import { useMediaQuery } from "react-responsive";

interface AppProps {
  open: boolean;              // 由父组件控制 Drawer 是否打开
  onClose: () => void;
}

const Part7: React.FC<AppProps> = ({ open = false, onClose }) => {

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const heightD = isMobile ? '60px' : '65px';

  return (
    <div>
      <Drawer
        title="Basic Drawer"
        closable={{ 'aria-label': 'Close Button' }}
        placement='left'
        onClose={onClose}
        open={open}
        styles={{
          header: {
            minHeight: heightD
          }
        }}
      >
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default Part7;