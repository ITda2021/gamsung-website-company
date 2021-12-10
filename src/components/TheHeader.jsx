import React from "react";
import { Link } from "react-router-dom";

import MainContainer from "components/common/MainContainer.js";

import styles from "components/TheHeader.module.css";

import logo from "img/logo.svg";

function TheHeader() {
  return (
    <header>
      <MainContainer className={styles.headerContainer}>
        <Link to="/">
          <img className={styles.logoImg} src={logo} alt="로고 이미지" />
        </Link>
        <div className={styles.menuBtn}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.navContainer}>
          <nav>
            <ul>
              <div className={styles.navLinkContainer}>
                <Link to="/about">
                  <div className={styles.navLinkTitle}>COMPANY</div>
                </Link>
                <ul className={styles.navLinkList}>
                  <li className={styles.navLink}>ABOUT US</li>
                  <li className={styles.navLink}>CEO</li>
                  <li className={styles.navLink}>TEAM</li>
                  <li className={styles.navLink}>HISTORY</li>
                  <li className={styles.navLink}>COOPERATION</li>
                  <li className={styles.navLink}>CONTACT US</li>
                </ul>
              </div>
              <div className={styles.navLinkContainer}>
                <Link to="/service">
                  <div className={styles.navLinkTitle}>SERVICE</div>
                </Link>
                <ul className={styles.navLinkList}>
                  <li className={styles.navLink}>모딧</li>
                </ul>
              </div>
              <div className={styles.navLinkContainer}>
                <Link to="/notice">
                  <div className={styles.navLinkTitle}>공지사항</div>
                </Link>
                <ul className={styles.navLinkList}>
                  <li className={styles.navLink}>언론 보도 내용</li>
                  <li className={styles.navLink}>채용 정보</li>
                  <li className={styles.navLink}>회사 소식</li>
                  <li className={styles.navLink}>수상 내역</li>
                  <li className={styles.navLink}>특허 사항</li>
                </ul>
              </div>
            </ul>
          </nav>
        </div>
      </MainContainer>
    </header>
  );
}

export default TheHeader;
