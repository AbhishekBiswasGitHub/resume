import PropTypes from "prop-types";

import "./Main.css";
import Intro from "./intro/Intro";

const Main = ({ main }) => {
  const {
    intro,
    // skills,
    // experiences,
    // education,
    // projects,
    // certifications,
  } = main;
  return (
    <main id="main">
      <Intro intro={intro} />
    </main>
  );
};

Main.propTypes = {
  main: PropTypes.object.isRequired,
};

export default Main;
