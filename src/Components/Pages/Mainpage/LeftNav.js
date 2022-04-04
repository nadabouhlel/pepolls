import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Mainpage/LeftNav.css";
import home from "../../../Images/home.svg";
import search from "../../../Images/search.svg";
import fire from "../../../Images/fire.svg";
import msg from "../../../Images/msg.svg";
import notif from "../../../Images/notif.svg";

function LeftNav() {
  return (
    <div className="left-nav-container">
      <div className="routes">
        <NavLink style={{ textDecoration: "none" }} to="Home/Network"  >
          <a className="navigation" href="">
            <img src={home} alt="" />
            Home
          </a>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="Search/Polls">
          <a className="navigation" href="">
            <img src={search} alt="" /> Search
          </a>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="Trends">
          <a className="navigation" href="">
            <img src={fire} alt="" /> Trends
          </a>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="Messages">
          <a className="navigation" href="">
            <img src={msg} alt="" /> Messages
          </a>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="Notifications/Updates">
          <a className="navigation" href="">
            <img src={notif} alt="" /> Notifications
          </a>
        </NavLink>
      </div>
    </div>
  );
}

export default LeftNav;
