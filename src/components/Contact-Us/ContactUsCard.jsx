import React from 'react';
import './Card.css'; // Import CSS file for styling
import { Divider } from '@mui/material';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const ContactCard = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h2>Contact Us</h2>
            </div>
            <div className="card-footer">
                <h3>Contact Details</h3>
                <p>For any support / any other queries write to</p>
                <p><MailOutlineOutlinedIcon /> Email : reach@way2news.com</p>

                <p>For advertising/partnerships</p>
                <p><MailOutlineOutlinedIcon /> E-mail: advertise@way2news.com</p>
            </div>
            <div className="card-footer">
                <h3>Grievance</h3>
                <p>For any complaint, queries or grievance, you can reach out to us on the email addresses provided below.</p>
                <p>The contact details of the Grievance officer:</p>
                <p><MailOutlineOutlinedIcon />Mr. C P N Karthik <br/><span>grievance@way2news.com</span> </p>
                
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

export default ContactCard;