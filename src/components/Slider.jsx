// import React, { useState, useEffect } from "react";
// import { IconButton, Box } from "@mui/material";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// const Slider = ({ images }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval);
//   }, [images]);

//   const nextSlide = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   const prevSlide = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   return (
//     <Box
//       style={{
//         position: "relative",
//         width: "100%",
//         height: "40vh",
//         overflow: "hidden",
//       }}
//     >
//       <Box
//         style={{
//           display: "flex",
//           transition: "transform 0.5s ease-in-out",
//           transform: `translateX(-${currentImageIndex * 100}%)`,
//         }}
//       >
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index}`}
//             style={{
//               // width: "50%",
//               height: "50vh",
//               // objectFit: "cover",
//             }}
//           />
//         ))}
//       </Box>
//       <Box
//         style={{
//           position: "absolute",
//           top: "50%",
//           transform: "translateY(-50%)",
//           zIndex: 1,
//         }}
//       >
//         <IconButton onClick={prevSlide} aria-label="Previous">
//           <ChevronLeft />
//         </IconButton>
//         <IconButton onClick={nextSlide} aria-label="Next">
//           <ChevronRight />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// };

// export default Slider;

import React, { useState, useEffect } from "react";
import { IconButton, Box } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        height: "40vh",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentImageIndex * 100}%)`,
        }}
      >
        {images.map(
          (image, index) =>
            index === currentImageIndex && (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                style={{
                  width: "100%", // Make the image take full width
                  height: "40vh", // Adjust the height as needed
                  objectFit: "cover",
                }}
              />
            )
        )}
      </Box>
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <IconButton onClick={prevSlide} aria-label="Previous">
          <ChevronLeft />
        </IconButton>
      </Box>
      <Box
        style={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <IconButton onClick={nextSlide} aria-label="Next">
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Slider;
