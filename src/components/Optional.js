import React from "react";
import { Grid } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";

const Optional = ({ optionalRequest, setOptionalRequest, isConfirm }) => {
  return (
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
  );
};
export default Optional;
