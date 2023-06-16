import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 600px; /* Set the desired height of the container */
  background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ef3a4158-e0e0-418a-9e74-d273edb3a686/dfzf4vz-bc32f5d5-1713-4408-ab88-b1b41714cdd7.jpg/v1/fill/w_1192,h_670,q_70,strp/serene_meadows_by_wopgnop_dfzf4vz-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZWYzYTQxNTgtZTBlMC00MThhLTllNzQtZDI3M2VkYjNhNjg2XC9kZnpmNHZ6LWJjMzJmNWQ1LTE3MTMtNDQwOC1hYjg4LWIxYjQxNzE0Y2RkNy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.g3vuZg3M3KST6x2ff4oKq_sz2E6JDI1ieUoygi-WL1g'); /* Replace with the path to your image */
  background-size: cover;
  background-position: center;
  
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
 margin-left:300px
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity or color as desired */
  color: white;
`;

const Navigation = styled.nav`

 
`;



const Title = styled.h1`
  margin-left: 10px;
  font-size: 70px;
`;

const SearchInput = styled.input`

padding: 25px 300px;
font-size: 16px;
`;

const ButtonsWrapper = styled.div`
  display:flex
margin-left:10px
  align-items: flex-start;
`;

const Button = styled.button`
margin: 30px 10px;

border-radius: 20%;
padding: 15px 30px;
background-color: transparent;
color: black;
transition: background-color 0.3s;
cursor: pointer;
&:hover {
  background-color: white;
  color: black;
`;

const Banner = () => {
  return (
    <Container>
      <Overlay>
        <Navigation>
          
          <Title>Shop for art from creators<br></br>
you love</Title>
          <SearchInput type="text" placeholder="Search" />
         
        </Navigation>
        <ButtonsWrapper>
          
          <Button>Adoptables</Button>
          <Button>Avatar</Button>
          <Button>portrait</Button>
          <Button>Profile skins</Button>
        </ButtonsWrapper>
      </Overlay>
    </Container>
  );
};

export default Banner;
