import React, { useEffect, useState } from "react";
import "./NewAnchor.css";

import Part1 from '../../views/part1/Part1';
import Part2 from '../../views/part2/Part2';
import Part3 from '../../views/part3/Part3';
import Part4 from '../../views/part4/Part4';
import Part5 from '../../views/part5/Part5';
import Part6 from '../../views/part6/Part6';

const sections = [
  { id: "section1", label: "Section 1" },
  { id: "section2", label: "Section 2" },
  { id: "section3", label: "Section 3" },
  { id: "section4", label: "Section 4" },
  { id: "section5", label: "Section 5" },
  { id: "section6", label: "Section 6" }
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
  

  return (
    <div>
      {/* 导航栏 */}
      <nav className="navbar">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={activeId === s.id ? "nav-link active" : "nav-link"}
          >
            {s.label}
          </a>
        ))}
      </nav>

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
