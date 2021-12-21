import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Basic from "./components/Basic";
import Questionnare from "./components/Questionnaire";
import Optional from "./components/Optional";
import Confirm from "./components/Confirm";

const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/Basic">
            <Basic />
          </Route>
          <Route path="/Questionnaire">
            <Questionnare />
          </Route>
          <Route path="/Optional">
            <Optional />
          </Route>
          <Route path="/Confirm">
            <Confirm />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};
export default App;
