import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardActions, Button, Typography, CardMedia, Link } from "@mui/material"
import { useMediaQuery } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import LoadingImage from "../assets/loading.gif"

const UnReadNews = () => {
    const [articles, setArticles] = useState([]);
    const isDesktop = useMediaQuery('(min-width:600px)'); // Check if the device is desktop

    useEffect(() => {

        const apiKey = 'f900a61243ef4a0180b53e753b33e515'; // Replace 'xxx' with your actual API key
        const apiUrl = `https://newsapi.org/v2/top-headlines?q=world&apiKey=${apiKey}`;


        axios.get(apiUrl)
            .then((response) => {
                setArticles(response.data.articles);
            })
            .catch((error) => {
                console.error('Error fetching news:', error);
            });
    }, []);

    // const handleLike = (index) => {
    //     // Implement logic to handle liking an article
    // };

    // const handleDisLike = (index) => {
    //     // Implement logic to handle disliking an article
    // };

    // const handleComment = (index) => {
    //     // Implement logic to handle commenting on an article
    // };


    return (
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
    );
};

export default UnReadNews;
