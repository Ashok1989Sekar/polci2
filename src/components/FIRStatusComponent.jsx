import React from "react";
import { Typography, Box, Button } from "@mui/material";

const FIRStatusComponent = () => {
  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };
  console.log("came")
  return (
    <Box
      sx={{
        fontFamily: "Arial, sans-serif",
        color: "#333",
        fontSize: "20px",
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <Typography variant="h4" sx={{ color: "#ed6c02", marginBottom: "20px" }}>
        How to Check FIR Status
      </Typography>
      <ol>
        <li>
          <Typography variant="body1">
            <strong>Select Registration Date:</strong> Choose the date when the
            FIR was registered from the calendar input provided.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Enter Complainant Mobile Number:</strong> Input the mobile
            number of the complainant or petitioner associated with the FIR.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Select District:</strong> Choose the district where the FIR
            was filed from the dropdown menu. You must select one option from
            the list.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Select Police Station:</strong> Choose the police station
            where the FIR was filed from the dropdown menu. You must select one
            option from the list.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Enter FIR Number:</strong> Input the FIR number associated
            with the case. This is a unique identifier, typically in the format
            of "10/2010".
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Enter Registration Date and Time:</strong> Provide the exact
            date and time when the FIR was registered. You can input this
            information manually.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Enter Secure Code:</strong> Input the security code or
            captcha displayed on the website to verify that you are not a bot.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Click Submit:</strong> Once you've filled in all the
            required details accurately, click on the "Submit" or "Check Status"
            button to proceed with the FIR status check.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>View Results:</strong> The FIR status will be displayed on
            the website. Review the status carefully.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Take Further Action:</strong> Depending on the status, take
            appropriate action. Follow up if needed.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Note Down Information:</strong> Optionally, take note of the
            FIR status information for your records.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Close the Website:</strong> After completing the check, you
            can close the website and it will take you to the main screen.
          </Typography>
        </li>
      </ol>
      <Box sx={{ width: "100%", display: "flex", justifyContent:"center"}}>
        <Button
          sx={{
            height: "50px",
            width: "300px",
            fontSize: "1.2rem",
            marginBottom: "10px",
          }}
          variant="contained"
          color={"warning"}
          onClick={() =>
            handleButtonClick(
              "https://eservices.tnpolice.gov.in/CCTNSNICSDC/FIRStatusCheck"
            )
          }
        >
          CHECK FIR STATUS
        </Button>
      </Box>
    </Box>
  );
};

export default FIRStatusComponent;
