import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

const StyledTable = styled.table`
  // custom css goes here
`;

const TBody = styled.tbody`
  // custom css goes here
`;

const TR = styled.tr`
  // custom css goes here
`;

const TH = styled.th`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 160%;
  text-align: right;
  color: ${palette.gray[7]};
`;

const TD = styled.td`
  font-size: 1.6rem;
  line-height: 160%;
  color: ${palette.gray[5]};
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
