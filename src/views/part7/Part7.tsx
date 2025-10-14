import React, { useEffect } from 'react';
import { Drawer } from 'antd';
import { useMediaQuery } from "react-responsive";
import WeatherCard from '../../components/weathercard/WeatherCard';
import Calendar from '../../components/calendar/Calendar';

interface AppProps {
  open: boolean;              // 由父组件控制 Drawer 是否打开
  onClose: () => void;
}

const Part7: React.FC<AppProps> = ({ open = false, onClose }) => {

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const heightD = isMobile ? '60px' : '65px';
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    showLoading();
  }, [open]);

  const showLoading = () => {
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <Drawer
        title="杂项"
        closable={{ 'aria-label': 'Close Button' }}
        placement='left'
        onClose={onClose}
        open={open}
        loading={loading}
        styles={{
          header: {
            minHeight: heightD
          }
        }}
      >
        <WeatherCard refresh={open}/>
        <hr />
        <Calendar />
      </Drawer>
    </div>
  );
};

export default Part7;