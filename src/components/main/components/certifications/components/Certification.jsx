import PropTypes from "prop-types";
import parser from "html-react-parser";

import "./Certification.css";

const Certification = ({
  subject,
  url,
  instituteName,
  instituteUrl,
}) => {
  return (
    <li className="certification">
      {parser(
        `Certified in <a href=${url} target="_blank" rel="noreferrer">${subject}</a> by <a href=${instituteUrl} target="_blank" rel="noreferrer">${instituteName}</a>`
      )}
    </li>
  );
};

Certification.propTypes = {
  subject: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  instituteName: PropTypes.string.isRequired,
  instituteUrl: PropTypes.string.isRequired,
};

export default Certification;
