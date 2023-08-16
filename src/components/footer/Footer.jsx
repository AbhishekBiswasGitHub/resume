import PropTypes from "prop-types";

import "./Footer.css";

const Footer = ({
  author: { firstName = "", lastName },
  updatedOn,
}) => {
  return (
    <footer id="footer">
      <p id="author">
        <span id="author-first-name">
          <span className="author-name-first-letter">
            {firstName[0]}
          </span>
          {firstName.substring(
            1,
            firstName.length
          )}
        </span>{" "}
        <span id="author-last-name">
          <span className="author-name-first-letter">
            {lastName[0]}
          </span>
          {lastName.substring(1, lastName.length)}
        </span>
      </p>
      <p id="updated-on">
        last updated on
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
