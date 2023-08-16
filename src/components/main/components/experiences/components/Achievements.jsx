import PropTypes from "prop-types";

import Achievement from "./Achievement";

import "./Achievements.css";

const Achievements = ({ achievements }) => {
  return (
    <ul className="achievements">
      {achievements.map(
        ({ content, link }, index) => (
          <Achievement
            key={index}
            content={content}
            link={link}
          />
        )
      )}
    </ul>
  );
};

Achievements.propTypes = {
  achievements: PropTypes.array.isRequired,
};

export default Achievements;
