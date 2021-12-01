import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

const StyledTable = styled.div`
  width: 100%;
  padding: 1.6rem 0;
  border-top: 2px solid ${palette.gray[6]};
  @media (max-width: 768px) {
    padding: 1.1rem 0;
  }
`;

const TBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  @media (max-width: 768px) {
    gap: 2.2rem;
  }
`;

const TR = styled.div`
  display: flex;
  gap: 10%;
`;

const TH = styled.div`
  width: 15%;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 160%;
  text-align: right;
  color: ${palette.gray[7]};
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const TD = styled.div`
  font-size: 1.6rem;
  line-height: 160%;
  color: ${palette.gray[5]};
  @media (max-width: 768px) {
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
