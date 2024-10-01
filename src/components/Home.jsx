import React from "react";
import ProjectSlider from "./ProjectSlider"; // 슬라이더 컴포넌트 추가

const Home = () => {
  const projectList = [
    {
      id: 1,
      name: "테슬라 클론코딩",
      description: "테슬라 메인페이지 클론코딩",
      imageUrl: "/images/tesla-clone.jpg",
    },
    {
      id: 2,
      name: "Project B",
      description: "Description of Project B",
      imageUrl: "/images/project-b.jpg",
    },
    {
      id: 3,
      name: "Project C",
      description: "Description of Project C",
      imageUrl: "/images/project-c.jpg",
    },
    {
      id: 4,
      name: "Project C",
      description: "Description of Project C",
      imageUrl: "/images/project-c.jpg",
    },
  ];

  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      {/* projectList를 ProjectSlider에 전달 */}
      <ProjectSlider projectList={projectList} />
    </div>
  );
};

export default Home;
