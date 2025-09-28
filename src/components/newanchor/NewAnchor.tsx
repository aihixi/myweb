import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

import "./NewAnchor.css";

import Part1 from '../../views/part1/Part1';
import Part2 from '../../views/part2/Part2';
import Part3 from '../../views/part3/Part3';
import Part4 from '../../views/part4/Part4';
import Part5 from '../../views/part5/Part5';
import Part6 from '../../views/part6/Part6';

import { RiMenuFill } from "react-icons/ri";

const sections = [
  { id: "section1", label: "Section 1" },
  { id: "section2", label: "Section 2" },
  { id: "section3", label: "Section 3" },
  { id: "section4", label: "Section 4" },
  { id: "section5", label: "Section 5" },
  { id: "section6", label: "Section 6" }
];

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: '导航',
    icon: <RiMenuFill size={16} />,
    children: [
      { key: "section1", label: "Section 1" },
      { key: "section2", label: "Section 2" },
      { key: "section3", label: "Section 3" },
      { key: "section4", label: "Section 4" },
      { key: "section5", label: "Section 5" },
      { key: "section6", label: "Section 6" }
    ],
  },
];

const NewAchor: React.FC = () => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  const [inView, setInView] = useState(true); // 将inView改为状态

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0) {
      console.log("向下滚动");
      setInView(false);
    } else if (event.deltaY < 0) {
      console.log("向上滚动");
      setInView(true);
    }
  };

  const variants = { 
    hidden: { 
      opacity: 0, y: -50 ,
      transition: { duration: 0.5 }
    },
    visible: { 
      opacity: 1, y: 0 ,
      transition: { duration: 0.5 }
    },

  };

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);

    switch (e.key) {
      case 'section1':
        console.log('你点击了 Option 1');
        document.getElementById('section1')?.scrollIntoView({ behavior: 'smooth' });
        // 执行 Option 1 的逻辑
        break;
      case 'section2':
        console.log('你点击了 Option 2');
        document.getElementById('section2')?.scrollIntoView({ behavior: 'smooth' });
        // 执行 Option 2 的逻辑
        break;
      case 'section3':
        console.log('你点击了 Option 3');
        document.getElementById('section3')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'section4':
        console.log('你点击了 Option 4');
        document.getElementById('section4')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'section5':
        console.log('你点击了 Option 5');
        document.getElementById('section5')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'section6':
        console.log('你点击了 Option 6');
        document.getElementById('section6')?.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  };


  return (
    <div 
      onWheel={handleWheel}
    >
      {/* 导航栏 */}
      <motion.nav
        className="navbar"
        initial="visible" 
        animate={inView ? "visible" : "hidden"} 
        variants={variants}
      >
        {isMobile ? (
          <Menu
            onClick={onClick}
            style={{ backgroundColor: 'transparent' }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        ) : (
          sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={activeId === s.id ? "nav-link active" : "nav-link"}
            >
              {s.label}
            </a>
          ))
        )}
      </motion.nav>

      {/* 页面内容 */}
      <div className="content">
        <section id="section1" className="section section1">
          <Part1 />
        </section>
        <section id="section2" className="section section2">
          <Part2 />
        </section>
        <section id="section3" className="section section3">
          <Part3 />
        </section>
        <section id="section4" className="section section4"> 
          <Part4 />
        </section>
        <section id="section5" className="section section5"> 
          <Part5 />
        </section>
        <section id="section6" className="section section6"> 
          <Part6 />
        </section>
      </div>
    </div>
  );
};

export default NewAchor;
