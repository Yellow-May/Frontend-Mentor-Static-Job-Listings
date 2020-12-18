import React, { Component } from "react";

import { JobProvider } from "./context/JobContext";

import Header from "./components/Header";
import Filter from "./components/Filter";
import Main from "./components/Main";

import "./app.css";

class App extends Component {
  render() {
    return (
      <JobProvider>
        <Header />
        <Filter />
        <Main />
      </JobProvider>
    );
  }
}

export default App;
