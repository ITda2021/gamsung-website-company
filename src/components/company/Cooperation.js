import React from "react";

import MainContainer from "components/common/MainContainer.js";
import Caption from "components/common/Caption.js";
import Heading3 from "components/common/Heading3.js";

import styles from "pages/AboutPage.module.css";

import Cooperation1 from "img/company-cooperation-com1.jpg";
import Cooperation2 from "img/company-cooperation-com2.jpg";
import Cooperation3 from "img/company-cooperation-com3.jpg";
import Cooperation4 from "img/company-cooperation-com4.jpg";
import Cooperation5 from "img/company-cooperation-com5.jpg";
import Cooperation6 from "img/company-cooperation-com6.jpg";
import Cooperation7 from "img/company-cooperation-com7.jpg";
import Cooperation8 from "img/company-cooperation-com8.jpg";

function CooperationSection() {
  return (
    <section className={styles.cooperation}>
      <MainContainer>
        <Caption className={styles.cooperationCaption} center>
          COOPERATION
        </Caption>
        <Heading3 className={styles.cooperationTitle} center>
          무슨무슨 업체들과 함께합니다
        </Heading3>
        <ul className={styles.cooperationList}>
          <li>
            <img
              className={styles.cooperationImg}
              src={Cooperation1}
              alt="협력 업체 1 로고 이미지"
            />
          </li>
          <li>
            <img
              className={styles.cooperationImg}
              src={Cooperation2}
              alt="협력 업체 2 로고 이미지"
            />
          </li>
          <li>
            <img
              className={styles.cooperationImg}
              src={Cooperation3}
              alt="협력 업체 3 로고 이미지"
            />
          </li>
          <li>
            <img
              className={styles.cooperationImg}
              src={Cooperation4}
              alt="협력 업체 4 로고 이미지"
            />
          </li>
          <li>
            <img
              className={styles.cooperationImg}
              src={Cooperation5}
              alt="협력 업체 5 로고 이미지"
            />
          </li>
          <li>
            <img
              className={styles.cooperationImg}
              src={Cooperation6}
              alt="협력 업체 6 로고 이미지"
            />
          </li>
          <li>
            <img
              className={styles.cooperationImg}
              src={Cooperation7}
              alt="협력 업체 7 로고 이미지"
            />
          </li>
          <li>
            <img
              className={styles.cooperationImg}
              src={Cooperation8}
              alt="협력 업체 8 로고 이미지"
            />
          </li>
        </ul>
      </MainContainer>
    </section>
  );
}

export default CooperationSection;
