import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Icon } from "@iconify/react";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__title">
        <p>Odejinmi Samuel's Team</p>
        <span>
          <KeyboardArrowLeftIcon />
        </span>
      </div>
      <div className="sidebar__links__container">
        <div className="sdebar__links active">
          <Icon icon="fluent:phone-32-regular" />
          <p>Apps</p>
        </div>
        <div className="sdebar__links">
          <Icon icon="oui:users" />
          <p>Members</p>
        </div>
        <div className="sdebar__links">
          <Icon icon="iconamoon:settings" />
          <p>Settings</p>
        </div>
        <div className="sdebar__links">
          <Icon icon="fluent:new-16-filled" />
          <p>Create New App</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
