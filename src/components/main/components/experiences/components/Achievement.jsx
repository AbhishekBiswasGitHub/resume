import PropTypes from "prop-types";

import parse from "html-react-parser";

import "./Achievement.css";

const addLinks = (content, link) => {
  let newContent = content;

  for (let i = 0; i < link.length; i++) {
    const { text, url } = link[i];
    newContent = newContent.replace(
      text,
      `<a href="${url}" target="_blank" rel="noreferrer">${text}</a>`
    );
  }

  return parse(newContent);
};

const Achievement = ({ content, link }) => {
  return (
    <li className="achievement">
      {addLinks(content, link)}
    </li>
  );
};

Achievement.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.array.isRequired,
};

export default Achievement;
