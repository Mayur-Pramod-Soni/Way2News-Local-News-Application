import React, { useState } from 'react';
import './Refer.css'; // Import CSS file for stylings
import { useMediaQuery, useTheme } from '@mui/material';
import QRCodeScanner from './QRCodeScanner'; // Import the QRCodeScanner component
import QrScannerCode from 'react-qr-code'; // Import the QR Scanner library
import 'react-qr-code'; // Import the QR Scanner worker
import HorizontalRuleTwoToneIcon from '@mui/icons-material/HorizontalRuleTwoTone';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';


const Refer = ({ onClose }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // State variables
    const [showScanner, setShowScanner] = useState(false); // To control visibility of QR code scanner
    const [referCode, setReferCode] = useState('YourReferCode123'); // Initial refer code

    // Function to handle opening the scanner
    const handleOpenScanner = () => {
        setShowScanner(true);
    };

    // Function to handle scanning result from QR code scanner
    const handleScanResult = (result) => {
        // Here you can process the result obtained from scanning the QR code
        console.log('Scanned result:', result);
        // For simplicity, setting the scanned result as the refer code
        setReferCode(result);
        // Closing the scanner after obtaining the result
        setShowScanner(false);
    };

    // Function to handle closing the scanner
    const handleCloseScanner = () => {
        setShowScanner(false);
    };

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        isMobile ? (
            <div className="refer-container">
                <button onClick={handleBack} className='back-button-mobile'>
                    <HorizontalRuleTwoToneIcon className='back-icon-mobile' />
                </button>
                <h2>Refer</h2>
                <p>Scan to share the app with syour refer code:</p>
                <div className='scanner-box'>
                    <QrScannerCode value='YourReferCode123' className='scanner-show-box' />
                </div>
                <p style={{ textAlign: "center" }}>--------or---------</p>
                <div className="refer-code-container">
                    <input
                        type="text"
                        value={referCode}
                        readOnly
                        className="refer-code-input"
                    />
                </div>
                <p style={{ textAlign: "center" }}>--------or---------</p>
                <p>Enter refer code here:</p>
                <div className="enter-code-container">
                    <input
                        type="text"
                        placeholder="Enter refer code"
                        className="enter-code-input"
                    />
                    <button className="submit-button">Submit</button>
                </div>
                {showScanner && <QRCodeScanner onScanResult={handleScanResult} onClose={handleCloseScanner} />}
            </div>
        ) : (
            <div className="refer-container-desktop">
                <button onClick={handleBack} className=''>
                    <ArrowBackOutlinedIcon className='' />
                </button>
                <h2>Refer</h2>
                <p>Scan to share the app with your refer code:</p>
                <div className='scanner-box-desktop' style={{ alignItems: "center", justifyContent: "center", alignContent: "center", display: "grid" }}>
                    <QrScannerCode value='hey' className='scanner-show-desktop' />
                </div>
                <p style={{ textAlign: "center" }}>--------or---------</p>
                <div className="refer-code-container">
                    <input
                        type="text"
                        value={referCode}
                        readOnly
                        className="refer-code-input"
                    />
                </div>
                <p style={{ textAlign: "center" }}>--------or---------</p>
                <p>Enter refer code here:</p>
                <div className="enter-code-container">
                    <input
                        type="text"
                        placeholder="Enter refer code"
                        className="enter-code-input"
                    />
                    <button className="submit-button">Submit</button>
                </div>
                {showScanner && <QRCodeScanner onScanResult={handleScanResult} onClose={handleCloseScanner} />}
            </div>
        )
    );
}
export default Refer