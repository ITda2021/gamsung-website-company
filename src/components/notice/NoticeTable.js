import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

const StyledNoticeTable = styled.div`
  width: 100%;
  border-top: 2px solid ${(props) => props.color || palette.gray[6]};
  border-bottom: 2px solid ${(props) => props.color || palette.gray[6]};
  user-select: none;
`;

function NoticeTable({ children, ...rest }) {
  return <StyledNoticeTable {...rest}>{children}</StyledNoticeTable>;
}

export default NoticeTable;
