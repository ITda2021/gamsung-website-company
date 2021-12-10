import React from "react";
import styled, { css } from "styled-components";
//import palette from "lib/style/palette";

const StyledTab = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 2.3rem;
`;

const StyledTabText = styled.div`
  ${(props) => {
    if (props.selected) {
      return css`
        font-family: Montserrat;
        font-weight: bold;
        font-size: 2rem;
        line-height: 135%;
        text-align: right;
        color: #1b1d1f;
      `;
    } else {
      return css`
        font-family: Montserrat;
        font-weight: bold;
        font-size: 2rem;
        line-height: 135%;
        text-align: right;
        color: #e9ebed;
      `;
    }
  }}
`;

const StyledTabButtonOutline = styled.div`
  ${(props) => {
    if (props.selected) {
      return css`
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border: 1px solid #cacdd2;
        display: flex;
        justify-content: center;
        align-items: center;
      `;
    } else {
      return css`
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border: 1px solid #cacdd2;
        display: flex;
        justify-content: center;
        align-items: center;
      `;
    }
  }}
`;

const StyledTabButton = styled.div`
  ${(props) => {
    if (props.selected) {
      return css`
        width: 1.1rem;
        height: 1.1rem;
        border-radius: 50%;
        background: #464c52;
      `;
    } else {
      return css`
        width: 1.1rem;
        height: 1.1rem;
        border-radius: 50%;
        background: #e9ebed;
      `;
    }
  }}
`;

function Tab({ onClick, children, ...rest }) {
  return (
    <StyledTab onClick={onClick} {...rest}>
      <StyledTabText>{children}</StyledTabText>
      <StyledTabButtonOutline>
        <StyledTabButton></StyledTabButton>
      </StyledTabButtonOutline>
    </StyledTab>
  );
}

export default Tab;
