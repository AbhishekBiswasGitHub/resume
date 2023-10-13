import PropTypes from "prop-types";

import "./Title.css";

const Title = ({ role, employer }) => {
  return (
    <p className="employment-title">
      <span className="role">{role}</span>
      {employer ? ", " : ""}
      {employer ? (
        employer.url ? (
          <a
            className="employer"
            href={employer.url}
            target="_blank"
            rel="noreferrer"
          >
            {employer.name}
          </a>
        ) : (
          <span className="employer">
            {employer.name}
          </span>
        )
      ) : null}
    </p>
  );
};

Title.propTypes = {
  role: PropTypes.string.isRequired,
  employer: PropTypes.object,
};

export default Title;
