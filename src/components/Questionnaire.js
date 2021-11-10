import React from "react";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export const QUESTIONS = [
  "現在、生命保険に加入されていますか？",
  "現在、入院中ですか。また、3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことがありますか？",
  "過去、5年以内に病気やケガで手術を受けたことまたは継続して７日以上の入院をしたことはありますか？",
];

const Questionnaire = ({ answers, setAnswers }) => {
  const handleAnswer = (answeredIndex, answer) => {
    setAnswers(answers.map((e, i) => (i === answeredIndex ? answer : e)));
  };
  return (
    <div>
      <FormControl component="fieldset">
        {answers
          .filter((_, i) => i === 0 || answers[i - 1])
          .map((answer, i) => (
            <React.Fragment key={i}>
              <FormLabel component="legend">{QUESTIONS[i]}</FormLabel>
              {answer ? (
                <Typography>{answer === "yes" ? "はい" : "いいえ"}</Typography>
              ) : (
                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                  onChange={(_evt, value) => {
                    handleAnswer(i, value);
                  }}
                >
                  <FormControlLabel value="yes" control={<Radio />} label="はい" />
                  <FormControlLabel value="no" control={<Radio />} label="いいえ" />
                </RadioGroup>
              )}
            </React.Fragment>
          ))}
      </FormControl>
    </div>
  );
};

export default Questionnaire;
