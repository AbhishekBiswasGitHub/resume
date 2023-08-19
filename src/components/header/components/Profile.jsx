import PropTypes from "prop-types";

import Icon from "../../Icon";

import "./Profile.css";

const Profile = ({
  firstName,
  lastName,
  role,
  pdf,
}) => {
  return (
    <section id="profile">
      <div id="pdf-container">
        <h1 id="name">
          <span id="first-name">
            {firstName}{" "}
          </span>
          <span id="last-name">{lastName}</span>
        </h1>
        <a
          id="pdf"
          href={`https://${pdf}`}
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="pdf" />
        </a>
      </div>
      <h2 id="role">{role}</h2>
    </section>
  );
};

Profile.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  pdf: PropTypes.string.isRequired,
};

export default Profile;
