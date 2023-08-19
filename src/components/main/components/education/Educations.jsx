import PropTypes from "prop-types";

import Heading from "../Heading";
import Education from "./components/Education";

import "./Educations.css";

const Educations = ({ educations }) => {
  return (
    <section id="educations">
      <Heading
        content="education"
        icon="educations"
      />
      <ul id="educations-list">
        {educations.map(
          (
            {
              degree,
              subject,
              institute: {
                name: instituteName,
                url: instituteUrl,
              },
              board: {
                name: boardName,
                url: boardUrl,
              },
              year,
            },
            index
          ) => (
            <Education
              key={index}
              degree={degree}
              subject={subject}
              instituteName={instituteName}
              instituteUrl={instituteUrl}
              boardName={boardName}
              boardUrl={boardUrl}
              year={year}
            />
          )
        )}
      </ul>
    </section>
  );
};

Educations.propTypes = {
  educations: PropTypes.array.isRequired,
};

export default Educations;
