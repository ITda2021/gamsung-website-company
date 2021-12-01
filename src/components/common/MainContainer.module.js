import React from "react";
import styled from "styled-components";

const StyledMainContainer = styled.div`
  max-width: 1280px;
  width: 96%;
  margin: 0 auto;
  background-size: cover;
`;

function MainContainer({ ...rest }) {
  return <StyledMainContainer {...rest}></StyledMainContainer>;
}

export default MainContainer;
