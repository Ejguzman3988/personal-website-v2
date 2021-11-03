import React, { useState, useEffect } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  }, []);

  const projectsJSX = (projects) => {
    if (projects.length === 0) return []; //handle initial state

    return projects.map((p, idx) => <Project key={idx} project={p} />);
  };

  return (
    <div className="projects">
      <div>{projectsJSX(projects)}</div>
    </div>
  );
};

export default Projects;
