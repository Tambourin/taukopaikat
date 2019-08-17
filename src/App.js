import React, { useState, useEffect } from "react";
import placesService from "./services/placesService";
import ResultsList from "./components/ResultsList";

const App = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    placesService.getAll().then(results => setState(results));
  }, []);

  return (
    <div>
      <ResultsList state={state} />
      jeou
    </div>
  );
};

export default App;
