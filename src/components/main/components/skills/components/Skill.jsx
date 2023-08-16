import PropTypes from "prop-types";

import "./Skill.css";

const Skill = ({ category, skills }) => {
  return (
    <li className="skill-category">
      <p className="skill-category-name">
        {category}
      </p>
      <p className="skills">
        {skills.map((skill, index) => (
          <span
            className="skill"
            key={index}
          >
            {skill}
          </span>
        ))}
      </p>
    </li>
  );
};

Skill.propTypes = {
  category: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};

export default Skill;
