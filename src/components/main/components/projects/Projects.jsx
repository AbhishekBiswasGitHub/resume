import PropTypes from "prop-types";

import Heading from "../Heading";

import "./Projects.css";

const Projects = ({ projects }) => {
  return (
    <section id="projects">
      <Heading
        content="projects"
        icon="fa-solid fa-diagram-project"
      />
      <ul id="projects-list">
        {projects.map(({ title }, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;
