import React from 'react';
import './Card.css'; // Import CSS file for styling
import { Divider } from '@mui/material';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const AboutCard = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h2>About Us</h2>
            </div>
            <div className="card-body">
                <p>
                    Way2News is a first of its kind unique mobile media company in the country.
                    We produce & distribute “Made for Mobile Content” to Indian local language audience.
                    Like TV media & Print media, we are building a technology based mobile media company with short news and other rich content in Indian local languages.                </p>
            </div>
            <div className="card-footer">
                <h3>Contact Details</h3>
                <p>For any support / any other queries write to</p>
                <p><MailOutlineOutlinedIcon />reach@way2news.com</p>
            </div>
            <div className="card-footer">
                <h3>Address</h3>

                <p><LocationOnOutlinedIcon />Plot No.62, Hansa Crest,
                    Road No - 1, Jubilee Hills,
                    Hyderabad, Telangana - 500033.
                </p>
            </div>
            <Divider />
            <div className="copyright">
                <p>&copy; Way2News - COPYRIGHT 2017</p>
            </div>
        </div>
    );
};

export default AboutCard;

