import React from "react";
import { Typography, Box } from '@mui/material';

const CSRStatusComponent = () => (
    <Box
        sx={{
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            fontSize: '20px',
            maxWidth: '600px',
            margin: 'auto',
            padding: '20px',
        }}
    >
        <Typography variant="h4" sx={{ color: '#007bff', marginBottom: '20px' }}>How to Check CSR Status</Typography>
        <ol>
            <li>
                <Typography variant="body1">
                    <strong>Input Details:</strong> Fill in the following fields:
                    <ul>
                        <li><strong>CSR Number:</strong> Enter the CSR number provided to you.</li>
                        <li><strong>Registration Date:</strong> Select the date of registration.</li>
                        <li><strong>Petitioner Mobile Number:</strong> Enter the mobile number of the petitioner.</li>
                        <li><strong>Select District:</strong> Choose the district from the dropdown list.</li>
                        <li><strong>Select Police Station:</strong> Choose the police station from the dropdown list.</li>
                        <li><strong>Time:</strong> Enter the time in HH:MM format (24-hour format).</li>
                        <li><strong>Secure Code:</strong> Input the security code or captcha displayed on the website.</li>
                    </ul>
                </Typography>
            </li>
            <li>
                <Typography variant="body1">
                    <strong>Submit or Check Status:</strong> Click on the "Submit" or "Check Status" button to proceed.
                </Typography>
            </li>
            <li>
                <Typography variant="body1">
                    <strong>View Results:</strong> The CSR status will be displayed on the website. Review the status carefully.
                </Typography>
            </li>
            <li>
                <Typography variant="body1">
                    <strong>Take Further Action:</strong> Depending on the status, take appropriate action. Follow up if needed.
                </Typography>
            </li>
            <li>
                <Typography variant="body1">
                    <strong>Note Down Information:</strong> Optionally, take note of the CSR status information for your records.
                </Typography>
            </li>
            <li>
                <Typography variant="body1">
                    <strong>Close the Website:</strong> After completing the check, you can close the website and it will take you to the main screen.
                </Typography>
            </li>
        </ol>
    </Box>
);

export default CSRStatusComponent;
