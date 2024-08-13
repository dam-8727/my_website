import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import images
import space4 from '../assets/space4.jpg';
import space2 from '../assets/space2.jpeg';
import space3 from '../assets/space3.jpeg';

const PopularSpacesContainer = styled.div`
  padding: 40px;
  background: url('../assets/blurbackground.jpg') no-repeat center center;
  background-size: cover;
  position: relative;
  z-index: 1;
  margin-bottom: 40px; /* Space between sections */
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* Overlay to make text readable */
    z-index: -1;
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 40px; /* Spacing between heading and grid */
  margin-top: 0px;
`;

const SpacesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 20px;
`;

const SpaceCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d; /* Enable 3D transformations */
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    transform: scale(1.05) rotateX(10deg); /* Scale up and tilt */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const SpaceImageContainer = styled.div`
  width: 100%;
  height: 200px; /* Fixed height to maintain consistency */
  position: relative; /* Position relative for absolute children */
  overflow: hidden; /* Hide any overflow */
`;

const SpaceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure image covers the container */
  position: absolute; /* Absolute positioning for full coverage */
  top: 0;
  left: 0;
`;

const SpaceTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  padding: 10px 20px 10px; /* Adjusted padding for less gap */
  text-align: center;
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent background for readability */
  width: 100%; /* Full width to cover the card bottom */
  box-sizing: border-box; /* Include padding in the width */
  margin-top: 0; /* Removed margin-top to reduce gap */
`;

const popularSpaces = [
  { title: 'Space 1', image: space4 },
  { title: 'Space 2', image: space2 },
  { title: 'Space 3', image: space3 },
  // Add more spaces as needed
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const PopularSpaces = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <PopularSpacesContainer ref={ref}>
      <Heading>Popular Spaces</Heading>
      <SpacesGrid
        initial="hidden"
        animate={controls}
        variants={gridVariants}
      >
        {popularSpaces.map((space, index) => (
          <SpaceCard
            key={index}
            variants={itemVariants}
          >
            <SpaceImageContainer>
              <SpaceImage src={space.image} alt={space.title} />
            </SpaceImageContainer>
            <SpaceTitle>{space.title}</SpaceTitle>
          </SpaceCard>
        ))}
      </SpacesGrid>
    </PopularSpacesContainer>
  );
};

export default PopularSpaces;
