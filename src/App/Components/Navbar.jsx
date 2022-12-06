import React from "react";
import styled from "styled-components";

function Navbar(props) {
  return (
    <MainContainer>
      <h1>Quizz Hero</h1>
      <div>
        <p>Parcourir les catégories</p>
        <button>quizz</button>
      </div>
    </MainContainer>
  );
}

export default Navbar;

const MainContainer = styled.div`
  width: 100%;
  height: 15vh;
  background-color: #47475c;
`;
