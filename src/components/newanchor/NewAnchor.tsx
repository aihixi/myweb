import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Button, Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

import "./NewAnchor.css";

import Part1 from "../../views/part1/Part1";
import Part2 from "../../views/part2/Part2";
import Part3 from "../../views/part3/Part3";
import Part4 from "../../views/part4/Part4";
import Part5 from "../../views/part5/Part5";
import Part6 from "../../views/part6/Part6";
import Part7 from "../../views/part7/Part7";

const sections = [
  { id: "section1", label: "Section 1" },
  { id: "section2", label: "Section 2" },
  { id: "section3", label: "Section 3" },
  { id: "section4", label: "Section 4" },
  { id: "section5", label: "Section 5" },
  { id: "section6", label: "Section 6" },
];

const NewAnchor: React.FC = () => {
  const [activeId, setActiveId] = useState("");
  const [inView, setInView] = useState(true);
  const [open, setOpen] = useState(false);

  const startY = useRef(0); // ✅ 用 useRef 保存 touch 起点

  // IntersectionObserver
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

  // 滚动 & 触摸控制 inView
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (open) return;
      startY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (open) return;
      const currentY = e.touches[0].clientY;
      const deltaY = currentY - startY.current;

      if (Math.abs(deltaY) > 20) {
        if (deltaY < 0) setInView(false); // 上滑隐藏
        else setInView(true); // 下滑显示
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [open]); // ✅ 注意加 open 依赖

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 例如：Ctrl + B 打开侧边栏
      if (e.key === "F2") setOpen(open => !open);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setOpen]);
   
  // 滚轮事件
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (open) return;
    if (event.deltaY > 0) setInView(false);
    else if (event.deltaY < 0) setInView(true);
  };

  // 动画效果
  const variants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.5 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div onWheel={handleWheel}>
      {/* 导航栏 */}
      <motion.nav
        className="navbar"
        initial="visible"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
      >
        <div className="drawert">
          <Button color="default"  onClick={() => {setOpen(true);}} >
            侧边
          </Button>
        </div>
        <div className="navcontent">
          {isMobile ? (
            <Collapse
              bordered={false}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined
                  rotate={isActive ? 90 : 0}
                  style={{ color: 'CanvasText' }}
                />
              )}
              style={{ backgroundColor: "transparent", width: "110px" }}
            >
              <Collapse.Panel header={<span style={{ color: 'CanvasText' }}>导航</span>} key="nav" >
                <div className="mobile-nav-links">
                  {sections.map((s) => (
                    <div key={s.id} className="mobile-nav-item">
                      <a
                        href={`#${s.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById(s.id)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="nav-link"
                      >
                        {s.label}
                      </a>
                    </div>
                  ))}
                </div>
              </Collapse.Panel>
            </Collapse>
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
        </div>
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

      {/* Drawer */}
      <Part7 open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default NewAnchor;
