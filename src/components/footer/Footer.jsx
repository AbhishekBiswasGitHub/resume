import PropTypes from "prop-types";

import "./Footer.css";

const Footer = ({
  author: { firstName, lastName },
  updatedOn,
}) => {
  return (
    <footer id="footer">
      <p id="author">
        {firstName} {lastName}
      </p>
      <p id="updated-on">
        updated on
        <span id="updated-on-date">
          {updatedOn}
        </span>
      </p>
    </footer>
  );
};

Footer.propTypes = {
  author: PropTypes.object.isRequired,
  updatedOn: PropTypes.string.isRequired,
};

export default Footer;
