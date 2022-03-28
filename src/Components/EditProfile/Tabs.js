import * as React from "react";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AboutMe from "./AboutMe/AboutMe";
import Topics from "./Topics/Topics";
import "../../Styles/Tabs.css";

import MyIdentity from "./MyInfo/MyIdentity";

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (


   
    <Box sx={{ width: "100%" }}>
     
      <Box className="nav" sx={{ borderBottom: 1, borderColor: "divider" }}>
          

        <Tabs className="tabs" value={value} onChange={handleChange} centered>
          <Tab className="tab-label" label="My info" {...a11yProps(0)} />
          <Tab className="tab-label" label="About me" {...a11yProps(1)} />
          <Tab className="tab-label" label="Topics" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <MyIdentity />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AboutMe />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Topics />
      </TabPanel>
    </Box>
    
  );
}
