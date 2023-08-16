import PropTypes from "prop-types";

import Period from "./Period";
import Title from "./Title";
import Achievements from "./Achievements";
import Technologies from "./Technologies";

import "./Experience.css";

const Experience = ({ experience }) => {
  const {
    role,
    employer,
    period,
    achievements,
    technologies,
  } = experience;

  return (
    <li className="experience">
      <Period
        start={period.start}
        end={period.end}
      />
      <div className="experience-details">
        <Title
          role={role}
          employer={employer}
        />
        <Achievements
          achievements={achievements}
        />
        <Technologies
          technologies={technologies}
        />
      </div>
    </li>
  );
};

Experience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default Experience;
