import PropTypes from "prop-types";

import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Experiences from "./components/experiences/Experiences";
import Educations from "./components/education/Educations";
import Projects from "./components/projects/Projects";
import Certifications from "./components/certifications/Certifications";

import "./Main.css";

const Main = ({
  intro,
  skillCategories,
  experiences,
  educations,
  projects,
  certifications,
}) => {
  return (
    <main id="main">
      {intro ? <Intro intro={intro} /> : null}
      {skillCategories.length ? (
        <Skills
          skillCategories={skillCategories}
        />
      ) : null}
      {experiences.length ? (
        <Experiences experiences={experiences} />
      ) : null}
      {educations.length ? (
        <Educations educations={educations} />
      ) : null}
      {projects.length ? (
        <Projects projects={projects} />
      ) : null}
      {certifications.length ? (
        <Certifications
          certifications={certifications}
        />
      ) : null}
    </main>
  );
};

Main.propTypes = {
  intro: PropTypes.string.isRequired,
  skillCategories: PropTypes.array.isRequired,
  experiences: PropTypes.array.isRequired,
  educations: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
  certifications: PropTypes.array.isRequired,
};

export default Main;
