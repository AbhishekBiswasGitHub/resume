import PropTypes from "prop-types";

import Heading from "../Heading";
import Certification from "./components/Certification";

import "./Certifications.css";

const Certifications = ({ certifications }) => {
  return (
    <section id="certifications">
      <Heading
        content="certifications"
        icon="certifications"
      />
      <ul id="certifications-list">
        {certifications.map(
          (
            {
              subject,
              url,
              institute: {
                name: instituteName,
                url: instituteUrl,
              },
            },
            index
          ) => (
            <Certification
              key={index}
              subject={subject}
              url={url}
              instituteName={instituteName}
              instituteUrl={instituteUrl}
            />
          )
        )}
      </ul>
    </section>
  );
};

Certifications.propTypes = {
  certifications: PropTypes.array.isRequired,
};

export default Certifications;
