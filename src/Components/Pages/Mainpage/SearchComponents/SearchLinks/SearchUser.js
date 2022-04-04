import React, { useState } from "react";
import { Avatar, AvatarsGroup } from "@mantine/core";
import nada from "../../../../../Images/nada.jpg";
import blackpost from "../../../../../Images/blackpost.jpg";
import "../../left-nav-components/Notifications.css";
import yesvotetrue from "../../../../../Images/yesvotetrue.svg";
import novotetrue from "../../../../../Images/novotetrue.svg";
import yesvote from "../../../../../Images/yesvote.svg";
import novote from "../../../../../Images/novote.svg";


function SearchUser() {
 

  


  return (
    <div className="requests-card-container">
      <div>
        <div className="notif-update-header">
          <Avatar className="avatar" src={blackpost} alt="no image here" />
          <div className="notif-update-text-header">
            <div>
              <span>User name </span>
            </div>
            <div className="notif-update-time">Name and surname </div>
          </div>
          <button className="search-user-button">Engage</button>
          
        </div>
      </div>
      
    </div>
  );
}

export default SearchUser;
