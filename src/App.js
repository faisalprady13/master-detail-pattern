import React from "react";
import "./App.css";
import articles from "./articles.json";
import MasterDetail from "./components/MasterDetail/MasterDetail";
import "./assets/scss/main.scss";

function App() {
  return (
    <div className="App">
      <MasterDetail articles={articles} />
    </div>
  );
}

export default App;
