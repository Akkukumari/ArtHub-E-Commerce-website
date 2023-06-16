import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: black;
  padding: 20px;
  text-align: center;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.p`
  color: #fff; /* Set the text color to white */
  font-size: 18px; /* Increase the font size */
  margin: 0;
`;

const FooterLinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #00c6ff;
  }
`;

const StyledFooterLink = styled(FooterLink)`
  color: white;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
        <FooterLink href="/core-membership">Core Membership</FooterLink>
        <FooterLink href="/deviantart-protect">DeviantArt Protect</FooterLink>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLink href="/developers">Developers</FooterLink>
        <FooterLink href="/advertise">Advertise</FooterLink>
        <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
        <FooterLink href="/etiquette">Etiquette</FooterLink>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLink href="/careers">Careers</FooterLink>
        <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
        <FooterLink href="/copyright-policy">Copyright Policy</FooterLink>
        <FooterLink href="/help-and-faq">Help and FAQ</FooterLink>
      </FooterLinksWrapper>
      <FooterText>
        Watch the official DA Team profile for news, product releases, and devious activities.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
