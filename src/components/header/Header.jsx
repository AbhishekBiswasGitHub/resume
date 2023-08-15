import PropTypes from "prop-types";

import Profile from "./components/Profile";
import Contacts from "./components/Contacts";

import "./Header.css";

const Header = ({ header }) => {
  const { profile, contacts } = header;
  const { name, role } = profile;
  const { personal, social } = contacts;

  return (
    <header id="header">
      <Profile
        name={name}
        role={role}
      />
      <Contacts
        personal={personal}
        social={social}
      />
    </header>
  );
};

Header.propTypes = {
  header: PropTypes.object.isRequired,
};

export default Header;
