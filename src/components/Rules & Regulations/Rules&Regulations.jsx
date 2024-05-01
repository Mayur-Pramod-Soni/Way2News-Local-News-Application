import { Box, Button, useMediaQuery } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import { useTheme } from '@mui/material/styles';
import way2news from '../assets/way2newsimage.png'; //to render image
import w2n from "../assets/way2news.png"
import way2newslogo from "../assets/way2newslogo.png"
import Rules_Regulations_Card from './Rules&RegulationsCard';



const Rules_Regulations = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    // Define styles for the drawer
    const drawerStyles = isMobile ? { width: '100%' } : { width: '250px' };

    // Define styles for list items (optional)
    const listItemStyles = {
        '&:hover': {
            backgroundColor: '#f0f0f0',
        },
    };

    //for back ----
    const navigate = useNavigate();

    return (
        <>
            <div style={{height:"100%" , width:"100%"}}>
                {
                    isMobile ? (
                        <>
                            <div style={{ backgroundColor: "grey", height: "23vw", width: "100%", boxShadow: " 0px 0px 10px rgba(0, 0, 0, 0.1)" }} >
                                <h3 >Rules & Regulations</h3>

                                <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }} >
                                    <Button sx={{ color: "whitesmoke" }} onClick={() => navigate(-1)} ><ArrowBackTwoToneIcon />
                                        <b style={{ marginLeft: "15px" }}>Rules & Regulations</b>
                                    </Button>
                                </Box>
                            </div>
                            <Box sx={{ backgroundColor: "white", width: "100%", display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }} >
                                <img src={way2news} alt='No Image' style={{ width: "100%" }} />
                            </Box>
                        </>
                    ) :
                        (
                            <>
                                <div style={{ backgroundColor: "grey", height: "10%", width: "100%", boxShadow: " 0px 0px 10px rgba(0, 0, 0, 0.1)", }} >
                                    <h3 >Rules & Regulations</h3>

                                    <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", width: "100%", height: "3.5vw" }}>
                                        <Button sx={{ color: "black" }} onClick={() => navigate(-1)} ><ArrowBackTwoToneIcon />
                                            <b>Rules & Regulations</b>
                                        </Button>
                                    </Box>
                                </div>
                                <Box sx={{ backgroundColor: "white", width: "100%", display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }} >
                                    <img src={w2n} alt='No Image' style={{ width: "50%", height: "10vw" }} />
                                    <img src={way2newslogo} alt='No Image' style={{ width: "50%", height: "10vw" }} />
                                </Box>
                            </>

                        )
                }
            </div>
            <Rules_Regulations_Card />
        </>
    )
}

export default Rules_Regulations
