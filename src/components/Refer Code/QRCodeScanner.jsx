
// // QRCodeScanner.js

// import React, { useRef, useEffect } from 'react';
// import QrScannerCode from 'react-qr-code'; // Import the QR Scanner library
// import 'react-qr-code'; // Import the QR Scanner worker
// import './Refer.css'; // Import CSS file for stylings

// const QRCodeScanner = ({ onScanResult, onClose }) => {
//     // const videoRef = useRef(null);

//     // useEffect(() => {
//     //     const scanner = new QrScannerCode(videoRef.current, (result) => {
//     //         // Callback function to handle the scan result
//     //         onScanResult(result);
//     //     });

//     //     // Start scanning
//     //     scanner.start();

//     //     return () => {
//     //         // Cleanup when usnmounting
//     //         scanner.destroy();
//     //     };
//     // }, [onScanResult]);

//     return (
//         <div className="scanner-container">
//             {/* <video ref={videoRef} className="qr-video" /> */}
//             <QrScannerCode value='hey'/>
//             <button className="close-button" onClick={onClose}>Close</button>
//         </div>
//     );
// };

// export default QRCodeScanner;
