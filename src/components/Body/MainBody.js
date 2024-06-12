import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Activites from "../Activities/Activities";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import IconButton from "@mui/material/IconButton";
import SideBar from "./SideBar";
import CloseIcon from "@mui/icons-material/Close";
import Slide from '@mui/material/Slide';


function MainBody() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setScendValue] = useState("");
  const [checkedSidebar, setCheckedSidebar] = useState(false)

  const handleFirstChange = (event) => {
    setFirstValue(event.target.value);
  };
  const handleSecondChange = (event) => {
    setScendValue(event.target.value);
  };

  const handleSidebarOpen = () => {
    setCheckedSidebar(true);
  }

  const handleSidebarClose = () => {
    setCheckedSidebar(false);
  };
  const handleBodyClose = (e) => {
    let className = e.target.className;
    if(className === 'cover__div'){
      setCheckedSidebar(false)
    }
  }

  return (
    <div className="main__body__container">
      <div className="input__container m-left-20">
        <IconButton className="side__bar__viewButton" onClick={handleSidebarOpen}>
          <ViewHeadlineIcon />
        </IconButton>
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
      <Slide direction="right" in={checkedSidebar} mountOnEnter unmountOnExit>
      <div className="cover__div" onClick={handleBodyClose}>
        <div className="inner__cover">
          <div className="close__icon">
            <IconButton onClick={handleSidebarClose}><CloseIcon /></IconButton>
          </div>
          <SideBar />
        </div>
      </div>
      </Slide>
    </div>
  );
}

export default MainBody;
