import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

const StyledTable = styled.table`
  border-collapse: separate;
  border-spacing: 0 1.6rem;
`;

const TBody = styled.tbody``;

const TR = styled.tr``;

const TH = styled.th`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 160%;
  text-align: right;
  color: ${palette.gray[7]};
  @media (max-width: 768px) {
    font-size: 1.3rem;
    line-height: 160%;
  }
`;

const TD = styled.td`
  font-size: 1.6rem;
  line-height: 160%;
  color: ${palette.gray[5]};
  @media (max-width: 768px) {
    font-size: 1.3rem;
    line-height: 160%;
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
