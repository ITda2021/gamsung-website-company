import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

const StyledNoticeTitle = styled.div`
  text-align: left;
  display: inline-block;
  text-align: center;
  font-weight: 40rem;
  font-size: 1.4rem;
  line-height: 2.5rem;
  padding: 15px 0;
  color: ${(props) => props.color || palette.gray[6]};

  @media (max-width: 960px) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 33.4rem;
    text-align: left;
    height: auto;
  }
`;

function NoticeTitle({ children, ...rest }) {
  return <StyledNoticeTitle {...rest}>{children}</StyledNoticeTitle>;
}

export default NoticeTitle;
