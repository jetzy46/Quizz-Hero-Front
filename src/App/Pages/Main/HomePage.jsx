import React from "react";
import styled from "styled-components";

function HomePage(props) {
  return (
    <MainContainer>
      <h1>Home Page</h1>
    </MainContainer>
  );
}

export default HomePage;

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
