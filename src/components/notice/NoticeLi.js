import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

const StyledNoticeLi = styled.li`
  text-align: center;
  padding: 0 3.2rem;
  float:left;
  color: ${(props) => props.color || palette.gray[5]};
  font-size: 1.6rem;
  border-right: 0.1rem solid ${(props) => props.color || palette.gray[2]};
  list-style:none;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  &:first-child{
    padding-left:0;
  }
  &:last-child{
    border-right: none;
  }
  &:hover{
  color: ${(props) => props.color || palette.gray[8]};
  font-weight: 700;
  }
  }
`;

function NoticeLi({ children, ...rest }) {
  return <StyledNoticeLi {...rest}>{children}</StyledNoticeLi>;
}

export default NoticeLi;
