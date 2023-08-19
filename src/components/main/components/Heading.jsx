import PropTypes from "prop-types";

import "./Heading.css";

const Heading = ({ content, icon }) => {
  return (
    <h3 className="heading">
      <i className={icon}></i>
      {content}
    </h3>
  );
};

Heading.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Heading;
