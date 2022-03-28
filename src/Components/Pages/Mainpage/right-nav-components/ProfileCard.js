import * as React from "react";
import Card from "@mui/material/Card";
import "../right-nav-components/ProfileCard.css";
import insta from "../../../../Images/insta.png";
import link from "../../../../Images/link.png";
import jihed from "../../../../Images/jihed.svg";
import { Avatar, AvatarsGroup } from "@mantine/core";
import { useNavigate } from 'react-router-dom';

export default function ProfileCard() {
  
  const navigate = useNavigate();
  
  const editprofile = () => {
    navigate('/editprofile');

  }
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
            <button onClick={editprofile} className="button-card">Edit profile</button>

            <button className="button-card">Settings</button>
          </div>

          <div className="imgs-settings">
            <button className="button-card">My wallet</button>

            <div>
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
<button className="new-poll" type="submit">
Add new poll
            </button>
</div>

  </>

  );
}

{
}
