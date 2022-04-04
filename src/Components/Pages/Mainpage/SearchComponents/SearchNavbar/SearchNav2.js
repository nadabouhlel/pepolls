import * as React from "react";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import '../SearchNavbar/SearchNav2.css'


export default function HomeNavbar() {
 

  return (
    <div >
      <Box >
        <Box className="middle-search-nav" sx={{ backgroundColor: "white" }}>
          <Tabs className="home-nav-fix-pos" >
            <NavLink
              className="search-middle-nav"
              style={{ textDecoration: "none" }}
              to="Polls"
             
            >
              <a style={{ textDecoration: "none" }} href="">
                Polls
              </a>
            </NavLink>
            <NavLink
              className="search-middle-nav"
              style={{ textDecoration: "none" }}
              to="User"
             
            >
              <a style={{ textDecoration: "none" }} href="" >
                User
              </a>
            </NavLink>
          
          </Tabs>
        </Box>
      </Box>
    </div>
  );
}
