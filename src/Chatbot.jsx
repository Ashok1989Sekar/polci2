import React from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import avatar from "./assests/avatar.jpg";
function Chatbot() {
  console.log("test chatbot");
  const steps = [
    {
      id: "Greet",
      message:
        "Hello, Welcome to the Cyber Crime Portal chatbot. How can I assist you?",
      trigger: "UserInput",
    },
    {
      id: "UserInput",
      user: true,
      trigger: "QueryResolved",
    },
    {
      id: "QueryResolved",
      message: "Did the response resolve your query?",
      trigger: "Options",
    },
    {
      id: "Options",
      options: [
        { value: "yes", label: "Yes", trigger: "YesEnd" },
        { value: "no", label: "No", trigger: "UserQuery" },
        { value: "other", label: "Other", trigger: "UserQuery" },
      ],
    },
    {
      id: "UserQuery",
      message: "Please type your query:",
      trigger: "QueryResponse",
    },
    {
      id: "QueryResponse",
      user: true,
      trigger: "NoEnd",
    },
    {
      id: "NoEnd",
      message:
        "Thank you for your query. I will get back to you shortly with a response.",
      end: true,
    },
    {
      id: "YesEnd",
      message: "Thank you.",
      end: true,
    },
  ];

  const chatBotStyle = {
    background: "#e9d2a0", // Background color of the chat bubble
    color: "#000000", // Text color of the chat bubble
    borderRadius: "10px", // Border radius of the chat bubble
    padding: "10px", // Padding of the chat bubble
    marginBottom: "10px", // Margin bottom of the chat bubble
  };
  const headerStyle = {
    background: "red", // Change background color of the header
    color: "white", // Change text color of the header
    textAlign: "center", // Center-align text
    padding: "10px", // Add padding
  };

  return (
    <Segment
      style={{
        position: "fixed",
        bottom: "90px",
        right: "20px",
        zIndex: "1000",
      }}
    >
      <ChatBot
        steps={steps}
        avatarStyle={{ width: "50px", height: "50px", borderRadius: "50%" }} // Adjust avatar size and shape
        botAvatar={avatar} // Set custom avatar URL
        bubbleStyle={chatBotStyle} // Apply custom styles to the chat bubbles
        headerTitle="Cyber Crime Portal"
        headerStyle={headerStyle} // Apply custom header styles
        style={{
          background: "#f0f0f0", // Change background color
          color: "blue", // Change text color
          border: "2px solid white", // Change border color
          borderRadius: "10px", // Adjust border radius
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Add shadow
        }}
      />
    </Segment>
  );
}

export default Chatbot;
