import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';
import videoSrc from '../assets/zori website.mp4'; // Ensure this path is correct

const VideoContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 100vh;  // Full height
  overflow: hidden;
  margin-bottom:50px;
`;

const Video = styled('video')`
  width: 100%;
  height: 100%;
  object-fit: cover;  // Ensures the video covers the container
`;

const OverlayText = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 1;  // Make sure text is above the video
  padding: 0 2rem;  // Optional padding for better text readability
`;

const MainContent = () => {
  return (
    <VideoContainer>
      <Video
        src={videoSrc}  // Use the imported video file
        autoPlay
        muted
        loop
      />
      <OverlayText>
        {/* <Typography variant="h2" gutterBottom>
          Welcome to Our Platform
        </Typography>
        <Typography variant="h5" gutterBottom>
          Explore our features and services.
        </Typography> */}
        {/* <Box sx={{ marginTop: '2rem' }}>
          <Button variant="contained" color="primary">Get Started</Button>
        </Box> */}
      </OverlayText>
    </VideoContainer>
  );
};

export default MainContent;
