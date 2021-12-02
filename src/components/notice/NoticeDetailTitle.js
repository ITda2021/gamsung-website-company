import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

const StyledNoticeDetailTitle = styled.h4`
  color: ${(props) => props.color || palette.gray[9]};
  font-size: 2.8rem;
  font-weight: 700;
  margin-top: 1.1rem;
`;

function NoticeDetailTitle({ children, ...rest }) {
  return (
    <StyledNoticeDetailTitle {...rest}>{children}</StyledNoticeDetailTitle>
  );
}

export default NoticeDetailTitle;
