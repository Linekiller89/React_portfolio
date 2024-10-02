import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../Pages/Projects";

function ProjectDetail() {
  const { id } = useParams(); // URL의 id 파라미터를 가져옴

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
