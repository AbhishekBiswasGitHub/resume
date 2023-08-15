import PropTypes from "prop-types";

import "./Heading.css";

const Heading = ({ content, icon }) => {
  return (
    <h3 className="heading">
      <i className={`fa-solid fa-${icon}`}></i>
      <span className="heading-first-letter">
        {content[0]}
      </span>
      {content.substring(1, content.length)}
    </h3>
  );
};

Heading.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Heading;
