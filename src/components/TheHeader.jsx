import React from "react";
import { Link } from "react-router-dom";

import MainContainer from "components/common/MainContainer.js";

import styles from "components/TheHeader.module.css";

import logo from "img/logo.svg";
import engIcon from "img/ic-language-eng.svg";

function TheHeader() {
  return (
    <header>
      <MainContainer className={styles.headerContainer}>
        <Link to="/">
          <img className={styles.logoImg} src={logo} alt="로고 이미지" />
        </Link>
        <div className={styles.navContainer}>
          <nav>
            <ul>
              <Link to="/about">
                <li>COMPANY</li>
              </Link>
              <Link to="/service">
                <li>SERVICE</li>
              </Link>
              <Link to="/notice">
                <li>공지사항</li>
              </Link>
            </ul>
          </nav>
          <img src={engIcon} alt="영어 언어 변경 아이콘" />
        </div>
      </MainContainer>
      <div>아놔 테스트</div>
    </header>
  );
}

export default TheHeader;
