import React from "react";
import styled from "styled-components";

const StyledNoticeNavStyle = styled.div`
  margin-top: 2.7rem;
  @media (max-width: 960px) {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    user-select: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

function NoticeNavStyle({ children, ...rest }) {
  return <StyledNoticeNavStyle {...rest}>{children}</StyledNoticeNavStyle>;
}

export default NoticeNavStyle;
