import PropTypes from "prop-types";

import "./Period.css";

const Period = ({ start, end }) => {
  return (
    <div className="experience-period">
      <p className="experience-end">{end}</p>
      <p className="experience-start">{start}</p>
    </div>
  );
};

Period.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

export default Period;
