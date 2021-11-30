import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

const StyledCaption = styled.div`
  font-size: 18px;
  line-height: 195%;
  color: ${(props) => props.color || palette.gray[6]};
`;

function Caption({ children, ...rest }) {
  return <StyledCaption {...rest}>{children}</StyledCaption>;
}

export default Caption;
