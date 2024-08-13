import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

const StyledCard = styled(motion.div)`
 border-radius:10px;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.3s;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* Initial shadow */
`;

const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

const CardText = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  width: 100%;
  padding: 10px;
`;

const CrewMember = ({ name, role, image }) => (
  <StyledCard
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.1 }}  // Scale up on hover
    transition={{ duration: 0.3 }}
  >
    <StyledImage image={image} />
    <CardText>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="body2" color="inherit">
        {role}
      </Typography>
    </CardText>
  </StyledCard>
);

export default CrewMember;
