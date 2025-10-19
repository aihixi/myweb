import React, { useEffect } from 'react';
import { Drawer } from 'antd';
import { useMediaQuery } from "react-responsive";
import WeatherCard from '../../components/weathercard/WeatherCard';
import Calendar from '../../components/calendar/Calendar';
import SearchBox from '../../components/searchbox/SearchBox';

interface AppProps {
  open: boolean;              // 由父组件控制 Drawer 是否打开
  onClose: () => void;
}

const Part7: React.FC<AppProps> = ({ open = false, onClose }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const heightD = isMobile ? '60px' : '65px';
  const [loading, setLoading] = React.useState<boolean>(true);

  // 判断当前是否暗色主题
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    showLoading();
  }, [open]);

  const showLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const drawerStyle = {
    backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
    color: isDark ? "#e0e0e0" : "#1a1a1a",
  };

  const headerStyle = {
    minHeight: heightD,
    backgroundColor: isDark ? "#2a2a2a" : "#f5f5f5",
    color: "CanvasText",
  };

  return (
    <Drawer
      title="杂项"
      placement="left"
      onClose={onClose}
      open={open}
      loading={loading}
      styles={{
        header: headerStyle,
        body: drawerStyle,
      }}
    >
      <SearchBox />
      <hr />
      <WeatherCard refresh={open} />
      <hr />
      <Calendar />
      <hr />
    </Drawer>
  );
};


export default Part7;