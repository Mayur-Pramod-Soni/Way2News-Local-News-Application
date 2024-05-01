import React, { useState } from 'react';
import { Card, CardContent, CardActions, Button, Typography, CardMedia, Link, Box, Grid } from "@mui/material"
import SendSharpIcon from '@mui/icons-material/SendSharp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import "../../App.css"
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import { useMediaQuery } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Divider } from '@mui/material';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import SportsCricketTwoToneIcon from '@mui/icons-material/SportsCricketTwoTone';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import ContactMailTwoToneIcon from '@mui/icons-material/ContactMailTwoTone';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
import { useNavigate } from "react-router-dom";
import LoadingImage from "../assets/loading.gif"

const SearchPage = ({ open, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);
  const apiKey = 'f900a61243ef4a0180b53e753b33e515'; // Replace with your actual API key

  //for back ----
  const navigate = useNavigate();


  const isDesktop = useMediaQuery('(min-width:600px)'); // Check if the device is desktop

  const handleSearch = async () => {
    try {
      if (!searchTerm) {
        toast.info('Kindly fill the text-box with Proper keyworlds ! ', {
          position: 'top-right', // Set the position (top-right, top-center, bottom-right, etc.)
          autoClose: 3000, // Close after 3 seconds
          hideProgressBar: false, // Show progress bar
          closeOnClick: true, // Close on click
          pauseOnHover: true, // Pause on hover
        });
        return;
      }
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`
      );
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };
  const Trending = () => {
    window.location.href = '/trending';
  };
  const WildLife = () => {
    window.location.href = "/wild-life";
  }
  const IPL = () => {
    window.location.href = "/ipl";
  }
  const Sports = () => {
    window.location.href = "/sports";
  }
  const Magzines = () => {
    window.location.href = "/digital-magzines";
  }
  const Isro = () => {
    window.location.href = "/isro";
  }
  const ContactUs = () => {
    window.location.href = "/contact-us";
  }

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
  
  return (
    <div>
      <div>
        <h1>News App</h1>
        {
          isMobile ? (
            <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", backgroundColor: "rgb(75, 75, 244)" }} >
              <Button sx={{ color: "black" }} onClick={() => navigate(-1)} ><ArrowBackTwoToneIcon />
                <b>Back</b>
              </Button>
            </Box>
          ) :
            (
              <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", backgroundColor: "rgb(75, 75, 244)", width: "50vw" }}>
                <Button sx={{ color: "black" }} onClick={() => navigate(-1)}><ArrowBackTwoToneIcon />
                  <b>Back</b>
                </Button>
              </Box>
            )
        }

        {
          isMobile ? (
            <div className="search-box">
              <input
                type="text"
                placeholder="Search for news..."
                value={searchTerm}
                style={{ height: "5vw", width: "45vw" }}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                  if (e.key === null || undefined) {
                    alert("Kindly enter Valid Search Worlds")
                  }
                }}
              />
              <button onClick={handleSearch} style={{ marginLeft: "10px", height: "5vw", width: "20vw" }}>Search</button>
            </div>
          ) :
            (
              <div className="search-box-pc">
                <input
                  type="text"
                  placeholder="Search for news..."
                  value={searchTerm}
                  style={{ height: "3vw", width: "50vw", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px" }}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && e.key === !null && e.key === !undefined) {
                      handleSearch();
                    }
                    if (e.key === null || undefined) {
                      alert("Kindly enter Valid Search Results")
                    }
                  }}
                />
                <button onClick={handleSearch} style={{ marginLeft: "5px", height: "3.4vw", width: "20vw", marginRight: "5px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px" }}>Search</button>

              </div>
            )
        }

      </div>

      {
        isMobile ? (
          <List>
            <ListItem button style={listItemStyles}>
              <h3>Categories</h3>
              {/* <ForwardLinksDrawer /> */}
              {/* Here Code Horizontal Scroll Bar Remain */}
            </ListItem>
            <Divider />
            <ListItem button style={listItemStyles} onClick={Trending}>
              <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><TrendingUpTwoToneIcon /></Button>
              <ListItemText primary="Trending" />
              <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
            </ListItem>
            <Divider />
            <ListItem button style={listItemStyles} onClick={Magzines}>
              <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><MenuBookTwoToneIcon /></Button>
              <ListItemText primary="Digital Magzine" />
              <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
            </ListItem>
            <Divider />
            <ListItem button style={listItemStyles} onClick={WildLife}>
              <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><PetsOutlinedIcon /></Button>
              <ListItemText primary="Wild Life" />
              <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
            </ListItem>
            <Divider />
            <ListItem button style={listItemStyles} onClick={Sports}>
              <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><EmojiEventsTwoToneIcon /></Button>
              <ListItemText primary="Sports" />
              <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
            </ListItem>
            <Divider />
            <ListItem button style={listItemStyles} onClick={IPL}>
              <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><SportsCricketTwoToneIcon /></Button>
              <ListItemText primary="IPL" />
              <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
            </ListItem>
            <Divider />
            <ListItem button style={listItemStyles} onClick={Isro}>
              <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><WifiTetheringIcon /></Button>
              <ListItemText primary="ISRO" />
              <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
            </ListItem>
            <Divider />
            {/* <ListItem button style={listItemStyles} onClick={ContactUs}>
              <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ContactMailTwoToneIcon /></Button>
              <ListItemText primary="Contact Us" />
              <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
            </ListItem>
            <Divider /> */}
          </List>
        )
          :
          (
            <List >
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <ListItem button style={listItemStyles}  >
                    <h3>Categories</h3>
                    {/* <ForwardLinksDrawer /> */}
                    {/* Here Code Horizontal Scroll Bar Remain */}
                  </ListItem>
                </Grid>
              </Grid>
              <Divider />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <ListItem button style={listItemStyles} onClick={Trending} >
                    <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><TrendingUpTwoToneIcon /></Button>
                    <ListItemText primary="Trending" />
                    <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
                  </ListItem>
                </Grid>
                <Grid item xs={6}>
                  <ListItem button style={listItemStyles} onClick={Magzines} >
                    <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><MenuBookTwoToneIcon /></Button>
                    <ListItemText primary="Digital Magazine" />
                    <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
                  </ListItem>
                </Grid>
              </Grid>
              <Divider />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <ListItem button style={listItemStyles} onClick={WildLife}>
                    <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><PetsOutlinedIcon /></Button>
                    <ListItemText primary="Wild Life" />
                    <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
                  </ListItem>
                </Grid>
                <Grid item xs={6}>
                  <ListItem button style={listItemStyles} onClick={Sports}>
                    <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><EmojiEventsTwoToneIcon /></Button>
                    <ListItemText primary="Sports" />
                    <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
                  </ListItem>
                </Grid>
              </Grid>
              <Divider />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <ListItem button style={listItemStyles} onClick={IPL}>
                    <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><SportsCricketTwoToneIcon /></Button>
                    <ListItemText primary="IPL" />
                    <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
                  </ListItem>
                </Grid>
                <Grid item xs={6}>
                  <ListItem button style={listItemStyles} onClick={Isro} >
                    <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><WifiTetheringIcon /></Button>
                    <ListItemText primary="ISRO" />
                    <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
                  </ListItem>
                </Grid>
              </Grid>
              <Divider />
            </List>
          )
      }

      <div>
        {isDesktop ? (
          // Desktop view: Show three articles in a row
          <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: 55, marginTop: "25" }} className='card-container'>
            {articles.map((article) => (
              <Card key={article.title} style={{ width: '30%', margin: '10px' }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={article.urlToImage || LoadingImage}
                  title={article.title}
                  alt="No Image"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size='small' title='Like' onClick={() => handleLike(index)}><ThumbUpOutlinedIcon /> {...article.like}</Button>
                <Button size='small' title='DisLike' onClick={() => handleDisLike(index)}><ThumbDownOutlinedIcon {...article.dislike} /></Button>
                <Button size='small' title='Comment' onClick={() => handleComment(index)}><TextsmsOutlinedIcon {...article.comment} /></Button> */}
                  <Button size='small' title='Like' ><ThumbUpOutlinedIcon /> {article.like}</Button>
                  <Button size='small' title='DisLike' ><ThumbDownOutlinedIcon {...article.dislike} /></Button>
                  <Button size='small' title='Comment'><TextsmsOutlinedIcon {...article.comment} /></Button>
                  <Button size="small">
                    <Link href={article.url} target="_blank" rel="noopener noreferrer">
                      Learn More
                    </Link>
                  </Button>
                  <Button size="small" title='Menu'><MoreVertOutlinedIcon /></Button>
                  <Button size="small" title='Share'><SendSharpIcon /> </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        ) : (
          // Mobile view: Show only one article per row
          <div>
            {articles.map((article) => (
              <Card key={article.title} style={{ margin: '10px' }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={article.urlToImage || LoadingImage}
                  title={article.title}
                  alt="No Image"
                  onError={(e) => { e.target.onerror = null; e.target.src = LoadingImage }}
                />

                <CardContent>
                  <Typography variant="h5" component="div">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size='small' title='Like' onClick={() => handleLike(index)}><ThumbUpOutlinedIcon /> {...article.like}</Button>
                <Button size='small' title='DisLike' onClick={() => handleDisLike(index)}><ThumbDownOutlinedIcon {...article.dislike} /></Button>
                <Button size='small' title='Comment' onClick={() => handleComment(index)}><TextsmsOutlinedIcon {...article.comment} /></Button> */}
                  <Button size='small' title='Like' ><ThumbUpOutlinedIcon /> {article.like}</Button>
                  <Button size='small' title='DisLike' ><ThumbDownOutlinedIcon {...article.dislike} /></Button>
                  <Button size='small' title='Comment'><TextsmsOutlinedIcon {...article.comment} /></Button>
                  <Button size="small">
                    <Link href={article.url} target="_blank" rel="noopener noreferrer">
                      Learn More
                    </Link>
                  </Button>
                  <Button size="small" title='Menu'><MoreVertOutlinedIcon /></Button>
                  <Button size="small" title='Share'><SendSharpIcon /> </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default SearchPage;
