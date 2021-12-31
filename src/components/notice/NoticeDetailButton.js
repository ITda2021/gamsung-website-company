import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

function NoticeDetailButton({ onClick, disabled, children }) {
  return (
    <StyledNoticeDetailButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledNoticeDetailButton>
  );
}
const StyledNoticeDetailButton = styled.button`
  border: 1.5px solid #000000;
  cursor: pointer;
  font-size: 1.6rem;
  padding: 1.2rem 3rem;
  border-radius: 4rem;
  background: ${(props) => props.color || palette.gray[0]};
  &:hover,
  &:focus {
    background: ${(props) => props.color || palette.gray[3]};
  }
`;
export default NoticeDetailButton;
