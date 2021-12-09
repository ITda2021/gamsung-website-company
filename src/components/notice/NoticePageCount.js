import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

const StyledNoticePageCount = styled.p`
  font-family: Montserrat;
  color: ${(props) => props.color || palette.gray[7]};
  font-size: 1.4rem;
  font-weight: 50rem;
  display: inline-block;
  margin: 0 4.2rem;
`;

function NoticePage({ children, ...rest }) {
  return <StyledNoticePageCount {...rest}>{children}</StyledNoticePageCount>;
}

export default NoticePage;
