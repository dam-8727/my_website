import React from 'react';
import styled from 'styled-components';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </a>
        </SocialLinks>
        <FooterText>© 2024 Zori. All rights reserved.</FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #282c34;
  padding: 20px 0;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SocialLinks = styled.div`
  margin-bottom: 10px;
  a {
    color: #fff;
    margin: 0 10px;
    font-size: 24px;
    transition: color 0.3s ease;

    &:hover {
      color: #61dafb;
    }
  }
`;

const FooterText = styled.p`
  color: #aaa;
  font-size: 14px;
`;

export default Footer;
