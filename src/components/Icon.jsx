import PropTypes from "prop-types";

import addressIcon from "../assets/icons/address.svg";
import certificationsIcon from "../assets/icons/certifications.svg";
import educationsIcon from "../assets/icons/education.svg";
import experiencesIcon from "../assets/icons/experiences.svg";
import githubIcon from "../assets/icons/github.svg";
import hackerrankIcon from "../assets/icons/hackerrank.svg";
import leetcodeIcon from "../assets/icons/leetcode.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import mailIcon from "../assets/icons/mail.svg";
import pdfIcon from "../assets/icons/pdf.svg";
import phoneIcon from "../assets/icons/phone.svg";
import projectsIcon from "../assets/icons/projects.svg";
import skillsIcon from "../assets/icons/skills.svg";
import webIcon from "../assets/icons/web.svg";

const Icon = ({ icon }) => {
  const icons = {
    address: addressIcon,
    certifications: certificationsIcon,
    educations: educationsIcon,
    experiences: experiencesIcon,
    github: githubIcon,
    hackerrank: hackerrankIcon,
    leetcode: leetcodeIcon,
    linkedin: linkedinIcon,
    mail: mailIcon,
    pdf: pdfIcon,
    phone: phoneIcon,
    projects: projectsIcon,
    skills: skillsIcon,
    web: webIcon,
  };

  return (
    <img
      className="icon"
      src={icons[icon]}
      alt={`${icon}-icon`}
    />
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
