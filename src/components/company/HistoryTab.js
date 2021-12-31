import React from "react";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }`;

const StyledTab = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 2.3rem;
  cursor: pointer;
  @media (max-width: 960px) {
    gap: 1.2rem;
  }
  ${(props) =>
    props.selected &&
    css`
      animation: ${fadeIn} 300ms ease-in-out forwards;
    `};
`;

const StyledTabText = styled.div`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 2rem;
  line-height: 135%;
  color: ${(props) => (props.selected ? "#1b1d1f" : "#e9ebed")};
  @media (max-width: 960px) {
    font-size: 1.7rem;
  }
`;

const StyledTabButtonOutline = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid #cacdd2;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    !props.selected &&
    css`
      border: 0px;
    `}
  @media (max-width: 960px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const StyledTabButton = styled.div`
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 50%;
  background: ${(props) => (props.selected ? "#464c52" : "#e9ebed")};
  @media (max-width: 960px) {
    width: 0.85rem;
    height: 0.85rem;
  }
`;

function Tab({ onClick, children, ...rest }) {
  return (
    <StyledTab onClick={onClick} {...rest}>
      <StyledTabText {...rest}>{children}</StyledTabText>
      <StyledTabButtonOutline {...rest}>
        <StyledTabButton {...rest}></StyledTabButton>
      </StyledTabButtonOutline>
    </StyledTab>
  );
}

export default Tab;
