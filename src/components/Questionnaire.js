import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { createBasicParameter } from "./Basic";
import { createParamArray } from "./paramUtil";

export const QUESTIONS = [
  "現在、生命保険に加入されていますか？",
  "現在、入院中ですか。また、3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことがありますか？",
  "過去、5年以内に病気やケガで手術を受けたことまたは継続して７日以上の入院をしたことはありますか？",
];

const Questionnaire = ({ isConfirm, data }) => {
  const handleAnswer = (answeredIndex, answer) => {
    setAnswers(answers.map((e, i) => (i === answeredIndex ? answer : e)));
  };
  const { search } = useLocation();
  const query = React.useMemo(() => new URLSearchParams(search), [search]);

  const gender = query.get("gender");
  const year = query.get("year");
  const month = query.get("month");
  const day = query.get("day");

  const basicProfile = React.useMemo(() => {
    return createBasicParameter({
      gender,
      year,
      month,
      day,
    });
  }, [gender, year, month, day]);

  const [answers, setAnswers] = React.useState(
    data ? data.split(",") : Array(QUESTIONS.length).fill(null)
  );

  const paramArray = React.useMemo(() => {
    return createParamArray({
      ...basicProfile,
      answers: answers.join(","),
    });
  }, [basicProfile, answers]);

  return (
    <>
      {!isConfirm ? (
        <p style={{ textAlign: "center" }}>以下の質問にお答え下さい</p>
      ) : null}

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
            <Link
              to={{
                pathname: `/Optional?${paramArray.join("&")}`,
              }}
            >
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
