import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Updates from "./components/Updates";
import Help from "./components/Help";
import Subcribe from "./components/Subcribe";

const App = () => {
  return (
    <div>
      <Home />
      <div className="">
        <About />
        <Services />
      </div>
      <Updates />
      <Help />
      <Subcribe />
    </div>
  );
};

export default App;
