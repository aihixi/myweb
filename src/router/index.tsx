import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Page1 from '../components/newanchor/NewAnchor';
import Page2 from '../page/page2/Page2';
import FallingPetals from "../components/myanimation/fallingpetals/FallingPetals";


const AppRouter: React.FC = () => {
  return (
    <Router>
      <div style={{ position: "relative" }}>
        <FallingPetals />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <footer
          style={{
            textAlign: "center",
            padding: "16px",
            color: "#666",
            fontSize: "14px",
          }}
        >
          © {new Date().getFullYear()} aihixi. All Rights Reserved.
        </footer>
      </div>
    </Router>
  );
};

export default AppRouter;