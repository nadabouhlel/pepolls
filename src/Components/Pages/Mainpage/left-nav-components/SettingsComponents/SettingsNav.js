import React from 'react'
import Box from "@mui/material/Box";
import { Navbar } from "@mantine/core";
import Logo from "../../../../../Images/Logo.svg";
import Tabs from "@mui/material/Tabs";
import './Settings.css'
import TrendsNav from '../../TrendsComponents/TrendsNavbar/TrendsNav'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function SettingsNav() {
  const navigate = useNavigate();

  const mainpage = () => {
    navigate("/mainpage/Home/Network");
  };
  return (
    <div className="home-nav-fix-pos">
    <Box sx={{ width: "100%" }}>
      <Box className="middle-home-nav" sx={{ backgroundColor: "white" }}>
        <Tabs centered>
          <Navbar className="settings-nav">
            <img onClick={mainpage} src={Logo} alt="logo pepolls" className="logo-nav-settings" />

        </Navbar>

        </Tabs>
      </Box>
    </Box>
  </div>
  )
}

export default SettingsNav