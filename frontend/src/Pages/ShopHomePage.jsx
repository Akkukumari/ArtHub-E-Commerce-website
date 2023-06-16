import React from 'react';
import MyCarousel from '../Fw22_0035/Carousel1';
import Banner from '../Fw22_0035/Home.shop/Banner';
import Footer from '../Fw22_0035/Home.shop/Footer';
import styled from 'styled-components';

const PageContainer = styled.div`
  background-color: black; /* Set the page body background color to black */
`;

const ShopHomepage = () => {
  return (
    <PageContainer>
      <Banner />
      <MyCarousel />
      <MyCarousel />
      <MyCarousel />
      <Footer />
    </PageContainer>
  );
};

export default ShopHomepage;
