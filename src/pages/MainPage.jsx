import React from "react";

import TheHeader from "components/TheHeader";
import MainContainer from "components/common/MainContainer";
import palette from "lib/style/palette.js";
import { Link } from "react-router-dom";
import Title from "components/common/Title.js";
import Heading5 from "components/common/Heading5.js";
import Paragraph from "components/main/Paragraph2.js";
import arrow from "img/Vector2.png";
import styles from "./Main.module.css";
import Mainimage from "img/mainpage.png";

function MainPage() {
  return (
    <main className={styles.home}>
      <img className={styles.homeImg} src={Mainimage} alt="메인이미지" />
      <TheHeader />
      zz
      <MainContainer>
        <section className={styles.intro}>
          <Title>감성소프트 소개문구</Title>
        </section>
        <section className={styles.shortwhole}>
          <section className={styles.aboutshort}>
            <div className={styles.aboutcom_all}>
              <Link to="/about">
                <Heading5 className={styles.aboutcom} color={palette.gray[1]}>
                  About Company
                </Heading5>
              </Link>
              <div className={styles.arrow}>
                <Link to="/about">
                  <img src={arrow} alt="arrow" />
                </Link>
              </div>
            </div>
            <div className={styles.year_all}>
              <Link to="/about">
                <Heading5 className={styles.year} color={palette.gray[1]}>
                  연혁
                </Heading5>
              </Link>
              <div className={styles.arrow}>
                <Link to="/about">
                  <img src={arrow} alt="arrow" />
                </Link>
              </div>
            </div>
            <div className={styles.aboutmap_all}>
              <Link to="/about">
                <Heading5 className={styles.aboutmap} color={palette.gray[1]}>
                  오시는 길
                </Heading5>
              </Link>

              <div className={styles.arrow}>
                <Link to="/about">
                  <img src={arrow} alt="arrow" />
                </Link>
              </div>
            </div>
          </section>

          <section className={styles.serviceshort}>
            <div className={styles.serviceshortcut_all}>
              <Link to="/service">
                <Heading5 className={styles.serviceshortcut}>
                  Our Services
                </Heading5>
              </Link>

              <div className={styles.arrow}>
                <Link to="/service">
                  <img src={arrow} alt="arrow" />
                </Link>
              </div>
            </div>
            <Link to="/service">
              <Paragraph className={styles.servicenum} color={palette.gray[1]}>
                모딧
              </Paragraph>
            </Link>
            <Link to="/service">
              <Paragraph className={styles.servicenum} color={palette.gray[1]}>
                모딧2
              </Paragraph>
            </Link>
            <Link to="/service">
              <Paragraph className={styles.servicenum} color={palette.gray[1]}>
                모딧3
              </Paragraph>
            </Link>{" "}
          </section>

          <section className={styles.recentnewsshort}>
            <div className={styles.recentnewsshortcut_all}>
              <Link to="/notice">
                <Heading5 className={styles.recentnews_shortcut}>
                  Recent News
                </Heading5>
              </Link>

              <div className={styles.arrow}>
                <Link to="/notice">
                  <img src={arrow} alt="arrow" />
                </Link>
              </div>
            </div>
            <Link to="/notice/1">
              <Paragraph className={styles.news} color={palette.gray[1]}>
                최신뉴스
              </Paragraph>
            </Link>
            <Link to="/notice/2">
              <Paragraph className={styles.news} color={palette.gray[1]}>
                최신뉴스
              </Paragraph>
            </Link>
            <Link to="/notice/3">
              <Paragraph className={styles.news} color={palette.gray[1]}>
                최신뉴스
              </Paragraph>
            </Link>{" "}
          </section>
        </section>
      </MainContainer>
    </main>
  );
}

export default MainPage;
