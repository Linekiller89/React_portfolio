import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  const projectList = [
    { id: 1, name: "Project A", description: "Description of Project A" },
    { id: 2, name: "Project B", description: "Description of Project B" },
    // 추가 프로젝트 목록
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <ul>
        {projectList.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
