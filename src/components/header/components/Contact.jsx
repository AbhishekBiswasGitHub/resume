import PropTypes from "prop-types";

import "./Contact.css";

const Contact = ({ content, url, icon }) => {
  return (
    <li className="contact">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <i className={icon}></i>
        {content}
      </a>
    </li>
  );
};

Contact.propTypes = {
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Contact;
