import { useRef } from 'react'
import './App.css'
import NewAnchor from './components/newanchor/NewAnchor'

function App() {

  const containerRef = useRef<HTMLDivElement>(null);
  
    function createPetal() {
      const petal = document.createElement('div'); // JS 动态创建一个 div
      petal.classList.add('petal');                // 加上样式
  
      if (containerRef.current) {
          containerRef.current.appendChild(petal); // ✅ 挂到Card容器里
        }
  
      // 设置随机大小、位置、动画时间
      const size = Math.random() * 10 + 10;
      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;
      petal.style.left = Math.random() * window.innerWidth + 'px';
      petal.style.animationDuration = Math.random() * 3 + 4 + 's';
  
      // 动画结束后删除，避免DOM太多
      setTimeout(() => {
        petal.remove();
      }, 8000);
    }
  
    setInterval(createPetal, 300); // 每隔300ms生成一片花瓣

  return (
    <div ref ={containerRef}>
      {/* <MyAnchor/> */}
      <NewAnchor/>
    </div>
  )
}

export default App
