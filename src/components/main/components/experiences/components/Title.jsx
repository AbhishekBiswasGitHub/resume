import PropTypes from "prop-types";

import "./Title.css";

const Title = ({ role, employer }) => {
  return (
    <p className="employment-title">
      <span className="role">{role}</span>
      <span>, </span>
      <a
        className="employer"
        href={employer.url}
        target="_blank"
        rel="noreferrer"
      >
        {employer.name}
      </a>
    </p>
  );
};

Title.propTypes = {
  role: PropTypes.string.isRequired,
  employer: PropTypes.object.isRequired,
};

export default Title;
