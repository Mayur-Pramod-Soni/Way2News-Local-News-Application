import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Header = ()=>{
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%" }} >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{width:"100%" }}
        className='header'
      >
        <BottomNavigationAction label="Samachar" icon={<FeedOutlinedIcon />} onClick={()=>{window.location.href="/" ; }} className='selected' />
        <BottomNavigationAction label="Viral" icon={<TrendingUpIcon />} onClick={()=>{window.location.href="/viral" }} className='selected' />
      </BottomNavigation>
    </Box>
  );
}
export default Header ;