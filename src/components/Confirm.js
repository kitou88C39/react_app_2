import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Basic from "./Basic";
import Questionnaire from "./Questionnaire";
import Optional from "./Optional";
import { Button } from "@mui/material";
import { createBasicParameter } from "./Basic";

export const UserInputData = React.createContext();

function Confirm() {
  const { search } = useLocation();
  const query = React.useMemo(() => new URLSearchParams(search), [search]);
  const gender = query.get("gender");
  const year = query.get("year");
  const month = query.get("month");
  const day = query.get("day");
  const answers = query.get("answers");
  const consultation = query.get("consultation");

  const basicProfile = React.useMemo(() => {
    return createBasicParameter({
      gender,
      year,
      month,
      day,
    });
  }, [gender, year, month, day]);

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <p style={{ textAlign: "center" }}>以下の内容をご確認下さい</p>
        <div style={{ textAlign: "center" }}>
          <Basic isConfirm data={basicProfile} />
          <Questionnaire isConfirm data={answers} />
          <Optional isConfirm data={consultation} />
        </div>
        <div style={{ textAlign: "center" }}>
          <Link to="/Optional">
            <Button variant="outlined" size="medium">
              戻る
            </Button>
          </Link>
          <Link to="/">
            <Button variant="contained" size="medium">
              送信
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
export default Confirm;
