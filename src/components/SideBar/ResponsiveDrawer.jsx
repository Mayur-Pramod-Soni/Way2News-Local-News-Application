import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import { Avatar, Button, Divider } from '@mui/material';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import AddLocationAltTwoToneIcon from '@mui/icons-material/AddLocationAltTwoTone';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import VideoCameraBackTwoToneIcon from '@mui/icons-material/VideoCameraBackTwoTone';
import WaterDropTwoToneIcon from '@mui/icons-material/WaterDropTwoTone';
import ContactMailTwoToneIcon from '@mui/icons-material/ContactMailTwoTone';
import { gapi } from "gapi-script"
import GoogleLogin from "react-google-login"
import { GoogleLogout } from 'react-google-login';
import axios from 'axios';
import { Link } from "react-router-dom";
import { ThemeProvider, useThemeSet } from '../../ThemeChanger';
import "../../Styles.css";

const clientId = "310176454088-9smtl0ep4c0fjb06ph806rvic1qlqha2.apps.googleusercontent.com";

const ResponsiveDrawer = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Define styles for the drawer
  const drawerStyles = isMobile ? { width: '100vw' } : { width: '250px' };

  // Define styles for list items (optional)
  const listItemStyles = {
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  };

  // User LogIn ith Google 
  const [user, setUser] = useState(null); // Initialize user state

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! CURRENT USER: ", res.profileObj);
    setUser(res.profileObj);
  }

  const onFailure = (res) => {
    console.log("LOGIN Failed! res: ", res);
  }

  const handleLogoutSuccess = () => {
    // Handle successful logout (e.g., clear user state)
    setUser(null);
  };

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }
    gapi.load('client:auth2', start)
  })

  // getting location using geolocation
  const [currentLocation, setCurrentLocation] = useState({})
  const [currentLocationJS, setCurrentLocationJs] = useState({})

  useEffect(() => {
    getLocation();
  }, [])

  const handleLocationClick = async () => {
    await getLocation();
    await getLocationJs();
    setTimeout(getLocationJs, 1000)
  }

  const getLocation = async () => {
    try {
      const location = await axios.get("https://ipapi.co/json");
      setCurrentLocation(location.data);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  }

  const getLocationJs = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { lattitude, longitude } = position.coords;
      setCurrentLocationJs({ lattitude, longitude });
    })
  }

  return (
    <ThemeProvider>
      <Drawer
        open={open}
        onClose={onClose}
        anchor="left"
        style={drawerStyles}
        variant={isMobile ? 'temporary' : 'persistent'}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >

        <Button size="large" title='Settings ' style={{ width: "20px", margin: "10px" }} onClick={() => { window.location.href = "/settings" }}><SettingsSuggestOutlinedIcon /></Button>

        {isMobile && (
          <IconButton onClick={onClose} style={{ position: 'absolute', right: 0, top: 10 }}>
            News  <ArrowForwardIosIcon />
          </IconButton>
        )}

        {(
          <IconButton onClick={onClose} style={{ position: 'absolute', right: 0, top: 10 }}>
            News   <ArrowForwardIosIcon />
          </IconButton>)}

        <Divider />

        <List sx={{ width: isMobile ? '100vw' : '30vw' }}>
          {/* List items */}
          <ListItem button>
            {user ? (
              // User is logged in
              <>
                <Avatar alt="User Avatar" src={user.imageUrl} />
                <ListItemText primary={user.name} secondary="Logout" sx={{ marginLeft: '3vw' }} />
                <GoogleLogout
                  clientId="YOUR_CLIENT_ID"
                  buttonText="Logout"
                  onLogoutSuccess={handleLogoutSuccess}
                />

              </>
            ) : (
              // User is not logged in
              <>
                <GoogleLogin
                  clientId="YOUR_CLIENT_ID"
                  buttonText="Login with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy="single_host_origin"
                  isSignedIn={true}
                >
                  <PersonSharpIcon />
                </GoogleLogin>
                <ListItemText primary="Guest" secondary="Click here to Login with Google" sx={{ marginLeft: '3vw' }} />
              </>
            )}
          </ListItem>
          <Divider />
          <ListItem button onClick={onClose} style={listItemStyles}>
            <Button size="large" title='' style={{ width: "20px", margin: "10px" }} ><LanguageTwoToneIcon /></Button>
            <ListItemText primary="Choose Your Language" secondary="English हिंदी" />
            <Button size="large" title='' style={{ width: "20px", margin: "10px" }} ><ArrowCircleRightIcon /></Button>
          </ListItem>
          <Divider />
          {currentLocation.city ? (
            <ListItem button component={Link} to="/local-news" onClick={onClose}>
              <Button
                size="large"
                title="Location "
                style={{ width: "20px", margin: "10px", fontWeight: "bold" }}
              >
                <AddLocationAltTwoToneIcon />
              </Button>
              <ListItemText primary="Location : " />
              <span>
                <b>{currentLocation.city}</b>
              </span>
              <Button
                size="large"
                title="Proceed"
                style={{ width: "20px", margin: "10px", marginRight: "10px" }}
              >
                <ArrowCircleRightIcon />
              </Button>
            </ListItem>
          ) : (
            <ListItem button onClick={handleLocationClick}>
              <Button
                size="large"
                title="Share Location"
                style={{ width: "20px", margin: "10px" }}
              >
                <AddLocationAltTwoToneIcon />
              </Button>
              <span>
                Please Provide Your Location
              </span>
              <Button
                size="large"
                title="Proceed"
                style={{ width: "20px", margin: "10px", marginRight: "10px" }}
              >
                <ArrowCircleRightIcon />
              </Button>
            </ListItem>
          )}
          <Divider />
          <ListItem button onClick={onClose} style={listItemStyles}>
            <h3>Categories</h3>
            {/* <ForwardLinksDrawer /> */}
            {/* Here Code Horizontal Scroll Bar Remain */}
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/refer-now" onClick={onClose} style={listItemStyles}>
            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><VolumeUpOutlinedIcon /></Button>
            <ListItemText primary="Refer" />
            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} >REFER NOW</Button>
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/digital-magzines" onClick={onClose} style={listItemStyles} >
            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><MenuBookTwoToneIcon /></Button>
            <ListItemText primary="Digital Magzine" />
            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/video" onClick={onClose} style={listItemStyles}>
            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><VideoCameraBackTwoToneIcon /></Button>
            <ListItemText primary="Video" />
            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/viral" onClick={onClose} style={listItemStyles}>
            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><WaterDropTwoToneIcon /></Button>
            <ListItemText primary="Viral" />
            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/contact-us" onClick={onClose} style={listItemStyles}>
            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ContactMailTwoToneIcon /></Button>
            <ListItemText primary="Contact Us" />
            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    </ThemeProvider>
  );
}

export default ResponsiveDrawer;
