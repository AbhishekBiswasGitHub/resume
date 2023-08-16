import PropTypes from "prop-types";

import "./Title.css";

const Title = ({ role, employer }) => {
  return (
    <p className="employment-title">
      <span className="role">{role}</span>
      {employer ? ", " : ""}
      {employer ? (
        <a
          className="employer"
          href={employer.url}
          target="_blank"
          rel="noreferrer"
        >
          {employer.name}
        </a>
      ) : null}
    </p>
  );
};

Title.propTypes = {
  role: PropTypes.string.isRequired,
  employer: PropTypes.object,
};

export default Title;
