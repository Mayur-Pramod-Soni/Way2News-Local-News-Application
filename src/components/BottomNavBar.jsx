import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CachedIcon from '@mui/icons-material/Cached';
import ResponsiveDrawer from './SideBar/ResponsiveDrawer';
import { ThemeProvider } from '../ThemeChanger';


const BottomNavBar = () => {
  const [value, setValue] = React.useState(0);
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);

  const handleMenuClick = () => {
    setIsSideBarOpen(!isSideBarOpen); // Toggle the sidebar visibility
  };

  const handleSearchClick = () => {
    window.location.href = '/search';
    // Redirect to '/search' route 
  };

  return (
    <ThemeProvider>
      <Box sx={{ width: "100%" }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ width: "100%" }}
          className='bottom-nav'
        >
          <BottomNavigationAction label="Menu" icon={<MenuIcon />} onClick={handleMenuClick} />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} onClick={handleSearchClick} />
          <BottomNavigationAction label="Unread" icon={<VisibilityOffOutlinedIcon />} onClick={()=>{window.location.href="/unread-news"}} />
          <BottomNavigationAction label="Reload" icon={<CachedIcon />} onClick={()=>{window.location.reload()}}/>
        </BottomNavigation>

        {/* Render the ResponsiveDrawer component */}
        <ResponsiveDrawer open={isSideBarOpen} onClose={() => setIsSideBarOpen(false)} />
      </Box>
    </ThemeProvider>
  );
}

export default BottomNavBar;
