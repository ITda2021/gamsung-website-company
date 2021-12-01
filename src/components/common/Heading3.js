import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

const StyledHeading3 = styled.h3`
  font-weight: bold;
  font-size: 3.6rem;
  line-height: 150%;
  color: ${(props) => props.color || palette.gray[9]};
  @media (max-width: 768px) {
    font-size: 2.6rem;
    line-height: 145%;
  }
`;

function Heading3({ children, ...rest }) {
  return <StyledHeading3 {...rest}>{children}</StyledHeading3>;
}

export default Heading3;
