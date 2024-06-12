import React from "react";
import Image from "../images/image2.png";
import { Icon } from "@iconify/react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Activities() {
  return (
    <div className="description__compo__container">
      <div className="description__container">
        <div className="description__image">
          <img src={Image} alt="image" />
          <p>WebhostingApp</p>
        </div>
      </div>
      <div className="main__visual__container">
        <div className="logo__container">
          <div className="icon__div">
            <div className="tag__div mg-l5">
              <p>FREE</p>
            </div>
            <div className="main__icons mg-l5">
              <Icon icon="ic:twotone-apple" />
              <p>co.5start.ios.qlije</p>
            </div>
            <div className="main__icons mg-l5">
              <Icon icon="material-symbols:android" />
              <p>co.5start.android.qlije</p>
            </div>
          </div>
        </div>
        <div className="button__container">
          <div className="buttons__main buttons__outline mg-r3">View</div>
          <div className="buttons__main buttons__full mg-r3">Edit</div>
          <div className="buttons__icond mg-r3">
            <MoreHorizIcon />
          </div>
        </div>
      </div>
      <div className="main__users__container">
        <div className="admin__dev mg-us-r">
          <Icon icon="mingcute:user-4-line" />
          <p>Admin</p>
        </div>
        <div className="members__div mg-us-r">
          <Icon icon="oui:users" />
          <p>2</p>
        </div>
        <div className="time__dev">
          <p>Last saved 12 days ago</p>
        </div>
      </div>
    </div>
  );
}

export default Activities;
