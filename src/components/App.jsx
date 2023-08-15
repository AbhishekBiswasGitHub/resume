import data from "../data/data.json";

import Header from "./header/Header";

import "./App.css";

const App = () => {
  const { header } = data;

  return (
    <div id="App">
      <Header header={header} />
    </div>
  );
};

export default App;
