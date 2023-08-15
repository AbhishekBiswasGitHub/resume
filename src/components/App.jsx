import data from "../data/data.json";

import Header from "./header/Header";
import Main from "./main/Main";

import "./App.css";

const App = () => {
  const { header, main } = data;

  return (
    <div id="App">
      <Header header={header} />
      <Main main={main} />
    </div>
  );
};

export default App;
