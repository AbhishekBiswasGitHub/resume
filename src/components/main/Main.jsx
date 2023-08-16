import PropTypes from "prop-types";

import "./Main.css";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Experiences from "./components/experiences/Experiences";

const Main = ({ main }) => {
  const {
    intro,
    skills,
    experiences,
    // education,
    // projects,
    // certifications,
  } = main;
  return (
    <main id="main">
      <Intro intro={intro} />
      <Skills skills={skills} />
      <Experiences experiences={experiences} />
    </main>
  );
};

Main.propTypes = {
  main: PropTypes.object.isRequired,
};

export default Main;
