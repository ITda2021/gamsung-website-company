import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import MainContainer from "components/common/MainContainer.js";
import styles from "components/TheHeader.module.css";

import logo from "img/logo.svg";

// @param {String} selectedNavItem

function TheHeader({ selectedNavItem = "home" }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuClickHandler = () => setShowMenu(!showMenu);

  const [screenWidthSize, setScreenWidthSize] = useState(window.innerWidth);
  const windowResizeHandler = () => setScreenWidthSize(window.innerWidth);

  const menuOnClick = () => screenWidthSize <= 960 && setShowMenu(false);

  useEffect(() => {
    window.addEventListener("resize", windowResizeHandler);
    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    };
  }, []);

  return (
    <div>
      <header className={!showMenu ? styles.overflowHidden : undefined}>
        <MainContainer className={styles.headerContainer}>
          <Link to="/">
            <img className={styles.logoImg} src={logo} alt="로고 이미지" />
          </Link>
          <div
            onClick={menuClickHandler}
            className={!showMenu ? styles.menuBtn : styles.menuBtnClicked}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={styles.navContainer}>
            <nav>
              <ul
                onMouseOver={() => screenWidthSize > 960 && setShowMenu(true)}
                onMouseOut={() => screenWidthSize > 960 && setShowMenu(false)}
              >
                <div className={styles.navLinkContainer}>
                  <Link to="/about" onClick={menuOnClick}>
                    <div
                      className={
                        selectedNavItem === "company"
                          ? styles.navLinkTitleSelected
                          : styles.navLinkTitle
                      }
                    >
                      COMPANY
                    </div>
                  </Link>
                  <ul className={styles.navLinkList}>
                    <li
                      className={styles.navLink}
                      onClick={menuOnClick}
                      href="#about"
                    >
                      <HashLink to="/about#about">ABOUT US</HashLink>
                    </li>
                    <li
                      className={styles.navLink}
                      onClick={menuOnClick}
                      href="#ceo"
                    >
                      <HashLink to="/about#ceo">CEO</HashLink>
                    </li>
                    <li
                      className={styles.navLink}
                      onClick={menuOnClick}
                      href="#history"
                    >
                      <HashLink to="/about#history">HISTORY</HashLink>
                    </li>
                    <li
                      className={styles.navLink}
                      onClick={menuOnClick}
                      href="#cooperation"
                    >
                      <HashLink to="/about#cooperation">COOPERATION</HashLink>
                    </li>
                    <li
                      className={styles.navLink}
                      onClick={menuOnClick}
                      href="#contactus"
                    >
                      <HashLink to="/about#contactus">CONTACT US</HashLink>
                    </li>
                  </ul>
                </div>
                <div className={styles.navLinkContainer}>
                  <Link to="/service">
                    <div
                      className={
                        selectedNavItem === "service"
                          ? styles.navLinkTitleSelected
                          : styles.navLinkTitle
                      }
                    >
                      SERVICE
                    </div>
                  </Link>
                  <ul className={styles.navLinkList}>
                    <li className={styles.navLink} onClick={menuOnClick}>
                      <HashLink to="/service#service-modit">모딧</HashLink>
                    </li>
                  </ul>
                </div>
                <div className={styles.navLinkContainer}>
                  <Link to="/notice">
                    <div
                      className={
                        selectedNavItem === "notice"
                          ? styles.navLinkTitleSelected
                          : styles.navLinkTitle
                      }
                    >
                      공지사항
                    </div>
                  </Link>
                  <ul className={styles.navLinkList}>
                    <li className={styles.navLink} onClick={menuOnClick}>
                      언론 보도 내용
                    </li>
                    <li className={styles.navLink} onClick={menuOnClick}>
                      채용 정보
                    </li>
                    <li className={styles.navLink} onClick={menuOnClick}>
                      회사 소식
                    </li>
                    <li className={styles.navLink} onClick={menuOnClick}>
                      수상 내역
                    </li>
                    <li className={styles.navLink} onClick={menuOnClick}>
                      특허 사항
                    </li>
                  </ul>
                </div>
              </ul>
            </nav>
          </div>
        </MainContainer>
      </header>
      <div className={showMenu ? styles.navLinkBackground : undefined}></div>
    </div>
  );
}

export default TheHeader;
