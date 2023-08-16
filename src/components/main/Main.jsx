import PropTypes from "prop-types";

import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Experiences from "./components/experiences/Experiences";

import "./Main.css";
import Educations from "./components/education/Educations";

const Main = ({ main }) => {
  const {
    intro,
    skills,
    experiences,
    educations,
    // projects,
    // certifications,
  } = main;
  return (
    <main id="main">
      <Intro intro={intro} />
      <Skills skills={skills} />
      <Experiences experiences={experiences} />
      <Educations educations={educations} />
    </main>
  );
};

Main.propTypes = {
  main: PropTypes.object.isRequired,
};

export default Main;
