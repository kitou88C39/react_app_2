import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import Optional from "./Optional";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

export const QUESTIONS = [
  "現在、生命保険に加入されていますか？",
  "現在、入院中ですか。また、3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことがありますか？",
  "過去、5年以内に病気やケガで手術を受けたことまたは継続して７日以上の入院をしたことはありますか？",
];

const Questionnaire = ({ isConfirm }) => {
  const handleAnswer = (answeredIndex, answer) => {
    setAnswers(answers.map((e, i) => (i === answeredIndex ? answer : e)));
  };
  const [answers, setAnswers] = React.useState(
    Array(QUESTIONS.length).fill(null)
  );
  return (
    <>
      {!isConfirm ? (
        <p style={{ textAlign: "center" }}>以下の質問にお答え下さい</p>
      ) : null}
      {/* <Optional /> */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ textAlign: "center" }}>
          <FormControl component="fieldset">
            {answers
              .filter((_, i) => i === 0 || answers[i - 1])
              .map((answer, i) => (
                <React.Fragment key={i}>
                  <FormLabel component="legend">{QUESTIONS[i]}</FormLabel>
                  {isConfirm ? (
                    <Typography>
                      {answer === "yes" ? "はい" : "いいえ"}
                    </Typography>
                  ) : (
                    <RadioGroup
                      row
                      aria-label="gender"
                      name="row-radio-buttons-group"
                      onChange={(_evt, value) => {
                        handleAnswer(i, value);
                      }}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="はい"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="いいえ"
                      />
                    </RadioGroup>
                  )}
                </React.Fragment>
              ))}
          </FormControl>
        </div>
        {!isConfirm ? (
          <div style={{ textAlign: "center" }}>
            <Link to="/">
              <Button variant="outlined" size="medium">
                戻る
              </Button>
            </Link>
            <Link to="/Optional">
              <Button variant="contained" size="medium">
                次へ
              </Button>
            </Link>
          </div>
        ) : null}
      </motion.div>
    </>
  );
};

export default Questionnaire;
