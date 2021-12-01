import React from "react";

import MainContainer from "components/common/MainContainer.js";
import Caption from "components/common/Caption.js";
import Heading3 from "components/common/Heading3.js";
import Paragraph from "components/common/Paragraph.js";
import Table from "components/company/Table.js";

import styles from "pages/AboutPage.module.css";

import Company from "img/company-about-company.jpg";

function AboutSection() {
  return (
    <section className={styles.about}>
      <MainContainer className={styles.aboutContainer}>
        <div className={styles.aboutContents}>
          <Caption className={styles.aboutCaption}>About Us</Caption>
          <div>
            <Heading3 className={styles.aboutTitle}>감성소프트는</Heading3>
            <Paragraph className={styles.aboutParagraph}>
              소비자에게 편리한 트렌디한 기술을 만들자는 것을 모토로 그동안
              축적된 경험과 전문성에 기술혁신을 더하여 Kinetic Typography 기반
              모션 자막 템플릿 중점의 영상 편집 플랫폼을 제공하고 있습니다.
            </Paragraph>
            <Table className={styles.aboutTable}>
              <Table.Body>
                <Table.TR>
                  <Table.TH>회사명</Table.TH>
                  <Table.TD>(주)감성소프트</Table.TD>
                </Table.TR>
                <Table.TR>
                  <Table.TH>위치</Table.TH>
                  <Table.TD>서울 용산구 서빙고로 17 공공시설동 4층</Table.TD>
                </Table.TR>
                <Table.TR>
                  <Table.TH>대표이사</Table.TH>
                  <Table.TD>전자연</Table.TD>
                </Table.TR>
                <Table.TR>
                  <Table.TH>직원현황</Table.TH>
                  <Table.TD>6명</Table.TD>
                </Table.TR>
              </Table.Body>
            </Table>
          </div>
        </div>
        <img src={Company} alt="회사 이미지" />
      </MainContainer>
    </section>
  );
}

export default AboutSection;
