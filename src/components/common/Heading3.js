import React from "react";
import styled, { css } from "styled-components";
import palette from "lib/style/palette";

const centerStyle = css`
  ${(props) =>
    props.center &&
    css`
      width: 100%;
      text-align: center;
      @media (max-width: 960px) {
        width: auto;
        text-align: left;
      }
    `}
`;

const StyledHeading3 = styled.h3`
  font-weight: bold;
  font-size: 3.6rem;
  line-height: 150%;
  color: ${(props) => props.color || palette.gray[9]};
  ${centerStyle}
  @media (max-width: 960px) {
    font-size: 2.6rem;
    line-height: 145%;
  }
`;

function Heading3({ children, ...rest }) {
  return <StyledHeading3 {...rest}>{children}</StyledHeading3>;
}

export default Heading3;
