import PropTypes from "prop-types";

import Heading from "../Heading";
import Skill from "./components/Skill";

import "./Skills.css";

const Skills = ({ skillCategories }) => {
  return (
    <section id="skills">
      <Heading
        content="skills"
        icon="fa-solid fa-screwdriver-wrench"
      />
      <ul id="skill-categories">
        {skillCategories.map(
          ({ category, skills }, index) =>
            skills.length ? (
              <Skill
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
