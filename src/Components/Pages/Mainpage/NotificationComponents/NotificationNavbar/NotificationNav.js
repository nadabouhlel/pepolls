import * as React from "react";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
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

export default function NotificationNav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="home-nav-fix-pos">
      <Box sx={{ width: "100%" }}>
        <Box className="middle-home-nav" sx={{ backgroundColor: "white" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <NavLink
              className="home-nav-label"
              style={{ textDecoration: "none" }}
              to="Updates"
              {...a11yProps(0)}
            >
              <a style={{ textDecoration: "none" }} href="">
                Updates
              </a>
            </NavLink>
            <NavLink
              className="home-nav-label"
              style={{ textDecoration: "none" }}
              to="Requests"
              {...a11yProps(1)}
            >
              <a style={{ textDecoration: "none" }} href="">
                Requests
              </a>
            </NavLink>
            <NavLink
              className="home-nav-label"
              style={{ textDecoration: "none" }}
              to="Debates"
              {...a11yProps(2)}
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
