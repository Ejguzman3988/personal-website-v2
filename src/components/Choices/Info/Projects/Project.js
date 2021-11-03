import React from "react";
import "./Project.css";

const Project = ({ project }) => {
  return (
    <div className="project">
      <img className="project__image" src={project.image_url} />

      <h1 className="project__title">{project.project_name}</h1>
      <p className="project__description">{project.description}</p>
    </div>
  );
};

export default Project;
