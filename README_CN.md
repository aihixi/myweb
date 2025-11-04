# React + TypeScript + Vite 前端单页应用项目说明

## 1. 项目概述
本项目是一个基于 **React、TypeScript 和 Vite** 构建的现代化前端单页应用（SPA）。  
项目采用 **模块化组件架构**，通过分区页面、锚点导航和交互动画，为用户提供流畅的浏览体验。  
背景采用 **Canvas 花瓣飘落动画**，增强视觉效果，整体风格简洁优雅。  

这是一个个人网站/作品集项目，展示了个人信息、技能、教育经历、项目作品以及联系方式。

[English](./README.md)

---

## 2. 技术栈
- **框架**: React `19.1.1`
- **语言**: TypeScript
- **构建工具**: Vite `7.1.2`
- **UI 库**: Ant Design `5.27.3`
- **响应式设计**: React Responsive
- **依赖管理**: npm / yarn

---

## 3. 项目预览

<table tyle="border-collapse:collapse;border:none;">
  <tr>
    <td style="border:none;"><img src="public/截图 2025-11-04 12-47-03.png" alt="demo" width="100%"></td>
    <td style="border:none;"><img src="public/截图 2025-11-04 12-47-15.png" alt="demo" width="100%"></td>
  </tr>
  <tr>
    <td style="border:none;"><img src="public/截图 2025-11-04 12-47-20.png" alt="demo" width="100%"></td>
    <td style="border:none;"><img src="public/截图 2025-11-04 12-48-34.png" alt="demo" width="100%"></td>
  </tr>
</table>

---

## 4. 核心模块说明

### 4.1 根组件 (App.tsx)
- 组织 NewAnchor 导航栏  
- 添加页脚信息  

### 4.2 导航组件 (NewAnchor)
- 包含七个页面锚点链接（Home, Skills, Education, Projects, About, Contact, Drawer）
- 响应式设计，移动端使用折叠菜单

### 4.3 页面视图组件 

- Part1 - 首页/个人简介

- Part2 - 技能展示

- Part3 - 教育经历

- Part4 - 项目展示

- Part5 - 关于网站

- Part6 - 联系我/留言

- Part7 - 抽屉菜单

### 4.4 动画组件 (myanimation)
- [FallingPetals](https://codepen.io/rudtjd2548/pen/qBpVzxP?utm_source): Canvas实现的花瓣飘落背景动画

### 4.5 文本组件 (mytext)
- 提供 `Part1Text`、`Part2Text`、`Part3Text` 等模块化文本内容

### 4.6 API 接口
- api.ts: 封装了评论和天气相关的API接口
- 支持留言提交和获取功能（冻结）

---

## 5. 项目特点
1. **模块化架构**  
   功能组件按职责拆分，独立维护、扩展性强。  
2. **视觉体验突出**  
   - **Canvas 背景**: 花瓣飘落的动态效果  
   - **Framer Motion 动画** 
   - **3D 效果**
3. **响应式导航**  
4. **现代化工具链**   
5. **交互设计**  
   - 支持键盘快捷键(F2)打开抽屉菜单

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
