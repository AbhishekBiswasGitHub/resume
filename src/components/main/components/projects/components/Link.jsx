import PropTypes from "prop-types";

import "./Link.css";

const Link = ({ title, link }) => {
  return (
    <p className="link">
      {`${title}: `}
      <a
        href={`http://${link}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link}
      </a>
    </p>
  );
};

Link.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Link;
