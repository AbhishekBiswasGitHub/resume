import PropTypes from "prop-types";

import Heading from "../Heading";
import SkillCategory from "./components/SkillCategory";

import "./Skills.css";

const Skills = ({ skillCategories }) => {
  return (
    <section id="skills">
      <Heading
        content="skills"
        icon="skills"
      />
      <ul id="skill-categories">
        {skillCategories.map(
          ({ category, skills }, index) =>
            skills.length ? (
              <SkillCategory
                key={index}
                category={category}
                skills={skills}
              />
            ) : null
        )}
      </ul>
    </section>
  );
};

Skills.propTypes = {
  skillCategories: PropTypes.array.isRequired,
};

export default Skills;
