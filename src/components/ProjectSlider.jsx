import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A React project",
    imageUrl: "/images/project1.jpg",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A Vue project",
    imageUrl: "/images/project2.jpg",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A Node.js project",
    imageUrl: "/images/project3.jpg",
  },
  {
    id: 4,
    title: "Project Four",
    description: "A Node.js project",
    imageUrl: "/images/project3.jpg",
  },
];

const CARD_HEIGHT = 200; // 카드의 고정된 높이
const GAP_HEIGHT = 20; // 카드 간 여백

const ProjectSlider = () => {
  const sliderRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0); // 세로 높이 계산 추가
  const [contentHeight, setContentHeight] = useState(0); // 컨텐츠의 전체 높이

  // 화면 크기에 따라 상태를 업데이트하는 함수
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (sliderRef.current) {
      setContainerWidth(sliderRef.current.offsetWidth);
      setContainerHeight(sliderRef.current.offsetHeight); // 슬라이더 컨테이너의 높이 설정
      setContentHeight(sliderRef.current.scrollHeight); // 슬라이더 내용물의 전체 높이 설정
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      setContainerWidth(sliderRef.current.offsetWidth); // 슬라이더의 너비 설정
      setContainerHeight(sliderRef.current.offsetHeight); // 슬라이더의 높이 설정
      setContentHeight(sliderRef.current.scrollHeight); // 내용물의 전체 높이 설정
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
        gap: isMobile ? `${GAP_HEIGHT}px` : "30px", // 카드 간 간격 설정
        cursor: "grab",
        overflow: "hidden", // 넘치는 부분 숨김
      }}
    >
      <motion.div
        className="cards-container"
        drag={isMobile ? "y" : "x"} // 모바일에서 세로 드래그, 데스크탑에서 가로 드래그
        dragConstraints={{
          top: 0, // 세로 드래그 위쪽 제한
          bottom: -(contentHeight - containerHeight), // 세로 드래그 아래쪽 제한
          left: isMobile ? 0 : -(sliderRef.current?.scrollWidth - containerWidth), // 가로 드래그 왼쪽 제한
          right: 0, // 가로 드래그 오른쪽 제한
        }}
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // 카드 정렬
          maxHeight: isMobile ? `${CARD_HEIGHT * 3 + GAP_HEIGHT * 2}px` : "auto", // 카드 3개 높이와 두 개의 간격을 합산하여 세로 길이 설정
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            style={{
              minWidth: isMobile ? "100%" : "300px", // 모바일에서는 100% 너비, 데스크탑에서는 300px 고정
              height: `${CARD_HEIGHT}px`, // 카드 높이 설정
              marginBottom: isMobile ? `${GAP_HEIGHT}px` : "0", // 모바일에서 카드 간 공백
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
