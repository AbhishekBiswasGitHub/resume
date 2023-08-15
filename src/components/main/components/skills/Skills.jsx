import PropTypes from "prop-types";

import "./Skills.css";
import Heading from "../Heading";
import Skill from "./components/Skill";

const Skills = ({ skills }) => {
  const {
    expert,
    proficient,
    intermediate,
    basic,
    devTools,
    language,
  } = skills;
  return (
    <section id="skills">
      <Heading
        content="skills"
        icon="screwdriver-wrench"
      />
      <ul id="skill-categories">
        {expert.length ? (
          <Skill
            category="expert"
            skills={expert}
          />
        ) : null}
        {proficient.length ? (
          <Skill
            category="proficient"
            skills={proficient}
          />
        ) : null}
        {intermediate.length ? (
          <Skill
            category="intermediate"
            skills={intermediate}
          />
        ) : null}
        {basic.length ? (
          <Skill
            category="basic"
            skills={basic}
          />
        ) : null}
        {devTools.length ? (
          <Skill
            category="dev-Tools"
            skills={devTools}
          />
        ) : null}
        {language.length ? (
          <Skill
            category="language"
            skills={language}
          />
        ) : null}
      </ul>
    </section>
  );
};

Skills.propTypes = {
  skills: PropTypes.object.isRequired,
};

export default Skills;
