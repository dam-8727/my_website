import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gameImage from '../assets/img6.jpg';
import oculusImage from '../assets/img7.jpg';
import bitcoin from '../assets/bitcoin.png';
import img4 from '../assets/img4.jpg';
import img8 from '../assets/img8.jpg';

const TrendingItemsContainer = styled.div`
  padding: 40px;
  background: url('/assets/background.jpg') no-repeat center center;
  background-size: cover;
  position: relative;
  margin-bottom: 50px;
  z-index: 1;
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
  color: #fff;
  margin-bottom: 30px;
  margin-top: 0px;
`;

const ItemsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px; /* Added gap to the grid */
  margin-top: 20px;
`;

const ItemCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Adjusted for spacing */
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ItemTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin: 10px 0 20px; /* Adjusted margin for spacing */
  text-align: center;
`;

const trendingItems = [
  { title: 'Item 1', image: gameImage },
  { title: 'Item 2', image: oculusImage },
  { title: 'Item 3', image: bitcoin },
  { title: 'Item 4', image: img4 },
  { title: 'Item 5', image: img8 },
  // Add more items as needed
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const TrendingItems = () => {
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
    <TrendingItemsContainer ref={ref}>
      <Heading>Trending Items</Heading>
      <ItemsGrid initial="hidden" animate={controls} variants={gridVariants}>
        {trendingItems.map((item, index) => (
          <ItemCard
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
              transition: { duration: 0.3 },
            }}
          >
            <ItemImage src={item.image} alt={item.title} />
            <ItemTitle>{item.title}</ItemTitle>
          </ItemCard>
        ))}
      </ItemsGrid>
    </TrendingItemsContainer>
  );
};

export default TrendingItems;
