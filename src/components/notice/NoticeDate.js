import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

const StyledNoticeDate = styled.div`
  float: right;
  margin-right: 3.5rem;
  display: inline-block;
  text-align: center;
  font-weight: 40rem;
  font-size: 1.4rem;
  line-height: 2.5rem;
  padding: 15px 0;
  color: ${(props) => props.color || palette.gray[6]};

  @media (max-width: 960px) {
    background-color: black;
    display: none;
  }
`;

function NoticeDate({ children, ...rest }) {
  return <StyledNoticeDate {...rest}>{children}</StyledNoticeDate>;
}

export default NoticeDate;
