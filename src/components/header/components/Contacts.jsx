import PropTypes from "prop-types";

import Contact from "./Contact";

import "./Contacts.css";

const Contacts = ({ personal, social }) => {
  return (
    <section id="contacts">
      <ul id="personal-contacts">
        {personal.map(
          ({ content, url, icon }, index) => (
            <Contact
              key={index}
              content={content}
              url={url}
              icon={icon}
            />
          )
        )}
      </ul>
      <ul id="social-contacts">
        {social.map(
          ({ content, url, icon }, index) => (
            <Contact
              key={index}
              content={content}
              url={url}
              icon={icon}
            />
          )
        )}
      </ul>
    </section>
  );
};

Contacts.propTypes = {
  personal: PropTypes.array.isRequired,
  social: PropTypes.array.isRequired,
};

export default Contacts;
