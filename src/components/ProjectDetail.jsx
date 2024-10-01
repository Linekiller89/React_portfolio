import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetail() {
  const { id } = useParams(); // URL의 id 파라미터를 가져옴

  const projectList = [
    {
      id: 1,
      name: "테슬라 클론코딩",
      description: "테슬라 메인페이지 클론코딩",
    },
    { id: 2, name: "Project B", description: "Description of Project B" },
    // 추가 프로젝트 목록
  ];

  const project = projectList.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-detail">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectDetail;
