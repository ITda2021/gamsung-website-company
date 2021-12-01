import React from "react";
import TheHeader from "components/TheHeader";
import MainContainer from "components/common/MainContainer";

import Title from "components/common/Title.js";
import Heading5 from "components/common/Heading5.js";
import Paragraph from "components/common/Paragraph.module";
import arrow from "img/Vector2.png";
import styles from "./Main.module.css";

function MainPage() {
  return (
    <main className={styles.mains}>
      <TheHeader />
      <MainContainer>
        <section className={styles.intro}>
          <Title>감성소프트 소개문구</Title>
        </section>
        <section className={styles.pyo}>
          <table className={styles.ctable}>
            <tbody className={styles.ctbody}>
              <tr>
                <td>
                  <Heading5>About Company </Heading5>
                </td>
                <td>
                  {" "}
                  <img src={arrow} alt="arrow" />
                </td>
              </tr>
              <tr>
                <td>
                  <Heading5>연혁</Heading5>
                </td>
                <td>
                  <img src={arrow} alt="arrow" />
                </td>
              </tr>
              <tr>
                <td>
                  <Heading5>오시는 길</Heading5>
                </td>
                <td>
                  {" "}
                  <img src={arrow} alt="arrow" />
                </td>
              </tr>
            </tbody>
          </table>
          <table className={styles.stable}>
            <tbody>
              <tr>
                <td>
                  {" "}
                  <Heading5>Our Services</Heading5>
                </td>
                <td>
                  {" "}
                  <img src={arrow} alt="arrow" />
                </td>
              </tr>
              <tr>
                <td>
                  <Paragraph>모딧</Paragraph>
                </td>
              </tr>
              <tr>
                <td>
                  <Paragraph>모딧2</Paragraph>
                </td>
              </tr>
              <tr>
                <td>
                  <Paragraph>모딧3</Paragraph>
                </td>
              </tr>
            </tbody>
          </table>
          <table className={styles.ntable}>
            <tbody>
              <tr>
                <td>
                  <Heading5>Recent News</Heading5>
                </td>
                <td>
                  <img src={arrow} alt="arrow" />
                </td>
              </tr>
              <tr>
                <td>
                  <Paragraph>최신뉴스</Paragraph>
                </td>
              </tr>
              <tr>
                <td>
                  <Paragraph>최신뉴스</Paragraph>
                </td>
              </tr>
              <tr>
                <td>
                  <Paragraph>최신뉴스</Paragraph>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </MainContainer>
    </main>
  );
}

export default MainPage;
