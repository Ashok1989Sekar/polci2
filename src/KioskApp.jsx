import React, { useState } from "react";
import {
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Select,
  MenuItem,
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
import demoVideo from "./assests/demoVideo.mp4";
import { useTranslation } from "react-i18next";
import Slider from "./components/Slider";
import img from "./assests/image (26).png";
import i18n from "./i18n";
import FINAL from "./assests/FINAL.mp4"

const images = [image1, image2, image3];
const KioskApp = () => {
 
  const { t } = useTranslation(["translationKioskApp"]);
  const [iframeUrl, setIframeUrl] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [selectedComponent, setSelectedComponent] = useState(null);
  const buttonData = [
    // { label: "CSR Status", url: "https://eservices.tnpolice.gov.in/CCTNSNICSDC/CSRStatusCheck", color: "primary", component: CSRStatusComponent },
    // { label: "FIR Status", url: "https://eservices.tnpolice.gov.in/CCTNSNICSDC/FIRStatusCheck", color: "warning", component: FIRStatusComponent },
    {
      label: t("Phishing Link Check"),
      url: "https://www.virustotal.com/gui/home/upload",
      color: "primary",
      img: img,
    },
    {
      label: t("Vehicle Number Check"),
      url: "https://eservices.tnpolice.gov.in/CCTNSNICSDC/CitizenVehicleHome",
      color: "secondary",
      img: img,
    },
    {
      label: t("CEIR Registration"),
      url: "https://www.ceir.gov.in/Home/index.jsp",
      color: "error",
      img: img,
    },
    {
      label: t("Block lost/stolen Mobile"),
      url: "https://www.ceir.gov.in/Request/CeirUserBlockRequestDirect.jsp",
      color: "success",
      img: img,
    },

    {
      label: t("Check lost/stolen Mobile Request Status"),
      url: "https://www.ceir.gov.in/Request/CeirRequestStatus.jsp",
      color: "warning",
      img: img,
    },
    {
      label: t("Suspect Mobile & Email Check"),
      url: "https://cybercrime.gov.in/Webform/suspect_search_repository.aspx",
      color: "primary",
      img: img,
    },
    {
      label: t("Suspect Website & App Check"),
      url: "https://cybercrime.gov.in/Webform/suspect_search_websites.aspx",
      color: "success",
      img: img,
    },
    {
      label: t("Report Suspect"),
      url: "https://cybercrime.gov.in/Webform/cyber_suspect.aspx",
      color: "info",
      img: img,
    },
    {
      label: t("Cyber Volunteer Registration"),
      url: "https://cybercrime.gov.in/Webform/CyberVolunteerinstruction.aspx",
      color: "success",
      img: img,
    },
    {
      label: t("Cyber Crime Fraud Registration"),
      url: "https://cybercrime.gov.in/Webform/Index.aspx",
      color: "secondary",
      img: img,
    },
    {
      label: t("Cyber Crime Complaint Tracking"),
      url: "https://cybercrime.gov.in/Webform/chkackstatus.aspx",
      color: "error",
      img: img,
    },
    {
      label: t("Check no. of sim registered"),
      url: "https://tafcop.sancharsaathi.gov.in/telecomUser/",
      color: "warning",
      img: img,
    },
    // { label: "Register Complaint", url: "https://eservices.tnpolice.gov.in/CCTNSNICSDC/ComplaintRegistrationPage", color: "success" }
  ];

  // const KioskApp = () => {
  //   const [iframeUrl, setIframeUrl] = useState("");
  //   const [showChat, setShowChat] = useState(false);
  //   const [alertOpen, setAlertOpen] = useState(false);
  //   const [alertMessage, setAlertMessage] = useState("");
  //   const [selectedComponent, setSelectedComponent] = useState(null);

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
    handleAlertOpen(t("Alert MSG"));
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <Box
        sx={{
          background: "#b2dcf0",
          color: "#07323b",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          // opacity: "0.5",
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
            style={{ height: "80px" }}
          />
          <img
            src={logo}
            alt="Cyber Crime Logo"
            style={{ height: "70px", marginRight: "20px" }}
          />
        </Box>

        <Box
          style={{
            fontWeight: "bold",
            fontSize: "50px",
            marginRight: "80px",
          }}
        >
          {t("Help Desk")}
        </Box>
        <Box>
          <Select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="ta">தமிழ்</MenuItem>
          </Select>
        </Box>
      </Box>
       {/* <Slider images={images}/> */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(129, 132, 134, 0.5), rgba(31, 112, 150, 0.5)), url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          height: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            height: "80vh",
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
                width: "350px",
                fontSize: "1.2rem",
                opacity: "0.8",
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.1)" },
              }}
              onClick={() => handleButtonClick(button.url, button.component)}
            >
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "10vh",
                }}
              >
                <img
                  src={button.img}
                  alt={button.label}
                  style={{ width: "100%", height: "auto" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "35%",
                    left: "55%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "white",
                    fontWeight:"bolder",
                    fontSize: "14px",
                    color: "black !important",
                    width: "80%",
                  }}
                >
                  {button.label}
                </div>
              </div>
            </Button>
          ))}
        </div>
        <div
          style={{
            margin: "10px 10px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <video
            id="my-video-player"
            class="video-js vjs-default-skin vjs-big-play-centered"
            preload="true"
            fluid="true"
            controls="true"
            muted="true"
            autoplay="true"
            data-setup='{"loop": true}'
            style={{
              width: "95%",
              height: "auto",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": { boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)" },
            }}
          >
            <source src={FINAL} type="video/mp4" />
          </video>
          <script>const player = videojs('my-video-player');</script>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            height: "80vh",
            marginRight: "18px",
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
                width: "350px",
                fontSize: "1.2rem",
                opacity: "0.8",
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.1)" },
              }}
              onClick={() => handleButtonClick(button.url, button.component)}
            >
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "10vh",
                }}
              >
                <img
                  src={button.img}
                  alt={button.label}
                  style={{ width: "100%", height: "auto" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "35%",
                    left: "55%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "13px",
                    color: "black !important",
                    width: "80%",
                  }}
                >
                  {button.label}
                </div>
              </div>
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
          right: "29px",
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
        <DialogTitle>{t("Alert")}</DialogTitle>
        <DialogContent>{alertMessage}</DialogContent>
        <DialogActions>
          <Button onClick={() => handleAlertClose(false)} color="primary">
            {t("Cancel")}
          </Button>
          <Button
            onClick={() => handleAlertClose(true)}
            color="primary"
            autoFocus
          >
            {t("Go")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default KioskApp;