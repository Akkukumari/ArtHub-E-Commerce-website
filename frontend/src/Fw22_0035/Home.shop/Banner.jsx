import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 600px; /* Set the desired height of the container */
  background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec13d72e-df61-43ed-9eaa-b2171bb9ec13/dfzhc6e-21a7b6eb-7f92-463c-9fda-ed3cd9aabab4.jpg/v1/fill/w_1182,h_676,q_75,strp/adoptable___319_by_xxbunnyberryxx_dfzhc6e-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njc2IiwicGF0aCI6IlwvZlwvZWMxM2Q3MmUtZGY2MS00M2VkLTllYWEtYjIxNzFiYjllYzEzXC9kZnpoYzZlLTIxYTdiNmViLTdmOTItNDYzYy05ZmRhLWVkM2NkOWFhYmFiNC5qcGciLCJ3aWR0aCI6Ijw9MTE4MiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.V9QHeb4NTIOTluymWdTGSBVAZ0wr4FyJovcKSw1p_fU'); /* Replace with the path to your image */
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
  margin-right:1000px
 
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
margin-left:70px
  align-items: flex-start;
`;

const Button = styled.button`
margin: 30px 20px;
border-color:white
border-radius: 20%;
padding: 15px 30px;
background-color: transparent;
color: white;
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
