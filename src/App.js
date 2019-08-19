import React from "react";
import "./App.css";
import Header from "./components/Header";
import Stories from "./components/Stories";
import { links as linksData } from "./data/header";
import storiesData from "./data/stories";
import appData from "./data/app";

function App() {
  return (
    <div className="App">
      <Header links={linksData} title={appData.appNameFriendly} />
      <Stories stories={storiesData} />
    </div>
  );
}

export default App;
