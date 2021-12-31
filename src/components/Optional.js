import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button, Grid, TextField, Tooltip } from "@mui/material";
import { createBasicParameter } from "./Basic";
import { createParamArray } from "../paramUtil";

const Optional = ({ isConfirm, data }) => {
  const [optionalRequest, setOptionalRequest] = React.useState({
    request: null,
    consultation: data ?? "",
  });
  const { search } = useLocation();
  const query = React.useMemo(() => new URLSearchParams(search), [search]);
  const gender = query.get("gender");
  const year = query.get("year");
  const month = query.get("month");
  const day = query.get("day");
  const answers = query.get("answers");

  const basicProfile = React.useMemo(() => {
    return createBasicParameter({
      gender,
      year,
      month,
      day,
    });
  }, [gender, year, month, day]);

  const paramArray = React.useMemo(() => {
    return createParamArray({
      ...basicProfile,
      answers,
      consultation: optionalRequest?.consultation ?? undefined,
    });
  }, [basicProfile, answers, optionalRequest]);

  return (
    <>
      {!isConfirm ? <p style={{ textAlign: "center" }}>ご相談下さい</p> : null}

      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ textAlign: "center" }}>
          <div>
            <Grid container>
              <Grid sm={2} />
              <Grid lg={8} sm={8} spacing={10}>
                {isConfirm ? (
                  <span>{optionalRequest?.consultation}</span>
                ) : (
                  <Tooltip
                    title="ご相談内容を記入することができます"
                    placement="top-start"
                    arrow
                    value={optionalRequest.consultation}
                    onChange={(evt) =>
                      setOptionalRequest((state) => {
                        return { ...state, consultation: evt.target.value };
                      })
                    }
                  >
                    <TextField
                      label="ご相談内容"
                      fullWidth
                      margin="normal"
                      rows={4}
                      multiline
                      variant="outlined"
                      placeholder="その他ご要望等あれば、ご記入ください"
                    />
                  </Tooltip>
                )}
              </Grid>
            </Grid>
          </div>
          {!isConfirm ? (
            <div style={{ textAlign: "center" }}>
              <Link to="/Questionnaire">
                <Button variant="outlined" size="medium">
                  戻る
                </Button>
              </Link>
              <Link
                to={{
                  pathname: `/Confirm?${paramArray.join("&")}`,
                }}
              >
                <Button variant="contained" size="medium">
                  次へ
                </Button>
              </Link>
            </div>
          ) : null}
        </div>
      </motion.div>
    </>
  );
};
export default Optional;
