import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const Basic = ({ basicProfile, setBasicProfile }) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <FormControl component="fieldset">
          <FormLabel component="gender">- 性別 -</FormLabel>
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
            <FormControlLabel value="male" control={<Radio />} label="男性" />
            <FormControlLabel value="female" control={<Radio />} label="女性" />
          </RadioGroup>
        </FormControl>
      </div>
      <div style={{ textAlign: "center" }}>
        <FormLabel component="legend">- 生年月日 -</FormLabel>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="grouped-native-select">year</InputLabel>
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
                <option key={num} value={num + 1}>
                  {num + 1990}
                </option>
              ))}
            </optgroup>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="grouped-native-select">month</InputLabel>
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
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="grouped-native-select">day</InputLabel>
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
              {Array.from(Array(12), (_, num) => (
                <option key={num} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </optgroup>
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default Basic;
