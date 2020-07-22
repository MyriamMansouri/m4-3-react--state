import React from "react";

import GlobalStyles from "./GlobalStyles";
import Typeahead from "./Typeahead";
import data from "../data";


const handleSelect = (suggestion) => {
  window.alert(suggestion)
};


const App = (props) => {
  
  return (
    <>
      <GlobalStyles />
      <Typeahead suggestions={data.books} handleSelect={handleSelect} />
    </>
  );
};

export default App;
