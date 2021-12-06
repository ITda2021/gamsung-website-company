import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

const StyledNoticeDetailContent = styled.p`
  color: ${(props) => props.color || palette.gray[6]};
  font-size: 1.8rem;
  font-weight: 400;
  margin-top: 4.2rem;
  line-height: 4rem;
  margin-bottom: 12.9rem;
`;

function NoticeDetailContent({ children, ...rest }) {
  return (
    <StyledNoticeDetailContent {...rest}>{children}</StyledNoticeDetailContent>
  );
}

export default NoticeDetailContent;
