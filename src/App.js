import React, { Fragment, useEffect } from "react";

import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    // init materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </Fragment>
  );
};

// 11.5

export default App;
