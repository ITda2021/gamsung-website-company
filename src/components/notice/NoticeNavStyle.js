import React from "react";
import styled from "styled-components";

const StyledNoticeNavStyle = styled.div`
  @media (max-width: 960px) {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

function NoticeNavStyle({ children, ...rest }) {
  return <StyledNoticeNavStyle {...rest}>{children}</StyledNoticeNavStyle>;
}

export default NoticeNavStyle;