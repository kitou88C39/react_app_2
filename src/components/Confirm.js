import React from "react";
import Basic from "./Basic";
import Questionnaire, { QUESTIONS } from "./Questionnaire";
import Optional from "./Optional";

export const UserInputData = React.createContext();

function Confirm() {
  const [currentState, setCurrentState] = React.useState({});
  const [answers, setAnswers] = React.useState(Array(QUESTIONS.length).fill(null));

  const value = {
    currentState,
    setCurrentState,
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Basic />
      <Questionnaire answers={answers} setAnswers={setAnswers} />
      <Optional />
    </div>
  );
}

export default Confirm;
