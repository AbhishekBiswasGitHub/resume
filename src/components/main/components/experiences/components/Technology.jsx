import PropTypes from "prop-types";

import parse from "html-react-parser";

import "./Technology.css";

const Technology = ({ name, url }) => {
  return (
    <li className="technology">
      {url
        ? parse(
            `<a href=${url} target="_blank" rel="noreferrer" >${name}</a>`
          )
        : name}
    </li>
  );
};

Technology.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Technology;
