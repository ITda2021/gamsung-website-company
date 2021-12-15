import React from "react";

import TheHeader from "components/TheHeader";
import TheFooter from "components/TheFooter";

import MainContainer from "components/common/MainContainer";
import { HashLink } from "react-router-hash-link";
import Title from "components/common/Title.js";
import Heading5 from "components/common/Heading5.js";
import Paragraph from "components/main/list.js";
import arrow from "img/Vector2.png";
import styles from "./Main.module.css";

function MainPage() {
  return (
    <main className={styles.home}>
      <TheHeader />
      <MainContainer>
        <section className={styles.intro}>
          <Title>감성소프트 소개문구</Title>
        </section>
        <section className={styles.shortwhole}>
          <section className={styles.aboutshort}>
            <hr className={styles.line} />
            <div className={styles.aboutcom_all}>
              <HashLink to="/about#about" style={{ textDecoration: "none" }}>
                <Heading5 className={styles.aboutcom}>About Company</Heading5>
              </HashLink>
              <div className={styles.arrow}>
                <HashLink to="/about#about" style={{ textDecoration: "none" }}>
                  <img src={arrow} alt="arrow" />
                </HashLink>
              </div>
            </div>
            <hr className={styles.subline} />{" "}
            <div className={styles.year_all}>
              <HashLink to="/about#history" style={{ textDecoration: "none" }}>
                <Heading5 className={styles.year}>연혁</Heading5>
              </HashLink>
              <div className={styles.arrow}>
                <HashLink
                  to="/about#history"
                  style={{ textDecoration: "none" }}
                >
                  <img src={arrow} alt="arrow" />
                </HashLink>
              </div>
            </div>
            <hr className={styles.subline} />{" "}
            <div className={styles.aboutmap_all}>
              <HashLink
                to="/about#contactus"
                style={{ textDecoration: "none" }}
              >
                <Heading5 className={styles.aboutmap}>오시는 길</Heading5>
              </HashLink>

              <div className={styles.arrow}>
                <HashLink to="/about#contactus">
                  <img
                    src={arrow}
                    alt="arrow"
                    style={{ textDecoration: "none" }}
                  />
                </HashLink>
              </div>
            </div>
          </section>

          <section className={styles.serviceshort}>
            <hr className={styles.line} />{" "}
            <div className={styles.serviceshortcut_all}>
              <HashLink
                to="/service#service-modit"
                style={{ textDecoration: "none" }}
              >
                <Heading5 className={styles.serviceshortcut}>
                  Our Services
                </Heading5>
              </HashLink>

              <div className={styles.arrow}>
                <HashLink
                  to="/service#service-modit"
                  style={{ textDecoration: "none" }}
                >
                  <img src={arrow} alt="arrow" />
                </HashLink>
              </div>
            </div>
            <HashLink to="/service#" style={{ textDecoration: "none" }}>
              <Paragraph className={styles.servicenum}>모딧</Paragraph>
            </HashLink>
            <HashLink to="/service" style={{ textDecoration: "none" }}>
              <Paragraph className={styles.servicenum}> </Paragraph>
            </HashLink>
            <HashLink to="/service" style={{ textDecoration: "none" }}>
              <Paragraph className={styles.servicenum}></Paragraph>
            </HashLink>{" "}
          </section>

          <section className={styles.recentnewsshort}>
            <hr className={styles.line} />
            <div className={styles.recentnewsshortcut_all}>
              <HashLink to="/notice" style={{ textDecoration: "none" }}>
                <Heading5 className={styles.recentnews_shortcut}>
                  Recent News
                </Heading5>
              </HashLink>

              <div className={styles.arrow}>
                <HashLink to="/notice" style={{ textDecoration: "none" }}>
                  <img src={arrow} alt="arrow" />
                </HashLink>
              </div>
            </div>
            <HashLink to="/notice/1" style={{ textDecoration: "none" }}>
              <Paragraph className={styles.news}>최신뉴스</Paragraph>
            </HashLink>
            <HashLink to="/notice/2" style={{ textDecoration: "none" }}>
              <Paragraph className={styles.news}>최신뉴스</Paragraph>
            </HashLink>
            <HashLink to="/notice/3" style={{ textDecoration: "none" }}>
              <Paragraph className={styles.news}>최신뉴스</Paragraph>
            </HashLink>{" "}
          </section>
        </section>
      </MainContainer>
      <TheFooter small={true} className="footer" />
    </main>
  );
}

export default MainPage;
