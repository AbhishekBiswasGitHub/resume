import PropTypes from "prop-types";

import "./Technology.css";

const Technology = ({ technology }) => {
  return (
    <li className="technology">{technology}</li>
  );
};

Technology.propTypes = {
  technology: PropTypes.string.isRequired,
};

export default Technology;
