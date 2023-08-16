import PropTypes from "prop-types";

import "./Period.css";

const MONTH = {
  "01": "jan",
  "02": "feb",
  "03": "mar",
  "04": "apr",
  "05": "may",
  "06": "jun",
  "07": "jul",
  "08": "aug",
  "09": "sep",
  10: "oct",
  11: "nov",
  12: "dec",
};

const formatTime = (time = "2021-12") => {
  const year = time.split("-")[0];
  const month = MONTH[time.split("-")[1]];

  return `${month.toUpperCase()} ${year}`;
};

const Period = ({ start, end }) => {
  return (
    <div className="experience-period">
      <p className="experience-end">
        {formatTime(end)}
      </p>
      <p className="experience-start">
        {formatTime(start)}
      </p>
    </div>
  );
};

Period.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

export default Period;
