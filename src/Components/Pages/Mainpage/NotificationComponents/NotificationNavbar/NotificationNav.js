import * as React from "react";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";

export default function NotificationNav() {
 

  return (
    <div className="home-nav-fix-pos">
      <Box sx={{ width: "100%" }}>
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
