import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import ApplyImage from '../assets/astronaut.webp'; // Ensure this path is correct

import BackgroundImage from '../assets/bg5.jpg';

const SectionContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${BackgroundImage}) no-repeat center center; /* Background image */
  background-size: cover; /* Ensure the image covers the container */
  padding: 4rem 0;
`;

const ContentWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  background-color: black // Ensure the background color matches the theme
  border-radius: 16px;
  margin-bottom: 4rem; // Space between the content and footer
`;

const ImageWrapper = styled(Box)`
  width: 40%;
`;

const TextWrapper = styled(Box)`
  width: 60%;
  padding-left: 2rem;
  color: white;
`;

const StyledButton = styled(Button)`
  background-color: #6c63ff;
  color: white;
  &:hover {
    background-color: #5753e1;
  }
`;

const SocialLinks = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem; // Space between social links and footer
`;

const Footer = styled(Box)`
  text-align: center;
  color: white;
  padding: 2rem 0;
   // Darker background for the footer
  width: 100%;
`;

const ApplySection = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ImageWrapper>
            <img src={ApplyImage} alt="Apply for IGO" style={{ width: '100%' }} />
          </ImageWrapper>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* <TextWrapper>
            <Typography variant="h3" gutterBottom>
             ICP
            </Typography>
            <Typography variant="body1" paragraph>
              Get access to a huge set of tools to seamlessly handle your game's integration with blockchain.
            </Typography>
            
          </TextWrapper> */}
        </motion.div>
      </ContentWrapper>

     
      
    </SectionContainer>
  );
};

export default ApplySection;
