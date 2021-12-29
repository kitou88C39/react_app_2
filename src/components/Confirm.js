import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Basic from "./Basic";
import Questionnaire from "./Questionnaire";
import Optional from "./Optional";
import { Button } from "@mui/material";

export const UserInputData = React.createContext();

function Confirm({ basicProps, questionnaireProps, optionalProps }) {
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
          <Link to={{ pathname: "/Basic?hoge=aaa" }}></Link>
          <Link to={{ pathname: "/Questionnaire?hoge=aaa" }}></Link>
          <Link to={{ pathname: "/Optional?hoge=aaa" }}></Link>

          {/* <Basic isConfirm {...basicProps} />
          <Questionnaire isConfirm {...questionnaireProps} />
          <Optional isConfirm {...optionalProps} />{" "} */}
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
