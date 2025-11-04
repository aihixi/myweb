# React + TypeScript + Vite Single-Page Application

## 1. Overview
This project is a modern **single-page application (SPA)** built with **React, TypeScript, and Vite**.  
It follows a **modular component architecture**, using section-based pages, anchor navigation, and interactive animations to create a smooth and engaging browsing experience.  
The background features a **Canvas petal-falling animation**, giving the site a refined and elegant aesthetic.  

This project serves as a **personal portfolio website**, showcasing personal information, skills, education, projects, and contact details.

[中文](./README_CN.md)

---

## 2. Tech Stack
- **Framework**: React `19.1.1`
- **Language**: TypeScript
- **Build Tool**: Vite `7.1.2`
- **UI Library**: Ant Design `5.27.3`
- **Responsive Design**: React Responsive
- **Package Manager**: npm / yarn

---

## 3. Preview

<table style="border-collapse:collapse;border:none;">
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

## 4. Core Modules

### 4.1 Root Component (App.tsx)
- Organizes the `NewAnchor` navigation bar  
- Includes footer information  

### 4.2 Navigation Component (NewAnchor)
- Contains seven anchor links: **Home, Skills, Education, Projects, About, Contact, Drawer**  
- Implements responsive design with a collapsible mobile menu  

### 4.3 Page Components

- Part1 - Home / Introduction  

- Part2 - Skills  

- Part3 - Education  

- Part4 - Projects  

- Part5 - About  

- Part6 - Contact / Message  

- Part7 - Drawer Menu  

### 4.4 Animation Module (myanimation)
- [FallingPetals](https://codepen.io/rudtjd2548/pen/qBpVzxP?utm_source): Canvas-based petal-falling animation  

### 4.5 Text Module (mytext)
- Provides modular text components such as `Part1Text`, `Part2Text`, `Part3Text`, etc.  

### 4.6 API Module
- `api.ts`: Encapsulates APIs for comments and weather data  
- Supports message submission and retrieval (temporarily frozen)

---

## 5. Key Features
1. **Modular Architecture**  
   Functional components are separated by responsibility, improving maintainability and scalability.  
2. **Enhanced Visual Experience**  
   - **Canvas Background**: Dynamic falling petals  
   - **Framer Motion Animations**  
   - **3D Effects**  
3. **Responsive Navigation**  
4. **Modern Development Toolchain**  
5. **Interactive Design**  
   - Supports keyboard shortcut **F2** to open the drawer menu  

---

## 6. Build and Run

### 6.1 Development
```bash
npm run dev
```

### 6.2 Production Build
```bash
npm run build
```

---