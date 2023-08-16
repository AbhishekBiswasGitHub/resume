import PropTypes from "prop-types";

import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Experiences from "./components/experiences/Experiences";
import Educations from "./components/education/Educations";
import Certifications from "./components/certifications/Certifications";

import "./Main.css";

const Main = ({ main }) => {
  const {
    intro,
    skills,
    experiences,
    educations,
    // projects,
    certifications,
  } = main;
  return (
    <main id="main">
      <Intro intro={intro} />
      <Skills skills={skills} />
      <Experiences experiences={experiences} />
      <Educations educations={educations} />
      <Certifications
        certifications={certifications}
      />
    </main>
  );
};

Main.propTypes = {
  main: PropTypes.object.isRequired,
};

export default Main;
