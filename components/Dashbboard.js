import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PinIcon from "@mui/icons-material/Pin";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Profile from "../pages/dashboard/profile";
import firebase from "../firebase/Firebase";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";
import Home from "../pages/dashboard/Home";
import ImageUploader from "./Upload";
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const styleNav = {
    color: "white",
    dispay: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const user = firebase.auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    user.displayName;
    user.photoURL;
  }

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
      }}
    >
      <AppBar position="relative">
        <Tabs
          style={styleNav}
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
        >
          {" "}
          <Tab icon={<HomeIcon />} label="Home" {...a11yProps(0)} />
          <Tab icon={<ContactMailIcon />} label="e-mail" {...a11yProps(1)} />
          <Tab
            id="label"
            icon={<ContactPhoneIcon />}
            label="Phone"
            {...a11yProps(2)}
          />
          <Tab icon={<PinIcon />} label="Mot de passe" {...a11yProps(3)} />
          <Tab icon={<AddAPhotoIcon />} label="Photo" {...a11yProps(4)} />
          <span className="mr-5 font-bold uppercase hidden md:block">
            {user.displayName}
          </span>
          <div className="hidden md:block">
            <Avatar sx={{ width: 50, height: 50 }} src={user.photoURL} />
          </div>
        </Tabs>
      </AppBar>
      <SwipeableViews
        // axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Home />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Profile />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <ImageUploader />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
