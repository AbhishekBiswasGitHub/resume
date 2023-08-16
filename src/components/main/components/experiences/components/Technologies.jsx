import PropTypes from "prop-types";

import Technology from "./Technology";

import "./Technologies.css";

const Technologies = ({ technologies }) => {
  return (
    <ul className="technologies">
      {technologies.map(
        ({ name, url }, index) => (
          <Technology
            key={index}
            name={name}
            url={url}
          />
        )
      )}
    </ul>
  );
};

Technologies.propTypes = {
  technologies: PropTypes.array.isRequired,
};

export default Technologies;
