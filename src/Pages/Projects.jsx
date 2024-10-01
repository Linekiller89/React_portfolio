import React from "react";
import { Link } from "react-router-dom";

function Projects() {
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
    <div className="projects">
      <h2>My Projects</h2>
      <ul>
        {projectList.map((project) => (
          <li key={project.id}>
            <Link to={`/pages/projects/${project.id}`}>
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
