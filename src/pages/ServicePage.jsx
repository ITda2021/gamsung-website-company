import React, { Fragment } from "react";
import TheHeader from "components/TheHeader";
import { Icon } from "@iconify/react"; //npm install --save-dev @iconify/react
import styles from ".style/common.service.css";
import font from ".style/common.css";

function AboutPage() {
  return (
    <Fragment classname={styles.body}>
      <TheHeader classname={styles.header} />
      <div classname={styles.title}>
        <caption classnname={font.caption_en}>SERVICES</caption>
        <h1 classname={font.basic_h1}> 대표 서비스를 소개합니다</h1>
      </div>
      <div classname={styles.modit}>
        <h3 classname={font.basic_h3}>(주)감성소프트 "모딧"</h3>
        <h3b classname={styles.basic_h3}>
          국내 최대 자막 템플릿 제공 영상편집기
        </h3b>
        <p classname={styles.basic_p}>
          (주)감성소프트는 사용자의 파격적인 편리성을 추구하는 지상파 방송국
          수준의 자막 템플릿을 중심으로 한 모바일 영상 편집기를 제공하고
          있습니다. 유튜브 시대에 누구나 쉽게 영상을 편집하고 자막템플릿을 적극
          활용하여 영상의 질을 높일 수 있도록, 새로운 기회를 제공하는 플랫폼이
          되고자 영상 플랫폼 시장의 새로운 변화를 위해 혁신을 이어가고있습니다.
        </p>
        <img src="img/service.png" alt="service_img"></img>
        <button classname={styles.btn}>{<p>사이트 바로가기</p>}</button>
        <Icon icon="ion:logo-google-playstore" height="30" />
        <Icon icon="simple-icons:appstore" height="28" />
      </div>
    </Fragment>
  );
}

export default AboutPage;
