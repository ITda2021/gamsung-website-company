import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

const StyledHeading0 = styled.h1`
  font-weight: bold;
  font-size: 7rem;
  font-family: Noto Sans KR;
  line-height: 126.8%;
  color: ${(props) => props.color || palette.gray[0]};
  @media (max-width: 768px) {
    font-size: 7rem;
    line-height: 126.8%;
  }
`;

function Heading0({ children, ...rest }) {
  return <StyledHeading0 {...rest}>{children}</StyledHeading0>;
}

export default Heading0;
