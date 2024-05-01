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
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
import { useNavigate } from "react-router-dom";
import { useThemeSet } from '../../ThemeChanger';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import LoadingImage from "../assets/loading.gif"

const Setting = () => {
    const [articles, setArticles] = useState([]);
    const isDesktop = useMediaQuery('(min-width:600px)'); // Check if the device is desktop

    //for back ----
    const navigate = useNavigate();

    const handleBookMarks = () => {
        toast.info('There is no Bookmarks added ! ', {
            position: 'top-right', // Set the position (top-right, top-center, bottom-right, etc.)
            autoClose: 3000, // Close after 3 seconds
            hideProgressBar: false, // Show progress bar
            closeOnClick: true, // Close on click
            pauseOnHover: true, // Pause on hover
        });
        return;
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

    // theme set toggle DarkMode & LightMode
    const { themeset, toggleTheme } = useThemeSet();
    console.log(themeset);


    return (
        <div>
            <div>
                <h1>News App</h1>
                {
                    isMobile ? (
                        <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }} >
                            <Button sx={{ color: "black" }} onClick={() => navigate(-1)} ><ArrowBackTwoToneIcon />
                                <b>Back</b>
                            </Button>
                        </Box>
                    ) :
                        (
                            <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", width: "50vw" }}>
                                <Button sx={{ color: "black" }} onClick={() => navigate(-1)} ><ArrowBackTwoToneIcon />
                                    <b>Back</b>
                                </Button>
                            </Box>
                        )
                }
            </div>

            {
                isMobile ? (
                    <List>
                        <ListItem button style={listItemStyles}>
                            <h3>Settings </h3>
                            <span style={{ marginLeft: "39vw" }}>App version 8.49</span>
                            {/* <ForwardLinksDrawer /> */}
                            {/* Here Code Horizontal Scroll Bar Remain */}
                        </ListItem>
                        <Divider />
                        <ListItem button style={listItemStyles} onClick={handleBookMarks}>
                            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><MenuBookTwoToneIcon /></Button>
                            <ListItemText primary="BookMarks" />
                            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
                        </ListItem>
                        <Divider />
                        <ListItem button style={listItemStyles} onClick={toggleTheme} checked={themeset === "dark"} >
                            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} >{themeset === "light" ? <LightModeTwoToneIcon /> : <DarkModeTwoToneIcon />}</Button>
                            <ListItemText primary={`Switch to ${themeset === 'light' ? 'Dark' : 'Light'} Mode`} />
                            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
                        </ListItem>
                        <Divider />
                        <ListItem button style={listItemStyles} onClick={() => { window.location.href = "/about-us" }}>
                            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><InfoOutlinedIcon /></Button>
                            <ListItemText primary="About Us" />
                            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
                        </ListItem>
                        <Divider />
                        <ListItem button style={listItemStyles} onClick={() => { window.location.href = "/contact-us" }}>
                            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><WifiCalling3OutlinedIcon /></Button>
                            <ListItemText primary="Contact Us" />
                            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
                        </ListItem>
                        <Divider />
                        <ListItem button style={listItemStyles} onClick={() => { window.location.href = "/feedback" }}>
                            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><StarBorderRoundedIcon /></Button>
                            <ListItemText primary="Feedback" />
                            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
                        </ListItem>
                        <Divider />
                        <ListItem button style={listItemStyles} onClick={() => { window.location.href = "/rules&regulations" }}>
                            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><AssuredWorkloadIcon /></Button>
                            <ListItemText primary="Rules & Regulations" />
                            <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
                        </ListItem>
                        <Divider />
                    </List>
                )
                    :
                    (
                        <List >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <ListItem button style={listItemStyles}  >
                                        <h3>Settings </h3>
                                        <span style={{ marginLeft: "85vw" }}>App version 8.49</span>
                                        {/* <ForwardLinksDrawer /> */}
                                        {/* Here Code Horizontal Scroll Bar Remain */}
                                    </ListItem>
                                </Grid>

                            </Grid>
                            <Divider />
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <ListItem button style={listItemStyles} onClick={handleBookMarks} >
                                        <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><MenuBookTwoToneIcon /></Button>
                                        <ListItemText primary="BookMarks" />
                                        <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
                                    </ListItem>
                                </Grid>
                                <Grid item xs={6}>
                                    <ListItem button style={listItemStyles} onClick={() => { window.location.href = "/contact-us" }} >
                                        <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><WifiCalling3OutlinedIcon /></Button>
                                        <ListItemText primary="Contact Us" />
                                        <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
                                    </ListItem>
                                </Grid>
                            </Grid>
                            <Divider />
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <ListItem button style={listItemStyles} onClick={() => { window.location.href = "/feedback" }}>
                                        <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><StarBorderRoundedIcon /></Button>
                                        <ListItemText primary="Feedback" />
                                        <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
                                    </ListItem>
                                </Grid>
                                <Grid item xs={6}>
                                    <ListItem button style={listItemStyles} onClick={toggleTheme} checked={themeset === "dark"}  >
                                        <Button size="small" title='' style={{ width: "20px", margin: "5px" }} >{themeset === "light" ? <LightModeTwoToneIcon /> : <DarkModeTwoToneIcon />}</Button>
                                        <ListItemText primary={`Switch to ${themeset === 'light' ? 'Dark' : 'Light'} Mode`} />
                                        <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
                                    </ListItem>
                                </Grid>
                            </Grid>
                            <Divider />
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <ListItem button style={listItemStyles} onClick={() => { window.location.href = "/rules&regulations" }}>
                                        <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><AssuredWorkloadIcon /></Button>
                                        <ListItemText primary="Rules & Regulations" />
                                        <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><ArrowForwardIosIcon /></Button>
                                    </ListItem>
                                </Grid>
                                <Grid item xs={6}>
                                    <ListItem button style={listItemStyles} onClick={() => { window.location.href = "/about-us" }} >
                                        <Button size="small" title='' style={{ width: "20px", margin: "5px" }} ><InfoOutlinedIcon /></Button>
                                        <ListItemText primary="About Us" />
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

export default Setting;
