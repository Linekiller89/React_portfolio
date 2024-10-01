import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProjectDetail from "./components/ProjectDetail";
import Header from "./components/Header";
import Projects from "./Pages/Projects"; // Pages 폴더에 Projects 컴포넌트가 위치
import Footer from "./components/Footer"; // Footer도 components 폴더에 위치
import "./styles/styles.css"; // 스타일 파일 경로는 styles 폴더에서 임포트

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pages/projects/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
