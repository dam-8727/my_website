import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import CrewMember from './CrewMember'; // Adjust the import path as needed
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px; /* Space between rows and heading */
  padding: 20px;
  width: 100%;
  margin-bottom:50px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    gap: 30px;
    padding: 15px;
  }
`;

const Heading = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size:2.5rem;
  
  /* Styling for heading */
  h2 {
    color: white; /* Set heading color to white */
    font-size: 2rem; /* Adjust font size for larger screens */
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem; /* Adjust font size for smaller screens */
    }
  }
`;

const TopRow = styled.div`
  display: flex;
  gap: 50px; /* Space between top row cards */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px; /* Adjust gap for smaller screens */
  }
`;

const BottomRow = styled.div`
  display: flex;
  gap: 50px; /* Space between bottom row cards */
  flex-wrap: wrap;
  justify-content: center;
  width: 100%; /* Ensure cards are centered */
  max-width: 700px; /* Optional: Adjust based on card width and spacing */

  @media (max-width: 768px) {
    gap: 15px; /* Adjust gap for smaller screens */
  }

  @media (max-width: 480px) {
    gap: 10px; /* Further adjust gap for very small screens */
  }
`;

const CrewSection = () => {
  return (
    <Container>
      <Heading>
        <Typography variant="h3" component="h2">
          Meet Our Team
        </Typography>
      </Heading>
      <TopRow>
        {/* <CrewMember
          // name="Swati Goyal"
          // role="Co-Founder"
          // image={img1} // Replace with actual image path
        /> */}
        <CrewMember
          name="Shweta Joshi"
          role="Founder"
          // image={img1} // Replace with actual image path
        />
      </TopRow>
      <BottomRow>
        <CrewMember
          name="Bhawna Batra"
          role="Growth Head"
          // image={img1} // Replace with actual image path
        />
        <CrewMember
          name="Yogita"
          role="Head of Product"
          // image={img2}// Replace with actual image path
        />
        <CrewMember
          name="Damini Singla"
          role="Technical Lead"
          // image={img1}// Replace with actual image path
        />
      </BottomRow>
    </Container>
  );
};

export default CrewSection;
