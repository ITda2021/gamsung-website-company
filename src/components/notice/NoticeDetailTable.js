import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

const StyledNoticDetailTable = styled.div`
  width: 100%;
  border-top: 2px solid ${(props) => props.color || palette.gray[6]};
`;

function NoticeDetailTable({ children, ...rest }) {
  return <StyledNoticDetailTable {...rest}>{children}</StyledNoticDetailTable>;
}

export default NoticeDetailTable;
