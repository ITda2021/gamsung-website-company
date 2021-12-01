import React from "react";

import MainContainer from "components/common/MainContainer.js";
import Caption from "components/common/Caption.js";
import Heading3 from "components/common/Heading3.js";

import styles from "pages/AboutPage.module.css";

import Location from "lib/util/location.js";

import LocationIcon from "img/ic-location.svg";
import PhoneIcon from "img/ic-phone.svg";
import PrintIcon from "img/ic-print.svg";

function ContactSection() {
  return (
    <section className={styles.conactus}>
      <MainContainer>
        <Caption center className={styles.conactusCaption}>
          CONTACT US
        </Caption>
        <Heading3 center className={styles.conactusTitle}>
          찾아오시는 길
        </Heading3>
      </MainContainer>
      <Location></Location>
      <MainContainer>
        <div className={styles.contactListContainer}>
          <div className={styles.contactItemTitle}>감성소프트</div>
          <ul className={styles.contactItems}>
            <li className={styles.contactItem}>
              <img src={LocationIcon} alt="위치 아이콘" />
              <div className={styles.contactItemText}>
                서울 용산구 서빙고로 17 공공시설동 4층
              </div>
            </li>
            <li className={styles.contactItem}>
              <img src={LocationIcon} alt="위치 아이콘" />
              <div className={styles.contactItemText}>
                도보로 어떻게 어떻게 가면 도착합니다 아이콘은 아직 안넣음
              </div>
            </li>
            <div>
              <li className={styles.contactItem}>
                <img src={PhoneIcon} alt="전화 아이콘" />
                <div className={styles.contactItemText}>010-0000-0000</div>
              </li>
              <li className={styles.contactItem}>
                <img src={PrintIcon} alt="프린트 아이콘" />
                <div className={styles.contactItemText}>010-0000-0000</div>
              </li>
            </div>
          </ul>
        </div>
      </MainContainer>
    </section>
  );
}

export default ContactSection;
