import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import MainContainer from "components/common/MainContainer.js";

import styles from "components/TheFooter.module.css";

import logo from "img/logo.svg";
import engIcon from "img/ic-print.svg";

const SmallFooter = () => {
  return (
    <footer>
      <MainContainer>
        <div className={styles.footerTopContainer}>
          <Link to="/">
            <img className={styles.logoImg} src={logo} alt="로고 이미지" />
          </Link>
        </div>
        <div className={styles.footerBottomContainer}>
          <div className={styles.etcLinkAndSNSContainer}>
            <ul className={styles.etcNavLinkList}>
              <li className={styles.etcNavLink}>필요한메뉴</li>
              <li className={styles.etcNavLink}>필요한메뉴</li>
              <li className={styles.etcNavLink}>필요한메뉴</li>
              <li className={styles.etcNavLink}>필요한메뉴</li>
            </ul>
            <div className={styles.snsIconsContainer}>
              <button
                className={styles.youtube}
                onClick={() => window.open("https://youtube.com", "_blank")}
              />
            </div>
          </div>
          <div className={styles.copyright}>
            © Gamsung Soft. All rights reserved.
          </div>
        </div>
      </MainContainer>
    </footer>
  );
};

const BasicFooter = () => {
  return (
    <footer>
      <MainContainer>
        <div className={styles.footerTopContainer}>
          <Link to="/">
            <img className={styles.logoImg} src={logo} alt="로고 이미지" />
          </Link>
          <div className={styles.navLinkListContainer}>
            <div className={styles.navLinkContainer}>
              <div className={styles.navLinkTitle}>
                <Link to="/about">COMPANY</Link>
              </div>
              <ul className={styles.navLinkList}>
                <li className={styles.navLink}>
                  <HashLink to="/about#about">ABOUT US</HashLink>
                </li>
                <li className={styles.navLink}>
                  <HashLink to="/about#ceo">CEO</HashLink>
                </li>
                <li className={styles.navLink}>
                  <HashLink to="/about#history">HISTORY</HashLink>
                </li>
                <li className={styles.navLink}>
                  <HashLink to="/about#cooperation">COOPERATION</HashLink>
                </li>
                <li className={styles.navLink}>
                  <HashLink to="/about#contactus">CONTACT US</HashLink>
                </li>
              </ul>
            </div>
            <div className={styles.navLinkContainer}>
              <div className={styles.navLinkTitle}>
                <Link to="/service">SERVICE</Link>
              </div>
              <ul className={styles.navLinkList}>
                <li className={styles.navLink}>
                  <HashLink to="/service#service-modit">모딧</HashLink>
                </li>
              </ul>
            </div>
            <div className={styles.navLinkContainer}>
              <div className={styles.navLinkTitle}>
                <Link to="/notice">공지사항</Link>
              </div>
              <ul className={styles.navLinkList}>
                <li className={styles.navLink}>
                  <Link to="/notice">언론 보도 내용</Link>
                </li>
                <li className={styles.navLink}>
                  <Link to="/notice">채용 정보</Link>
                </li>
                <li className={styles.navLink}>
                  <Link to="/notice">회사 소식</Link>
                </li>
                <li className={styles.navLink}>
                  <Link to="/notice">수상 내역</Link>
                </li>
                <li className={styles.navLink}>
                  <Link to="/notice">특허 사항</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottomContainer}>
          <div className={styles.etcLinkAndSNSContainer}>
            <ul className={styles.etcNavLinkList}>
              <li className={styles.etcNavLink}>필요한메뉴</li>
              <li className={styles.etcNavLink}>필요한메뉴</li>
              <li className={styles.etcNavLink}>필요한메뉴</li>
              <li className={styles.etcNavLink}>필요한메뉴</li>
            </ul>
            <div className={styles.snsIconsContainer}>
              <button
                className={styles.youtube}
                onClick={() => window.open("https://youtube.com", "_blank")}
              />
            </div>
          </div>
          <div className={styles.copyright}>
            © Gamsung Soft. All rights reserved.
          </div>
        </div>
      </MainContainer>
    </footer>
  );
};

function TheFooter({ small = false }) {
  return small ? SmallFooter() : BasicFooter();
}

export default TheFooter;
