import React from "react";
import Basic from "./Basic";
import Questionnaire, { QUESTIONS } from "./Questionnaire";
import Optional from "./Optional";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const UserInputData = React.createContext();

function Confirm() {
  // const [activeStep, setActiveStep] = React.useState(0);
  const [basicProfile, setBasicProfile] = React.useState({
    gender: null,
    year: null,
    month: null,
    day: null,
  });
  const [answers, setAnswers] = React.useState(
    Array(QUESTIONS.length).fill(null)
  );
  const [optionalRequest, setOptionalRequest] = React.useState({
    request: null,
  });
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ ...styles.page, ...styles.Confirm }}>
        <p style={styles.copy}>以下の内容をご確認下さい</p>
        <div style={{ textAlign: "center" }}>
          <Basic isConfirm {...basicProps} />
          <Questionnaire isConfirm {...questionnaireProps} />
          <Optional isConfirm {...optionalProps} />{" "}
        </div>
        <Link style={{ ...styles.copy, ...styles.link }} to="/Basic">
          送信
        </Link>
        <Link style={{ ...styles.copy, ...styles.link }} to="/Optional">
          戻る
        </Link>
      </div>
    </motion.div>
  );
}

export default Confirm;
