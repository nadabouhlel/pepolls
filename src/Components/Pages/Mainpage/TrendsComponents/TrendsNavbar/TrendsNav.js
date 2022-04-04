import * as React from "react";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import { Navbar } from "@mantine/core";
import Logo from "../../../../../Images/Logo.svg";
import "../../TrendsComponents/TrendsNavbar/TrendsNav.css";
import { useNavigate } from "react-router-dom";

export default function HomeNavbar() {
  const navigate = useNavigate();

  const mainpage = () => {
    navigate("/mainpage/Home/Network");
  };
  return (
    <div className="home-nav-fix-pos">
      <Box sx={{ width: "100%" }}>
        <Box className="middle-home-nav" sx={{ backgroundColor: "white" }}>
          <Tabs centered>
            <Navbar className="trends-nav">
              <img onClick={mainpage} src={Logo} alt="logo pepolls" className="logo" />
            </Navbar>
          </Tabs>
        </Box>
      </Box>
    </div>
  );
}
