import PropTypes from "prop-types";

import Technology from "./Technology";

import "./Technologies.css";

const Technologies = ({ technologies }) => {
  return (
    <ul className="technologies">
      {technologies.map((technology, index) => (
        <Technology
          key={index}
          technology={technology}
        />
      ))}
    </ul>
  );
};

Technologies.propTypes = {
  technologies: PropTypes.array.isRequired,
};

export default Technologies;
