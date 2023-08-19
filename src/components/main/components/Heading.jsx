import PropTypes from "prop-types";

import Icon from "../../Icon";

import "./Heading.css";

const Heading = ({ content, icon }) => {
  return (
    <h3 className="heading">
      <Icon icon={icon} />
      <span>{content}</span>
    </h3>
  );
};

Heading.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Heading;
