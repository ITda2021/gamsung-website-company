import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

function NoticeDetailButton({ disabled, children }) {
  return (
    <StyledNoticeDetailButton disabled={disabled}>
      {children}
    </StyledNoticeDetailButton>
  );
}
const StyledNoticeDetailButton = styled.button`
  margin: auto;
  border: 1.5px solid #000000;
  cursor: pointer;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  padding: 1.2rem 3rem;
  border-radius: 4rem;
  display: block;
  background: ${(props) => props.color || palette.gray[0]};
  &:hover,
  &:focus {
    background: ${(props) => props.color || palette.gray[3]};
  }
`;
export default NoticeDetailButton;
