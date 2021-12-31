import React, { useState, useEffect } from "react";
import Axios from "axios";

import TheHeader from "components/TheHeader";
import TheFooter from "components/TheFooter";
import MainContainer from "components/common/MainContainer";
import { HashLink } from "react-router-hash-link";
import Title from "components/common/Title.js";
import Heading5 from "components/common/Heading5.js";
import Paragraph from "components/main/list.js";
import arrow from "img/Vector2.png";
import styles from "./MainPage.module.css";

function MainPage() {
  const [posts, setPosts] = useState([]);
  const OPTIONS = [
    {
      value: "news",
      name: "언론 보도 내용",
    },
    { value: "job", name: "채용정보" },
    { value: "company", name: "회사소식" },
    { value: "award", name: "수상내역" },
    { value: "patent", name: "특허사항" },
  ];

  useEffect(() => {
    Axios.get(`http://3.130.190.15:8080/api/posts`).then((response) => {
      setPosts(response.data.reverse().slice(0, 3));
    });
  }, []);

  return (
    <main className={styles.home}>
      <TheHeader />
      <MainContainer>
        <section className={styles.intro}>
          <Title>자막, 누구나 쉽고 빠르게 '모딧'하자 </Title>
        </section>
        <section className={styles.shortwhole}>
          <section className={styles.aboutshort}>
            <hr className={styles.line} />
            <HashLink to="/about#about" style={{ textDecoration: "none" }}>
              <div className={styles.aboutcom_all}>
                <Heading5 className={styles.aboutcom}>About Company</Heading5>
                <div className={styles.arrow}>
                  <HashLink
                    to="/about#about"
                    style={{ textDecoration: "none" }}
                  >
                    <img src={arrow} alt="arrow" />
                  </HashLink>{" "}
                </div>
              </div>
            </HashLink>
            <hr className={styles.subline} />{" "}
            <HashLink to="/about#history" style={{ textDecoration: "none" }}>
              <div className={styles.year_all}>
                <Heading5 className={styles.year}>연혁</Heading5>
                <div className={styles.arrow}>
                  <HashLink
                    to="/about#history"
                    style={{ textDecoration: "none" }}
                  >
                    <img src={arrow} alt="arrow" />
                  </HashLink>{" "}
                </div>
              </div>
            </HashLink>
            <hr className={styles.subline} />{" "}
            <HashLink to="/about#contactus" style={{ textDecoration: "none" }}>
              <div className={styles.aboutmap_all}>
                <Heading5 className={styles.aboutmap}>오시는 길</Heading5>

                <div className={styles.arrow}>
                  <HashLink to="/about#contactus">
                    <img
                      src={arrow}
                      alt="arrow"
                      style={{ textDecoration: "none" }}
                    />
                  </HashLink>
                </div>
              </div>{" "}
            </HashLink>
          </section>

          <section className={styles.serviceshort}>
            <hr className={styles.line} />{" "}
            <HashLink
              to="/service#service-modit"
              style={{ textDecoration: "none" }}
            >
              <div className={styles.serviceshortcut_all}>
                <Heading5 className={styles.serviceshortcut}>
                  Our Services
                </Heading5>

                <div className={styles.arrow}>
                  <HashLink
                    to="/service#service-modit"
                    style={{ textDecoration: "none" }}
                  >
                    <img src={arrow} alt="arrow" />
                  </HashLink>
                </div>
              </div>{" "}
            </HashLink>
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
            <HashLink to="/notice" style={{ textDecoration: "none" }}>
              <div className={styles.recentnewsshortcut_all}>
                <Heading5 className={styles.recentnews_shortcut}>
                  Recent News
                </Heading5>
                <div className={styles.arrow}>
                  <HashLink to="/notice" style={{ textDecoration: "none" }}>
                    <img src={arrow} alt="arrow" />
                  </HashLink>
                </div>
              </div>
            </HashLink>
            {posts.map((post) => {
              return (
                <HashLink
                  to={`/notice/${post.seq}`}
                  key={post.seq}
                  style={{ textDecoration: "none" }}
                >
                  {OPTIONS.map(({ value, name }) => {
                    let categoryKR = "";
                    if (post.category === value) {
                      categoryKR = name;
                      return (
                        <Paragraph className={styles.news}>
                          [{categoryKR}] {post.title}
                        </Paragraph>
                      );
                    }
                  })}
                </HashLink>
              );
            })}
          </section>
        </section>
      </MainContainer>
      <TheFooter small={true} className="footer" />
    </main>
  );
}

export default MainPage;
