import PropTypes from "prop-types";

import Heading from "../Heading";
import Project from "./components/Project";

import "./Projects.css";

const Projects = ({ projects }) => {
  return (
    <section id="projects">
      <Heading
        content="projects"
        icon="projects"
      />
      <ul id="projects-list">
        {projects.map(
          (
            {
              name,
              year,
              live,
              source,
              description,
              technologies,
            },
            index
          ) => (
            <Project
              key={index}
              name={name}
              year={year}
              live={live}
              source={source}
              description={description}
              technologies={technologies}
            />
          )
        )}
      </ul>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;
