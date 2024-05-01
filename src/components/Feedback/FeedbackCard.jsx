import React, { useState } from 'react';
import './Card.css'; // Import CSS file for stylings
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS

const FeedbackCard = () => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [thoughts, setThoughts] = useState('');
    const Feedbackoptions = ['Nice', 'Good-Work', 'Great', 'Awesome!', 'Reaily-Wow!', 'Excellent']
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleBoxClick = (option) => {
        setSelectedOption(option);
    };

    const handleInputChange = (event) => {
        setThoughts(event.target.value);
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        setSelectedOption('');
        setThoughts('');

        // Handle submit logic here
        console.log('Selected option:', selectedOption);
        console.log('Entered thoughts:', thoughts);

        toast.success('Your Response has been sauccessfully saved..! ', {
            position: 'top-right', // Set the position (top-right, top-center, bottom-right, etc.)
            autoClose: 3000, // Close after 3 seconds
            hideProgressBar: false, // Show progress bar
            closeOnClick: true, // Close on click
            pauseOnHover: true, // Pause on hover
        });
        return
    };

    return (
        <>
            {
                isMobile ? (
                    <>
                        <div className="card" >
                            <div className="card-header">
                                <h1>Feedback</h1>
                                <p>How happily enjoying our Way2NewsApp</p>
                            </div>
                            <div className="container">
                                <div className="grid">
                                    {Feedbackoptions.map((option) => (
                                        <div
                                            key={option}
                                            className={`box ${selectedOption === option ? 'selected' : ''}`}
                                            onClick={() => handleBoxClick(option)}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                                <input
                                    type="text"
                                    value={thoughts}
                                    onChange={handleInputChange}
                                    placeholder="Share your thoughts..."
                                    className="input"
                                />
                                <button onClick={handleSubmit} className="submit-button">
                                    Submit
                                </button>
                            </div>
                            <ToastContainer />
                        </div >
                    </>
                )
                    : (<>
                        <div className="desktop-card">
                            <div className="desktop-card-header">
                                <h1>Feedback</h1>
                                <p>How happily enjoying our Way2NewsApp</p>
                            </div>
                            <div className="desktop-container">
                                <div className="desktop-grid">
                                    {Feedbackoptions.map((option) => (
                                        <div
                                            key={option}
                                            className={`box ${selectedOption === option ? 'selected' : ''}`}
                                            onClick={() => handleBoxClick(option)}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                                <input
                                    type="text"
                                    value={thoughts}
                                    onChange={handleInputChange}
                                    placeholder="Share your thoughts..."
                                    className="desktop-input"
                                />
                                <button onClick={handleSubmit} className="desktop-submit-button">
                                    Submit
                                </button>
                            </div>
                            <ToastContainer />
                        </div>
                    </>
                    )
            }
        </>
    )
};

export default FeedbackCard;

