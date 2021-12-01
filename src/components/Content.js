import React from "react";
import { Grid } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Basic from "./Basic";
import Questionnaire, { QUESTIONS } from "./Questionnaire";
import Optional from "./Optional";

function getSteps() {
  return [
    "お客様の情報を入力して下さい",
    "以下にお答え下さい",
    "ご相談下さい",
    "以下の内容をご確認下さい",
  ];
}

const StepContent = ({
  stepIndex,
  basicProps,
  questionnaireProps,
  optionalProps,
}) => {
  switch (stepIndex) {
    case 0:
      return <Basic {...basicProps} />;
    case 1:
      return <Questionnaire {...questionnaireProps} />;
    case 2:
      return <Optional {...optionalProps} />;
    case 3:
      return (
        <div style={{ textAlign: "center" }}>
          <Basic isConfirm {...basicProps} />
          <Questionnaire isConfirm {...questionnaireProps} />
          <Optional isConfirm {...optionalProps} />
        </div>
      );
    default:
      return "Unknown stepIndex";
  }
};
function Content() {
  const [activeStep, setActiveStep] = React.useState(0);
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
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  const buttonDisabled = activeStep === 1 && answers.some((a) => !a);
  return (
    <Grid container>
      <Grid sm={2} />
      <Grid lg={8} sm={8} spacing={10}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <div style={{ textAlign: "center" }}>
            <Typography>全ステップの表示を完了</Typography>
            <Button onClick={handleReset}>リセット</Button>
          </div>
        ) : (
          <div>
            <Typography>
              <StepContent
                stepIndex={activeStep}
                questionnaireProps={{ answers, setAnswers }}
                basicProps={{ basicProfile, setBasicProfile }}
                optionalProps={{ optionalRequest, setOptionalRequest }}
              />
            </Typography>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              戻る
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              disabled={buttonDisabled}
            >
              {activeStep === steps.length - 1 ? "送信" : "次へ"}
            </Button>
          </div>
        )}
      </Grid>
    </Grid>
  );
}
export default Content;
