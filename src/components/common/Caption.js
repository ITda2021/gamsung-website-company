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

const StyledCaption = styled.div`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 1.6rem;
  letter-spacing: 0.355em;
  color: ${(props) => props.color || palette.gray[3]};
  ${centerStyle}
  @media (max-width: 960px) {
    font-size: 1.2rem;
    line-height: 125%;
  }
`;

function Caption({ children, ...rest }) {
  return <StyledCaption {...rest}>{children}</StyledCaption>;
}

export default Caption;
