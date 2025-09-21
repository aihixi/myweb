# React + TypeScript + Vite 前端单页应用项目说明

## 1. 项目概述
本项目是一个基于 **React、TypeScript 和 Vite** 构建的现代化前端单页应用（SPA）。  
项目采用 **模块化组件架构**，通过分区页面、锚点导航和交互动画，为用户提供流畅的浏览体验。  
背景采用 **Canvas 花瓣飘落动画**，增强视觉效果，整体风格简洁优雅。  

---

## 2. 技术栈
- **框架**: React `19.1.1`  
- **语言**: TypeScript  
- **构建工具**: Vite `7.1.2`  
- **UI 库**: Ant Design `5.27.3`  
- **动画库**: Framer Motion `12.23.12`  
- **代码规范**: ESLint `9.33.0` + TypeScript ESLint `8.39.1`  
- **依赖管理**: npm / yarn  

---

## 3. 目录结构

```bash
myweb/
├── src/                    # 源代码目录
│   ├── components/         # 可复用组件
│   │   ├── contact/        # 联系方式组件
│   │   ├── myanimation/    # 动画组件
│   │   ├── mytext/         # 文本组件
│   │   └── newanchor/      # 锚点导航组件
│   ├── views/              # 页面视图组件
│   │   ├── part1/          # 第一部分页面
│   │   ├── part2/          # 第二部分页面
│   │   ├── part3/          # 第三部分页面
│   │   ├── part4/          # 第四部分页面
│   │   ├── part5/          # 第五部分页面
│   │   └── part6/          # 第六部分页面
│   ├── assets/             # 静态资源
│   ├── App.tsx             # 根组件
│   ├── main.tsx            # 应用入口
│   └── ...
├── package.json            # 项目配置和依赖
└── ...
```

---

## 4. 核心模块说明

### 4.1 根组件 (App.tsx)
- 集成 Canvas 花瓣飘落背景动画  
- 组织 `NewAnchor` 导航栏  
- 添加页脚信息  

### 4.2 导航组件 (NewAnchor)
- 基于 **Intersection Observer API**，动态监听滚动区域  
- 使用 **Framer Motion** 提供平滑过渡和动画效果  
- 包含六个页面锚点链接  

### 4.3 页面视图组件 (Part1-Part6)
- 共六个独立页面部分  
- 每部分包含专属样式与逻辑  
- 通过锚点导航实现无刷新切换  

### 4.4 动画组件 (myanimation)
- 包含 `ScrollFadeIn`、`Mypc`、`MySphere` 等交互动画  
- 在页面滚动时触发内容淡入、缩放等视觉效果  

### 4.5 文本组件 (mytext)
- 提供 `Part1Text`、`Part2Text`、`Part3Text` 等模块化文本内容  
- 独立管理各部分页面的文字排版与样式  

---

## 5. 项目特点
1. **模块化架构**  
   功能组件按职责拆分，独立维护、扩展性强。  
2. **视觉体验突出**  
   - **Canvas 背景**: 花瓣飘落的动态效果  
   - **Framer Motion 动画**: 提升用户交互体验  
3. **响应式导航**  
   自动根据滚动位置高亮对应的导航项，增强可用性。  
4. **现代化工具链**  
   使用 React 19、TypeScript 和 Vite 提升开发效率与性能。  

---

## 6. 构建与运行

### 6.1 开发环境
```bash
npm run dev   # 或 yarn dev
```