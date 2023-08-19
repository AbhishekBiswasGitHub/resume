import PropTypes from "prop-types";

import Profile from "./components/Profile";
import Contacts from "./components/Contacts";

import "./Header.css";

const Header = ({
  profile: { name, role },
  contacts: { personal, social },
  pdf,
}) => {
  return (
    <header id="header">
      <Profile
        firstName={name.first}
        lastName={name.last}
        role={role}
        pdf={pdf}
      />
      <Contacts
        personal={personal}
        social={social}
      />
    </header>
  );
};

Header.propTypes = {
  profile: PropTypes.object.isRequired,
  contacts: PropTypes.object.isRequired,
  pdf: PropTypes.string.isRequired,
};

export default Header;
