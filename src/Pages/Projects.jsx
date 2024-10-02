import React from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.css"; // 스타일 파일 경로는 styles 폴더에서 임포트

export const projectList = [
  {
    id: 1,
    yearRange: "2021 - 2024",
    name: "Bitrefill",
    description: "Led design & development of Bitrefill...",
    caseStudy: "/case-study/bitrefill",
    imageUrl: "/images/bitrefill.jpg",
  },
  {
    id: 2,
    yearRange: "2016 - 2021",
    name: "Tracklib",
    description: "At music startup Tracklib I worked across...",
    caseStudy: "/case-study/tracklib",
    imageUrl: "/images/tracklib.jpg",
  },
  {
    id: 3,
    yearRange: "2021 - Now",
    name: "Trail Routes",
    description: "I build Trail Routes as a side project...",
    caseStudy: "/case-study/trail-routes",
    imageUrl: "/images/trailroutes.jpg",
  },
  {
    id: 4,
    yearRange: "asdsadasdasdasd",
    name: "Trail adasdsadsadsadsadsad",
    description: "I builasdsadasdsadsadasdsadsadsadsade project...",
    caseStudy: "/case-study/trail-routes",
    imageUrl: "/images/trailroutes.jpg",
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-header">Selected Projects</h2>
      <div className="projects-list">
        {projectList.map((project) => (
          <div key={project.id} className="project-item">
            <div className="project-text">
              <span className="project-year">{project.yearRange}</span>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <Link to={project.caseStudy} className="case-study-link">
                Read case study
              </Link>
            </div>
            <div className="project-image">
              <img src={project.imageUrl} alt={project.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;