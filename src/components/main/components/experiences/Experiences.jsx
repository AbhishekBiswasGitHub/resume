import PropTypes from "prop-types";

import Heading from "../Heading";
import Experience from "./components/Experience";

import "./Experiences.css";

const Experiences = ({ experiences }) => {
  return (
    <section id="experiences">
      <Heading
        content="Experiences"
        icon="clock-rotate-left"
      />
      <ul id="experiences-list">
        {experiences.map((experience, index) => (
          <Experience
            key={index}
            experience={experience}
          />
        ))}
      </ul>
    </section>
  );
};

Experiences.propTypes = {
  experiences: PropTypes.object.isRequired,
};

export default Experiences;
