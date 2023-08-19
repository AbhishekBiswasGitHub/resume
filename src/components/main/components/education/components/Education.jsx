import PropTypes from "prop-types";

import "./Education.css";

const Education = ({
  degree,
  subject,
  instituteName,
  instituteUrl,
  boardName,
  boardUrl,
  year,
}) => {
  return (
    <li className="education">
      <p className="education-year">{year}</p>
      <p className="education-details">
        <span className="bold">{degree}</span>
        {` in `}
        <span className="bold">{subject}</span>
        {` from `}
        <a
          href={instituteUrl}
          target="_blank"
          rel="noreferrer"
        >
          {instituteName}
        </a>
        {` under `}
        <a
          href={boardUrl}
          target="_blank"
          rel="noreferrer"
        >
          {boardName}
        </a>
      </p>
    </li>
  );
};

Education.propTypes = {
  degree: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  instituteName: PropTypes.string.isRequired,
  instituteUrl: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
  boardUrl: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default Education;
