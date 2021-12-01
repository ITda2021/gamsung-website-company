import React, { useState } from "react";

import MainContainer from "components/common/MainContainer.js";
import Caption from "components/common/Caption.js";
import Heading3 from "components/common/Heading3.js";
import Table from "components/company/HistoryTable.js";

import styles from "pages/AboutPage.module.css";

const historyData = [
  {
    year: 2021,
    history: [
      {
        id: 1,
        month: 4,
        content:
          "‘모션 자막 쳄플릿 제작 프로젝트’진행 ( 모션그래퍼 / 일러스트레이터)",
      },
      {
        id: 2,
        month: 4,
        content:
          "‘모션 자막 쳄플릿 제작 프로젝트’진행 ( 모션그래퍼 / 일러스트레이터)",
      },
      {
        id: 3,
        month: 4,
        content:
          "‘모션 자막 쳄플릿 제작 프로젝트’진행 ( 모션그래퍼 / 일러스트레이터)",
      },
      {
        id: 4,
        month: 4,
        content:
          "‘모션 자막 쳄플릿 제작 프로젝트’진행 ( 모션그래퍼 / 일러스트레이터)",
      },
    ],
  },
  {
    year: 2020,
    history: [
      {
        id: 5,
        month: 4,
        content: "‘ddd’진행 ( 모션그래퍼 / 일러스트레이터)",
      },
      {
        id: 6,
        month: 4,
        content: "‘모션 아니~~~ 프로젝트’진행 ( 모션그래퍼 / 일러스트레이터)",
      },
      {
        id: 7,
        month: 4,
        content:
          "‘모션 ‘ddd’진행 쳄플릿 제작 프로젝트’진행 ( 모션그래퍼 / 일러스트레이터)",
      },
      {
        id: 8,
        month: 4,
        content:
          "‘모션 자막 쳄플릿 제작 프로젝트’진행 ( 모션그래퍼 / 일러스트레이터)",
      },
    ],
  },
  {
    year: 2019,
    history: [
      {
        id: 9,
        month: 4,
        content:
          "‘모션 자막 쳄플릿 제작 프로젝트’진행 ( 모션그래퍼 / 일러스트레이터)",
      },
      {
        id: 10,
        month: 4,
        content:
          "‘모션 자막 쳄플릿 제작 프로젝트’진행 ( 모션그래퍼 / 일러스트레이터)",
      },
      {
        id: 11,
        month: 4,
        content:
          "‘모션 자막 쳄플릿 제작 프로젝트’진행 ( 모션그래퍼 / 일러스트레이터)",
      },
      {
        id: 12,
        month: 4,
        content:
          "‘모션 자막 쳄플릿 제작 프로젝트’진행 ( 모션그래퍼 / 일러스트레이터)",
      },
    ],
  },
];

function StyledTable({ data }) {
  return (
    <Table>
      <Table.Body>
        {data.map(({ id, month, content }) => (
          <Table.TR key={id}>
            <Table.TH>{month}</Table.TH>
            <Table.TD>{content}</Table.TD>
          </Table.TR>
        ))}
      </Table.Body>
    </Table>
  );
}

function HistorySection() {
  const [datayear, setYear] = useState(2021);
  let historyTableData = historyData[0].history;
  const clickHandler = (year) => {
    setYear(year);
    historyTableData = historyData.find((data) => data.year === datayear);
  };

  return (
    <section className={styles.history}>
      <MainContainer>
        <Caption>HISTORY</Caption>
        <Heading3>연혁</Heading3>
      </MainContainer>
      <div onClick={() => clickHandler(2021)}> 2021</div>
      <div onClick={() => clickHandler(2020)}>2020</div>
      <div onClick={() => clickHandler(2019)}>2019</div>
      <MainContainer>
        <StyledTable data={historyTableData} />
      </MainContainer>
    </section>
  );
}

export default HistorySection;
