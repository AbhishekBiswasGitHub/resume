import PropTypes from "prop-types";

import Period from "./Period";
import Title from "./Title";
import Achievements from "./Achievements";
import Technologies from "../../Technologies";

import "./Experience.css";

const Experience = ({
  role,
  employer,
  period: { start, end },
  achievements,
  technologies,
}) => {
  return (
    <li className="experience">
      <Period
        start={start}
        end={end}
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
  role: PropTypes.string.isRequired,
  employer: PropTypes.object,
  period: PropTypes.object.isRequired,
  achievements: PropTypes.array.isRequired,
  technologies: PropTypes.array.isRequired,
};

export default Experience;
