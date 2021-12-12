import React from "react";
import { Link } from "react-router-dom";

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
              <img src={engIcon} alt="sns 아이콘" />
              <img src={engIcon} alt="sns 아이콘" />
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
              <div className={styles.navLinkTitle}>COMPANY</div>
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
              <div className={styles.navLinkTitle}>SERVICE</div>
              <ul className={styles.navLinkList}>
                <li className={styles.navLink}>모딧</li>
              </ul>
            </div>
            <div className={styles.navLinkContainer}>
              <div className={styles.navLinkTitle}>공지사항</div>
              <ul className={styles.navLinkList}>
                <li className={styles.navLink}>언론 보도 내용</li>
                <li className={styles.navLink}>채용 정보</li>
                <li className={styles.navLink}>회사 소식</li>
                <li className={styles.navLink}>수상 내역</li>
                <li className={styles.navLink}>특허 사항</li>
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
              <img src={engIcon} alt="sns 아이콘" />
              <img src={engIcon} alt="sns 아이콘" />
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
