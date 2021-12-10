import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

const StyledHeading5 = styled.h5`
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 161.8%;
  color: ${(props) => props.color || palette.gray[0]};

  &:hover,
  &:focus {
    color: ${(props) => props.color || palette.gray[4]};
  }
  @media (max-width: 768px) {
    font-size: 2.2rem;
    line-height: 161.8%;
  }
`;

function Heading5({ children, ...rest }) {
  return <StyledHeading5 {...rest}>{children}</StyledHeading5>;
}

export default Heading5;
