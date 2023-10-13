import PropTypes from "prop-types";

import Technologies from "../../Technologies";

import "./Project.css";
import Link from "./Link";

const Project = ({
  name,
  year,
  live,
  source,
  description,
  technologies,
}) => {
  return (
    <li className="project">
      <div className="title">
        <span>{name}</span>
        <span>{year}</span>
      </div>
      <div className="links">
        <Link
          title="Live Demo"
          link={live}
        />
        <Link
          title="Source Code"
          link={source}
        />
      </div>
      <p>{description}</p>
      <Technologies technologies={technologies} />
    </li>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
};

export default Project;
