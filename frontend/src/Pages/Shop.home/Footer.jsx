import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: rgb(52, 53, 51);
  padding: 60px 0;
  color: white;
  font-size: 14px;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: yellow;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LinksColumn = styled.div`
  width: 16%;
  min-width: 150px;
`;

const UsefulLinksColumn = styled.div`
  width: 25%;
  min-width: 200px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
`;



const MobileApps = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  margin-top: 20px;
`;

const MobileAppImage = styled.img`
  height: 40px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const Copy = styled.p`
  margin: 0;
`;

const Address = styled.p`
  font-size: 12px;
`;

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <LinksColumn>
          <Title>ONLINE SHOPPING</Title>
          <List>
            <ListItem><Link href="#">About</Link></ListItem>
            <ListItem><Link href="#">Devloper</Link></ListItem>
            <ListItem><Link href="#">Images</Link></ListItem>
            <ListItem><Link href="#">Art</Link></ListItem>
            <ListItem><Link href="#">Oil paintaing</Link></ListItem>
          
          </List>
        </LinksColumn>
        <LinksColumn>
          <Title>USEFUL LINKS</Title>
          <List>
            <ListItem><Link href="#">Blog</Link></ListItem>
            <ListItem><Link href="#">Careers</Link></ListItem>
            <ListItem><Link href="#">Site Map</Link></ListItem>
            <ListItem><Link href="#">Corporate Information</Link></ListItem>
            <ListItem><Link href="#">Whitehat</Link></ListItem>
          </List>
        </LinksColumn>
        <UsefulLinksColumn>
          <Title>CUSTOMER POLICIES</Title>
          <List>
            <ListItem><Link href="#">Contact Us</Link></ListItem>
            <ListItem><Link href="#">FAQ</Link></ListItem>
            <ListItem><Link href="#">T&C</Link></ListItem>
            <ListItem><Link href="#">Terms Of Use</Link></ListItem>
            <ListItem><Link href="#">Track Orders</Link></ListItem>
            <ListItem><Link href="#">Shipping</Link></ListItem>
            <ListItem><Link href="#">Cancellation</Link></ListItem>
            
          </List>
        </UsefulLinksColumn>
        <UsefulLinksColumn>
          <Title>EXPERIENCE Art hub APP ON MOBILE</Title>
          <MobileApps>
            <Link href="#"><MobileAppImage src="https://th.bing.com/th/id/OIP.31CQI8Mh0d67Xfx9pBGL1wHaF0?w=225&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Google Play" /></Link>
            <Link href="#"><MobileAppImage src="https://th.bing.com/th/id/OIP.z_D7I8ja-bCWHjtujdrDLwHaHZ?w=154&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="App Store" /></Link>
          </MobileApps>
        </UsefulLinksColumn>
      </Container>
      <Bottom>
        <Copy>&copy; 2023 www.Arthub.com. All rights reserved.</Copy>
        <Address>Registered Office Address</Address>
      </Bottom>
    </FooterContainer>
  );
}

export default Footer;
