import PropTypes from "prop-types";

import Icon from "../../Icon";

import "./Contact.css";

const Contact = ({ content, url, icon }) => {
  return (
    <li className="contact">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon={icon} />
        <span>{content}</span>
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
