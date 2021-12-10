import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

const StyledHeading1 = styled.h1`
  font-weight: bold;
  font-size: 5.4rem;
  line-height: 126.8%;
  color: ${(props) => props.color || palette.gray[9]};
  @media (max-width: 960px) {
    font-size: 3.2rem;
  }
`;

function Heading1({ children, ...rest }) {
  return <StyledHeading1 {...rest}>{children}</StyledHeading1>;
}

export default Heading1;
