import data from "../data/data.json";

import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

import "./App.css";

const App = () => {
  const {
    header: { profile, contacts },
    main: {
      intro,
      skillCategories,
      experiences,
      educations,
      projects,
      certifications,
    },
    footer: { author, updatedOn },
  } = data;

  return (
    <div id="App">
      <Header
        profile={profile}
        contacts={contacts}
      />
      <Main
        intro={intro}
        skillCategories={skillCategories}
        experiences={experiences}
        educations={educations}
        projects={projects}
        certifications={certifications}
      />
      <Footer
        author={author}
        updatedOn={updatedOn}
      />
    </div>
  );
};

export default App;
