import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
// import Questionnaire from "./Questionnaire";

const Basic = ({ isConfirm }) => {
  const [basicProfile, setBasicProfile] = React.useState({
    gender: null,
    year: null,
    month: null,
    day: null,
  });
  return (
    <>
      {!isConfirm ? (
        <p style={{ textAlign: "center" }}>お客様の情報を入力して下さい</p>
      ) : null}
      {/* <Questionnaire /> */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div style={{ textAlign: "center" }}>
            <FormControl component="fieldset">
              <FormLabel component="gender">- 性別 -</FormLabel>
              {isConfirm ? (
                <span>{basicProfile?.gender === "male" ? "男性" : "女性"}</span>
              ) : (
                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                  value={basicProfile.gender}
                  onChange={(evt) =>
                    setBasicProfile((state) => {
                      return { ...state, gender: evt.target.value };
                    })
                  }
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="男性"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="女性"
                  />
                </RadioGroup>
              )}
            </FormControl>
          </div>
          <div style={{ textAlign: "center" }}>
            <FormLabel component="legend">- 生年月日 -</FormLabel>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-native-select">year</InputLabel>
              {isConfirm ? (
                <span>{basicProfile.year}</span>
              ) : (
                <Select
                  native
                  defaultValue=""
                  id="grouped-native-select"
                  label="Grouping"
                  value={basicProfile.year}
                  onChange={(evt) =>
                    setBasicProfile((state) => {
                      return { ...state, year: evt.target.value };
                    })
                  }
                >
                  <option aria-label="None" value="" />
                  <optgroup label="year">
                    {Array.from(Array(2020), (_, num) => (
                      <option key={num} value={num + 1990}>
                        {num + 1990}
                      </option>
                    ))}
                  </optgroup>
                </Select>
              )}
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-native-select">month</InputLabel>
              {isConfirm ? (
                <span>{basicProfile.month}</span>
              ) : (
                <Select
                  native
                  defaultValue=""
                  id="grouped-native-select"
                  label="Grouping"
                  value={basicProfile.month}
                  onChange={(evt) =>
                    setBasicProfile((state) => {
                      return { ...state, month: evt.target.value };
                    })
                  }
                >
                  <option aria-label="None" value="" />
                  <optgroup label="month">
                    {Array.from(Array(12), (_, num) => (
                      <option key={num} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </optgroup>
                </Select>
              )}
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-native-select">day</InputLabel>
              {isConfirm ? (
                <span>{basicProfile.day}</span>
              ) : (
                <Select
                  native
                  defaultValue=""
                  id="grouped-native-select"
                  label="Grouping"
                  value={basicProfile.day}
                  onChange={(evt) =>
                    setBasicProfile((state) => {
                      return { ...state, day: evt.target.value };
                    })
                  }
                >
                  <option aria-label="None" value="" />
                  <optgroup label="day">
                    {Array.from(Array(31), (_, num) => (
                      <option key={num} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </optgroup>
                </Select>
              )}
            </FormControl>
          </div>
          {!isConfirm ? (
            <div style={{ textAlign: "center" }}>
              <Link to="/Questionnaire">
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
export default Basic;
