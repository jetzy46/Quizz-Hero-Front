import React from "react";
import styled from "styled-components";

const PageContainer = ({ children, ...props }) => (
  <StyledPage {...props} id="page-container">
    {children}
  </StyledPage>
);

const StyledPage = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  ${(props) => props.margin && "margin-bottom: 10em;"}
`;

export default PageContainer;
