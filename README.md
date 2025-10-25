# React + TypeScript + Vite 前端单页应用项目说明

## 1. 项目概述
本项目是一个基于 **React、TypeScript 和 Vite** 构建的现代化前端单页应用（SPA）。  
项目采用 **模块化组件架构**，通过分区页面、锚点导航和交互动画，为用户提供流畅的浏览体验。  
背景采用 **Canvas 花瓣飘落动画**，增强视觉效果，整体风格简洁优雅。  

这是一个个人网站/作品集项目，展示了个人信息、技能、教育经历、项目作品以及联系方式。

---

## 2. 技术栈
- **框架**: React `19.1.1`  
- **语言**: TypeScript  
- **构建工具**: Vite `7.1.2`  
- **UI 库**: Ant Design `5.27.3`  
- **动画库**: 
  - Framer Motion `12.23.12` (交互动画)
  - Vanilla Tilt (3D倾斜效果)
- **响应式设计**: React Responsive
- **图标库**: React Icons
- **其他库**:
  - dayjs (日期处理)
  - lunar-typescript (农历相关功能)
  - react-useanimations (动画图标)
- **代码规范**: ESLint `9.33.0` + TypeScript ESLint `8.39.1`  
- **依赖管理**: npm / yarn  

---

## 3. 目录结构

```bash
myweb/
├── public/                 # 静态公共资源
├── src/                    # 源代码目录
│   ├── assets/             # 静态资源（图片、SVG等）
│   ├── components/         # 可复用组件
│   │   ├── bookshelf/      # 书架组件
│   │   ├── calendar/       # 日历组件
│   │   ├── commentcard/    # 评论卡片组件
│   │   ├── contact/        # 联系方式组件
│   │   ├── myanimation/    # 动画组件
│   │   │   ├── fallingpetals/  # 飘落花瓣背景动画
│   │   │   ├── myPc/       # PC模型3D动画
│   │   │   ├── myShpere/   # 球体3D动画
│   │   │   └── ScrollFadeIn/  # 滚动淡入动画
│   │   ├── mytext/         # 文本组件
│   │   │   ├── part1text/  # 第一部分文本内容
│   │   │   ├── part2text/  # 第二部分文本内容
│   │   │   └── part3text/  # 第三部分文本内容
│   │   ├── newanchor/      # 锚点导航组件
│   │   ├── searchbox/      # 搜索框组件
│   │   └── weathercard/    # 天气卡片组件
│   ├── views/              # 页面视图组件
│   │   ├── part1/          # 第一部分页面（首页/个人简介）
│   │   ├── part2/          # 第二部分页面（技能展示）
│   │   ├── part3/          # 第三部分页面（教育经历）
│   │   ├── part4/          # 第四部分页面（项目展示）
│   │   ├── part5/          # 第五部分页面（关于网站）
│   │   ├── part6/          # 第六部分页面（联系我/留言）
│   │   └── part7/          # 第七部分页面（抽屉菜单）
│   ├── App.tsx             # 根组件
│   ├── main.tsx            # 应用入口
│   ├── api.ts              # API接口封装
│   └── ...
├── index.html              # HTML模板
├── package.json            # 项目配置和依赖
├── vite.config.ts          # Vite配置文件
└── ...
```

---

## 4. 核心模块说明

### 4.1 根组件 (App.tsx)
- 集成 Canvas 花瓣飘落背景动画  
- 组织 NewAnchor 导航栏  
- 添加页脚信息  

### 4.2 导航组件 (NewAnchor)
- 基于 **Intersection Observer API**，动态监听滚动区域  
- 使用 **Framer Motion** 提供平滑过渡和动画效果  
- 包含七个页面锚点链接（Home, Skills, Education, Projects, About, Contact, Drawer）
- 响应式设计，移动端使用折叠菜单
- 支持滚轮和触摸手势控制导航栏显隐

### 4.3 页面视图组件 

#### Part1 - 首页/个人简介
- 左侧包含3D球体动画展示
- 右侧展示个人基本信息和介绍
- 包含跳转到联系方式的按钮

#### Part2 - 技能展示
- 左侧文字介绍技能信息
- 右侧PC模型动画展示

#### Part3 - 教育经历

#### Part4 - 项目展示

#### Part5 - 关于网站
- 展示网站技术细节和特色功能
- 包含项目结构说明
- 使用Vanilla Tilt实现卡片3D倾斜效果
- 集成今日诗词API展示

#### Part6 - 联系我/留言
- 提供留言表单功能
- 显示联系方式
- 集成评论展示功能

#### Part7 - 抽屉菜单

### 4.4 动画组件 (myanimation)
- [FallingPetals](https://codepen.io/rudtjd2548/pen/qBpVzxP?utm_source): Canvas实现的花瓣飘落背景动画
- ScrollFadeIn: 滚动时内容淡入动画
- Mypc: PC模型3D动画
- Shpere: 球体3D动画

### 4.5 文本组件 (mytext)
- 提供 `Part1Text`、`Part2Text`、`Part3Text` 等模块化文本内容
- 独立管理各部分页面的文字排版与样式

### 4.6 API 接口
- api.ts: 封装了评论和天气相关的API接口
- 支持留言提交和获取功能（冻结）

---

## 5. 项目特点
1. **模块化架构**  
   功能组件按职责拆分，独立维护、扩展性强。  
2. **视觉体验突出**  
   - **Canvas 背景**: 花瓣飘落的动态效果  
   - **Framer Motion 动画**: 提升用户交互体验  
   - **3D 效果**: Vanilla Tilt 和自定义 3D 动画带来沉浸式体验
3. **响应式导航**  
   自动根据滚动位置高亮对应的导航项，增强可用性。  
4. **现代化工具链**  
   使用 React 19、TypeScript 和 Vite 提升开发效率与性能。  
5. **交互设计**  
   - 支持键盘快捷键(F2)打开抽屉菜单
   - 滚轮控制导航栏显隐
6. **第三方集成**  
   - 集成今日诗词API丰富内容
   - 支持留言评论功能

---

## 6. 构建与运行

### 6.1 开发环境
```bash
npm run dev   # 或 yarn dev
```

### 6.2 生产构建
```bash
npm run build   # 或 yarn build
```

---
