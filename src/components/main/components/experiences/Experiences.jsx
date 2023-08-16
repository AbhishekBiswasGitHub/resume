import PropTypes from "prop-types";

import Heading from "../Heading";
import Experience from "./components/Experience";

import "./Experiences.css";

const Experiences = ({ experiences }) => {
  return (
    <section id="experiences">
      <Heading
        content="Experiences"
        icon="fa-solid fa-clock-rotate-left"
      />
      <ul id="experiences-list">
        {experiences.map(
          (
            {
              role,
              employer,
              period,
              achievements,
              technologies,
            },
            index
          ) => (
            <Experience
              key={index}
              role={role}
              employer={employer}
              period={period}
              achievements={achievements}
              technologies={technologies}
            />
          )
        )}
      </ul>
    </section>
  );
};

Experiences.propTypes = {
  experiences: PropTypes.array.isRequired,
};

export default Experiences;
