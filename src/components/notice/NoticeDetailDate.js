import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

const StyledNoticeDetailDate = styled.h4`
  color: ${(props) => props.color || palette.gray[4]};
  font-family: Montserrat;
  font-weight: 600;
  font-size: 1.6rem;
`;

function NoticeDetailDate({ children, ...rest }) {
  return <StyledNoticeDetailDate {...rest}>{children}</StyledNoticeDetailDate>;
}

export default NoticeDetailDate;
