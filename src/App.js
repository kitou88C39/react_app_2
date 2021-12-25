import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Basic from "./components/Basic";
import Questionnaire from "./components/Questionnaire";
import Optional from "./components/Optional";
import Confirm from "./components/Confirm";
import { AppBar, Toolbar } from "@mui/material";

const App = () => {
  const location = useLocation();
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "primary" }}>
        <Toolbar>React課題 ④</Toolbar>{" "}
      </AppBar>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Basic />}></Route>
          <Route path="/Questionnaire" element={<Questionnaire />}></Route>
          <Route path="/Optional" element={<Optional />}></Route>
          <Route path="/Confirm" element={<Confirm />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};
export default App;
