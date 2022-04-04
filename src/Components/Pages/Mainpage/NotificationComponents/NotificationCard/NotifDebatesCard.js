import React from "react";
import { Avatar, AvatarsGroup } from "@mantine/core";
import nada from "../../../../../Images/nada.jpg";
import blackpost from "../../../../../Images/blackpost.jpg";
import "../../left-nav-components/Notifications.css";
function NotifUpdatesCard() {
  return (
    <div className="debate-card-container">
      <div>
        <div className="notif-update-header">
          <Avatar className="avatar" src={blackpost} alt="no image here" />
          <div className="notif-update-text-header">
            <div>
              <span>User name </span>
              <span className="notif-action">joined </span>
              <span> User name</span>
              <span className="notif-action"> debate </span>

            </div>
            <div className="notif-update-time">Topic - Yesterday - 19:32 </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default NotifUpdatesCard;
