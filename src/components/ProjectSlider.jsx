import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

// 프로젝트 리스트를 받아서 슬라이더에 적용
const ProjectSlider = ({ projects = [] }) => {
  const sliderRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [containerWidth, setContainerWidth] = useState(0);

  // 화면 크기에 따라 상태를 업데이트하는 함수
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (sliderRef.current) {
      setContainerWidth(sliderRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      setContainerWidth(sliderRef.current.offsetWidth); // 슬라이더의 너비 설정
    }

    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="project-slider"
      ref={sliderRef}
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row", // 모바일에서 세로, 데스크탑에서 가로
        gap: isMobile ? "20px" : "30px", // 카드 간 간격 설정
        cursor: "grab",
        overflow: "hidden", // 넘치는 부분 숨김
      }}
    >
      <motion.div
        className="cards-container"
        drag={isMobile ? "y" : "x"} // 모바일에서 세로 드래그, 데스크탑에서 가로 드래그
        dragConstraints={{
          left: isMobile ? 0 : -(sliderRef.current?.scrollWidth - containerWidth), // 가로 드래그가 마지막 카드까지 가능하도록 수정
          right: 0,
          top: isMobile ? -(sliderRef.current?.scrollHeight - containerWidth) : 0,
          bottom: 0,
        }}
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // 카드 정렬
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            style={{
              minWidth: isMobile ? "100%" : "300px", // 모바일에서는 100% 너비, 데스크탑에서는 300px 고정
              marginBottom: isMobile ? "20px" : "0", // 모바일에서 카드 간 공백
              marginRight: isMobile ? "0" : "20px", // 데스크탑에서 카드 간 공백
            }}
            whileHover={{ scale: 1.05 }} // Hover 시 확대
            transition={{ duration: 0.3 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectSlider;
