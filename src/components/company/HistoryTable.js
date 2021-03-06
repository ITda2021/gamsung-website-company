import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

const StyledTable = styled.div`
  min-height: 16rem;
  width: 62%;
  padding: 1.6rem 0;
  @media (max-width: 960px) {
    min-height: 14rem;
    width: 100%;
    padding: 1.1rem 0;
  }
`;

const TBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  @media (max-width: 960px) {
    gap: 2.2rem;
  }
`;

const TR = styled.div`
  display: flex;
  align-items: center;
  gap: 7%;
  @media (max-width: 960px) {
    gap: 3.8rem;
  }
`;

const TH = styled.div`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 160%;
  text-align: right;
  color: ${palette.gray[7]};
  @media (max-width: 960px) {
    font-size: 1.2rem;
  }
`;

const TD = styled.div`
  font-size: 1.6rem;
  line-height: 160%;
  color: ${palette.gray[5]};
  @media (max-width: 960px) {
    font-size: 1.3rem;
  }
`;

const Table = ({ children, ...rest }) => {
  return <StyledTable {...rest}>{children}</StyledTable>;
};

Table.Body = ({ children, ...rest }) => {
  return <TBody {...rest}>{children}</TBody>;
};

Table.TH = ({ children, ...rest }) => {
  return <TH {...rest}>{children}</TH>;
};

Table.TR = ({ children, ...rest }) => {
  return <TR {...rest}>{children}</TR>;
};

Table.TD = ({ children, ...rest }) => {
  return <TD {...rest}>{children}</TD>;
};

export default Table;
