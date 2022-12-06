import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Profil(props) {
  const { userId } = useParams();

  return (
    <MainContainer>
      <p>Profil de {userId}</p>
    </MainContainer>
  );
}

export default Profil;

const MainContainer = styled.div``;
