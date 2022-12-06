import React from "react";
import styled from "styled-components";

function Landing(props) {
  return (
    <MainContainer>
      <h1>landing avec futur loading screen</h1>
    </MainContainer>
  );
}

export default Landing;

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
