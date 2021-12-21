import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
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

const Questionnaire = ({ answers, setAnswers, isConfirm }) => {
  const handleAnswer = (answeredIndex, answer) => {
    setAnswers(answers.map((e, i) => (i === answeredIndex ? answer : e)));
  };
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ ...styles.page, ...styles.Questionnaire }}>
        <p style={styles.copy}>以下の質問にお答え下さい</p>
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
      <Link style={{ ...styles.copy, ...styles.link }} to="/Basic">
        次へ
      </Link>
      <Link style={{ ...styles.copy, ...styles.link }} to="/Optional">
        戻る
      </Link>
    </motion.div>
  );
};

export default Questionnaire;
