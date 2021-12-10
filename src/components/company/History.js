import React, { useState } from "react";

import MainContainer from "components/common/MainContainer.js";
import Caption from "components/common/Caption.js";
import Heading3 from "components/common/Heading3.js";
import Table from "components/company/HistoryTable.js";
import Tab from "components/company/HistoryTab";

import styles from "pages/AboutPage.module.css";

import { historyData } from "data/company-history";

function StyledTable({ data }) {
  return (
    <Table>
      <Table.Body>
        {data.items.map(({ id, month, content }) => (
          <Table.TR key={id}>
            <Table.TH>{formatDate(month)}</Table.TH>
            <Table.TD>{content}</Table.TD>
          </Table.TR>
        ))}
      </Table.Body>
    </Table>
  );
}

function formatDate(num) {
  return `0${num}`.slice(-2);
}

function HistorySection() {
  const [selectedHistory, setHistory] = useState(historyData[0]);
  const clickHandler = (history) => setHistory(history);

  return (
    <section className={styles.history}>
      <MainContainer>
        <Caption>HISTORY</Caption>
        <Heading3>연혁</Heading3>
      </MainContainer>
      <div className={styles.historyTabSection}>
        <div className={styles.historyHorizontalLine}></div>
        <MainContainer className={styles.historyTabContainer}>
          <Tab selected onClick={() => clickHandler(historyData[0])}>
            2021
          </Tab>
          <Tab onClick={() => clickHandler(historyData[1])}>2020</Tab>
          <Tab onClick={() => clickHandler(historyData[2])}>2020</Tab>
        </MainContainer>
      </div>
      <MainContainer>
        <StyledTable data={selectedHistory} />
      </MainContainer>
    </section>
  );
}

export default HistorySection;
