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

  return newContent;
};

const addBold = (content, bold) => {
  let newContent = content;

  for (let i = 0; i < bold.length; i++) {
    const text = bold[i];
    newContent = newContent.replace(
      text,
      `<span className="bold">${text}</span>`
    );
  }

  return parse(newContent);
};

const Achievement = ({ content, link, bold }) => {
  return (
    <li className="achievement">
      {addBold(addLinks(content, link), bold)}
    </li>
  );
};

Achievement.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.array.isRequired,
  bold: PropTypes.array.isRequired,
};

export default Achievement;
