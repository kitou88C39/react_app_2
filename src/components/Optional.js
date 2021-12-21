import React from "react";
import { motion } from "framer-motion";
import { Grid, TextField, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const Optional = ({ optionalRequest, setOptionalRequest, isConfirm }) => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ ...styles.page, ...styles.Optional }}>
        <p style={styles.copy}>ご相談下さい</p>
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
        <Link style={{ ...styles.copy, ...styles.link }} to="/Confirm">
          次へ
        </Link>
        <Link style={{ ...styles.copy, ...styles.link }} to="/Questionnaire">
          戻る
        </Link>
      </div>
    </motion.div>
  );
};
export default Optional;
