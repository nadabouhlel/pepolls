import * as React from "react";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import Logo from '../../../../../Images/Logo.svg';
import { useNavigate } from "react-router-dom";


export default function NotificationNav() {
  const navigate = useNavigate();
  const mainpage = () => {
    navigate("/mainpage/Home/Network");
  };

  return (
    <div className="home-nav-fix-pos">
      <Box sx={{ width: "100%" }}>
      <img onClick={mainpage} src={Logo} alt="logo pepolls" className="logohome" />
        <Box className="middle-home-nav" sx={{ backgroundColor: "white" }}>
          <Tabs  >
            <NavLink
              className="home-nav-label"
              style={{ textDecoration: "none" }}
              to="Updates"
              
            >
              <a  style={{ textDecoration: "none" }} href="">
                Updates
              </a>
            </NavLink>
            <NavLink
              className="home-nav-label"
              style={{ textDecoration: "none" }}
              to="Requests"
              
            >
              <a style={{ textDecoration: "none" }} href="">
                Requests
              </a>
            </NavLink>
            <NavLink
              className="home-nav-label"
              style={{ textDecoration: "none" }}
              to="Debates"
             
            >
              <a style={{ textDecoration: "none" }} href="">
                Debates
              </a>
            </NavLink>
          </Tabs>
        </Box>
      </Box>
    </div>
  );
}
