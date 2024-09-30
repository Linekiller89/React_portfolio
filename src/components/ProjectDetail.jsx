import React from "react";
import { useParams } from "react-router-dom";

const projectDetails = {
  1: {
    title: "Project One",
    description: "Detailed info about project one",
    imageUrl: "/images/project1.jpg",
  },
  2: {
    title: "Project Two",
    description: "Detailed info about project two",
    imageUrl: "/images/project2.jpg",
  },
  3: {
    title: "Project Three",
    description: "Detailed info about project three",
    imageUrl: "/images/project3.jpg",
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} />
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
