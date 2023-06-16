import React from 'react';

import Banner from './Banner';
import Footer from './Footer';
import styled from 'styled-components';
import Carousel1 from './Carousel1';

const PageContainer = styled.div`
  background-color: black; /* Set the page body background color to black */
`;

const ShopHomepage = () => {
  return (
    <PageContainer>
      <Banner />
     <Carousel1 />
      
      <Footer />
    </PageContainer>
  );
};

export default ShopHomepage;
