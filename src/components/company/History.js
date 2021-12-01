import React from "react";

import MainContainer from "components/common/MainContainer.js";
import Caption from "components/common/Caption.js";
import Heading3 from "components/common/Heading3.js";

import styles from "pages/AboutPage.module.css";

function HistorySection() {
  return (
    <section className={styles.history}>
      <MainContainer>
        <Caption>HISTORY</Caption>
        <Heading3>연혁</Heading3>
      </MainContainer>
    </section>
  );
}

export default HistorySection;
