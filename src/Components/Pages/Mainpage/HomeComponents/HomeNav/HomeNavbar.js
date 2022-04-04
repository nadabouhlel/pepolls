import * as React from "react";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import "../HomeNav/HomeNavbar.css";

export default function HomeNavbar() {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box className="middle-home-nav" sx={{ backgroundColor: "white" }}>
          <Tabs className="home-nav-fix-pos">
            <NavLink
              className="home-nav-label"
              style={{ textDecoration: "none" }}
              to="Network"
            >
              <a style={{ textDecoration: "none" }} href="">
                Network
              </a>
            </NavLink>
            <NavLink
              className="home-nav-label"
              style={{ textDecoration: "none" }}
              to="Topics"
            >
              <a style={{ textDecoration: "none" }} href="">
                Topics
              </a>
            </NavLink>
            <NavLink
              className="home-nav-label"
              style={{ textDecoration: "none" }}
              to="Trending"
            >
              <a style={{ textDecoration: "none" }} href="">
                Trending
              </a>
            </NavLink>
          </Tabs>
        </Box>
      </Box>
    </div>
  );
}
