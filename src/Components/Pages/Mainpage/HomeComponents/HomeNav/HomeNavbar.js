import * as React from "react";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import "../HomeNav/HomeNavbar.css";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function HomeNavbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
      <Box sx={{ width: "100%" }}>
        <Box className="middle-home-nav" sx={{ backgroundColor: "white" }}>
          <Tabs className="home-nav-fix-pos" value={value} onChange={handleChange} centered>
            <NavLink
              className="home-nav-label"
              style={{ textDecoration: "none" }}
              to="Network"
              {...a11yProps(0)}
            >
              <a style={{ textDecoration: "none" }} href="">
                Network
              </a>
            </NavLink>
            <NavLink
              className="home-nav-label"
              style={{ textDecoration: "none" }}
              to="Topics"
              {...a11yProps(1)}
            >
              <a style={{ textDecoration: "none" }} href="">
                Topics
              </a>
            </NavLink>
            <NavLink
              className="home-nav-label"
              style={{ textDecoration: "none" }}
              to="Trending"
              {...a11yProps(2)}
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
