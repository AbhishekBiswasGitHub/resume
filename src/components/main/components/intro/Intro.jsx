import PropTypes from "prop-types";

import "./Intro.css";

const Intro = ({ intro }) => {
  return <p id="intro">{intro}</p>;
};

Intro.propTypes = {
  intro: PropTypes.string.isRequired,
};

export default Intro;
