import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Activites from "../Activities/Activities";

function MainBody() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setScendValue] = useState("");

  const handleFirstChange = (event) => {
    setFirstValue(event.target.value);
  };
  const handleSecondChange = (event) => {
    setScendValue(event.target.value);
  };

  return (
    <div className="main__body__container">
      <div className="input__container m-left-20">
        <span className="input__icon">
          <SearchIcon />
        </span>
        <input type="text" className="search__box" value="Search for an app" />
      </div>
      <div className="select__container m-left-20">
        <div className="first__select__contaner">
          <FormControl size="small" className="form__control_m">
            <InputLabel id="demo-select-small-label">License Type</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={firstValue}
              label="License Type"
              className="select__one"
              onChange={handleFirstChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small">
            <InputLabel id="demo-select-small-label">My Access</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={secondValue}
              label="My Access"
              className="select__one"
              onChange={handleSecondChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="description__main__container m-left-20">
        <Activites />
        <Activites />
        <Activites />
      </div>
    </div>
  );
}

export default MainBody;
