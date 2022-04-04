import * as React from "react";
import Card from "@mui/material/Card";
import "../right-nav-components/ProfileCard.css";
import insta from "../../../../Images/insta.png";
import link from "../../../../Images/link.png";
import jihed from "../../../../Images/jihed.svg";
import { Avatar, AvatarsGroup } from "@mantine/core";
import { NavLink, useNavigate } from "react-router-dom";
import Settings from "../left-nav-components/SettingsComponents/Settings";

export default function ProfileCard() {
  const navigate = useNavigate();

  const editprofile = () => {
    navigate("/editprofile");
  };
  const settings = () => {
    navigate("/settings");
  };
  const newPoll = () => {
    navigate("/newPoll");
  };
  return (
    <>
      <Card className="card">
        <div className="user-info">
          <Avatar className="avatar" src={jihed} alt="no image here" />
          <p className="user-name">Jihed Ra</p>
        </div>
        <div>
          <div className="numbers">
            <div className="numbers-details">
              <p>7</p> <p>Topics</p>
            </div>
            <div className="numbers-details">
              <p>3K</p>
              <p>Connections</p>
            </div>
            <div className="numbers-details">
              <p>78</p>
              <p>Polls</p>
            </div>
          </div>

          <div className="links">
            <div className="EditWallet">
              <button onClick={editprofile} className="button-card">
                Edit profile
              </button>

              <button onClick={settings} className="button-card">
                Settings
              </button>
            </div>

            <div className="imgs-settings">
              <button className="button-card">My wallet</button>

              <div className="social-media-links">
                <a href="https://www.instagram.com/" target="_blank">
                  {" "}
                  <img
                    className="card-icons"
                    src={insta}
                    alt={"instagram link"}
                  ></img>
                </a>
                <a href="  https://www.linkedin.com/" target="_blank">
                  <img src={link} alt={"instagram link"}></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <div>
        <NavLink style={{ textDecoration: "none" }} to="NewPoll">
          <button className="new-poll" type="submit">
            Add new poll
          </button>
        </NavLink>
      </div>
    </>
  );
}

{
}
