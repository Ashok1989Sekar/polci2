import React, { useState } from "react";
import {
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from "@mui/material";
import Chatbot from "./Chatbot";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import MuiAlert from "@mui/material/Alert";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import logo from "./assests/logo.jpg";
import background from "./assests/background.jpg";
import policelogo from "./assests/policelogo.png";
import FIRStatusComponent from "./components/FIRStatusComponent";
import CSRStatusComponent from "./components/CSRStatusComponent";
import image1 from "./assests/slider1.jpg";
import image2 from "./assests/slider2.jpg";
import image3 from "./assests/slider3.jpg";
import demoVideo from"./assests/demoVideo.mp4"
import Slider from "./components/Slider";

const images=[image1,image2,image3];
const buttonData = [
  // { label: "CSR Status", url: "https://eservices.tnpolice.gov.in/CCTNSNICSDC/CSRStatusCheck", color: "primary", component: CSRStatusComponent },
  // { label: "FIR Status", url: "https://eservices.tnpolice.gov.in/CCTNSNICSDC/FIRStatusCheck", color: "warning", component: FIRStatusComponent },
  {
    label: "Phishing Link Check",
    url: "https://www.virustotal.com/gui/home/upload",
    color: "primary",
  },
  {
    label: "Vehicle Number Check",
    url: "https://eservices.tnpolice.gov.in/CCTNSNICSDC/CitizenVehicleHome",
    color: "secondary",
  },
  {
    label: "CEIR Registration",
    url: "https://www.ceir.gov.in/Home/index.jsp",
    color: "error",
  },
  {
    label: "Block lost/stolen Mobile",
    url: "https://www.ceir.gov.in/Request/CeirUserBlockRequestDirect.jsp",
    color: "success",
  },
  
  {
    label: "Check lost/stolen Mobile Request Status",
    url: "https://www.ceir.gov.in/Request/CeirRequestStatus.jsp",
    color: "warning",
  },
  {
    label: "Suspect Mobile & Email Check",
    url: "https://cybercrime.gov.in/Webform/suspect_search_repository.aspx",
    color: "primary",
  },
  {
    label: "Suspect Website & App Check",
    url: "https://cybercrime.gov.in/Webform/suspect_search_websites.aspx",
    color: "success",
  },
  {
    label: "Report Suspect",
    url: "https://cybercrime.gov.in/Webform/cyber_suspect.aspx",
    color: "info",
  },
  {
    label: "Cyber Volunteer Registration",
    url: "https://cybercrime.gov.in/Webform/CyberVolunteerinstruction.aspx",
    color: "success",
  },
  {
    label: "Cyber Crime Fraud Registration",
    url: "https://cybercrime.gov.in/Webform/Index.aspx",
    color: "secondary",
  },
  {
    label: "Cyber Crime Complaint Tracking",
    url: "https://cybercrime.gov.in/Webform/chkackstatus.aspx",
    color: "error",
  },
  {
    label: "Check no. of sim registered",
    url: "https://tafcop.sancharsaathi.gov.in/telecomUser/",
    color: "warning",
  },
  // { label: "Register Complaint", url: "https://eservices.tnpolice.gov.in/CCTNSNICSDC/ComplaintRegistrationPage", color: "success" }
];

const KioskApp = () => {
  const [iframeUrl, setIframeUrl] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleAlertOpen = (message) => {
    setAlertMessage(message);
    setAlertOpen(true);
  };

  const handleAlertClose = (confirmed) => {
    if (confirmed) {
      // Open the URL in a new tab
      window.open(iframeUrl, "_blank");
    }
    setAlertOpen(false);
  };

  const handleButtonClick = (url, component) => {
    setIframeUrl(url);
    setSelectedComponent(component);
    handleAlertOpen(
      "To return to the app, close the window and it will take you back to the app window."
    );
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <>
  
      <Typography
        sx={{
          background: "#b2dcf0",
          color: "#07323b",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          opacity:"0.5",
          justifyContent: "space-between",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": { boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)" },
        }}
      >
        <Box>
        <img
          src={policelogo}
          alt="Cyber Crime Logo"
          style={{ height: "80px", marginRight: "20px" }}
        />
        <img
          src={logo}
          alt="Cyber Crime Logo"
          style={{ height: "70px", marginRight: "20px" }}
        />
        </Box>
      
        <span
          style={{
            fontWeight: "bold",
            fontSize: "50px",
            marginRight: "700px",
            transition: "color 0.3s ease-in-out",
            "&:hover": { color: "#f00" },
          }}
        >
          Cyber Crime Portal
        </span>
      </Typography>
      {/* <Slider images={images} /> */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(129, 132, 134, 0.5), rgba(31, 112, 150, 0.5)), url(${background})`, // Overlay with semi-transparent black
          backgroundSize: "cover", // Cover the entire area
          backgroundPosition: "center", // Center the image
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          padding: "20px",
        }}
      >
        <div
          style={{
            height: "100vh",
            width: "300px",
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
            alignItems: "flex-start",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": { boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)" },
          }}
        >
          {buttonData.slice(0, 6).map((button, index) => (
            <Button
              key={index}
              sx={{
                height: "100px",
                width: "300px",
                fontSize: "1.2rem",
                opacity: "0.8",
                marginBottom: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.1)" },
              }}
              variant="contained"
              color={button.color}
              onClick={() => handleButtonClick(button.url, button.component)}
            >
              {button.label}
            </Button>
          ))}
        </div>
        <div style={{ margin: "10px 10px", width: "100%" }}>
          {/* {selectedComponent && <selectedComponent />} */}
          {/* Video Player */}
          <video
            controls
            style={{
              width: "100%",
              height: "auto",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": { boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)" }
            }}
          >
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "300px",
            marginLeft: "10px",
            alignItems: "flex-end",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": { boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)" },
          }}
        >
          {buttonData.slice(6).map((button, index) => (
            <Button
              key={index}
              sx={{
                height: "100px",
                width: "300px",
                opacity: "0.8",
                fontSize: "1.2rem",
                marginBottom: "10px",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.1)" },
              }}
              variant="contained"
              color={button.color}
              onClick={() => handleButtonClick(button.url, button.component)}
            >
              {button.label}
            </Button>
          ))}
        </div>
   
      </div>
      {showChat && <Chatbot />}
      <Button
        variant="contained"
        color="primary"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "325px",
          borderRadius: "40%",
          height: "50px",
          width: "50px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": { boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)" },
        }}
        onClick={toggleChat}
      >
        {showChat ? <CloseOutlinedIcon /> : <ChatOutlinedIcon />}
      </Button>
      <Dialog open={alertOpen} onClose={() => handleAlertClose(false)}>
        <DialogTitle>Alert</DialogTitle>
        <DialogContent>{alertMessage}</DialogContent>
        <DialogActions>
          <Button onClick={() => handleAlertClose(false)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => handleAlertClose(true)}
            color="primary"
            autoFocus
          >
            Go
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default KioskApp;
