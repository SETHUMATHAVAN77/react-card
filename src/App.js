import React from "react";
import Navbar from "./components/Navbar";

import { useGlobalContext } from "./Features/Context";

import CardContainer from "./components/CardContainer";
const App = () => {
  return (
    <>
      <Navbar />
      <CardContainer />
    </>
  );
};

export default App;
