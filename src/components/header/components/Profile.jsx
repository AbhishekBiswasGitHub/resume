import PropTypes from "prop-types";

import "./Profile.css";

const Profile = ({
  name: { first: firstName, last: lastName },
  role,
}) => {
  return (
    <section id="profile">
      <h1 id="name">
        <span id="first-name">{firstName} </span>
        <span id="last-name-first-letter">
          {lastName[0]}
        </span>
        <span id="last-name">
          {lastName.substring(1, lastName.length)}
        </span>
      </h1>
      <h2 id="role">{role}</h2>
    </section>
  );
};

Profile.propTypes = {
  name: PropTypes.object.isRequired,
  role: PropTypes.string.isRequired,
};

export default Profile;
