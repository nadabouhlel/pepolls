import * as React from "react";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import '../SearchNavbar/SearchNav2.css'
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
      <Box >
        <Box className="middle-search-nav" sx={{ backgroundColor: "white" }}>
          <Tabs className="home-nav-fix-pos" value={value} onChange={handleChange} centered>
            <NavLink
              className="search-middle-nav"
              style={{ textDecoration: "none" }}
              to="Polls"
              {...a11yProps(0)}
            >
              <a style={{ textDecoration: "none" }} href="">
                Polls
              </a>
            </NavLink>
            <NavLink
              className="search-middle-nav"
              style={{ textDecoration: "none" }}
              to="User"
              {...a11yProps(1)}
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
