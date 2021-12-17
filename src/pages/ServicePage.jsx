import React from "react";
import TheHeader from "components/TheHeader";
import TheFooter from "components/TheFooter";
import palette from "lib/style/palette.js";

import Button from "components/common/button.js";
import MainContainer from "components/common/MainContainer.js";
import Caption from "components/common/Caption.js";
import Heading1 from "components/common/Heading1.js";
import Heading3 from "components/common/Heading3.js";
import Paragraph from "components/common/Paragraph.js";

import Modit from "img/service.png";
//import appstore from "img/appstore.png";
import styles from "./Service.module.css";

function ServicePage() {
  return (
    <main>
      <TheHeader selectedNavItem={"service"} />
      <MainContainer>
        <section className={styles.service}>
          <Caption>SERVICES</Caption>
          <Heading1> 대표 서비스를 소개합니다</Heading1>
        </section>
        <section id={"service-modit"} className={styles.service1}>
          <div className={styles.servicename}>
            <div className={styles.int}>
              <Heading3 color={palette.blue[0]}>(주)감성소프트 "모딧"</Heading3>
              <Heading3>국내 최대 자막 템플릿 제공 영상편집기</Heading3>
            </div>
            <div className={styles.paragraph}>
              <Paragraph>
                (주)감성소프트는 사용자의 파격적인 편리성을 추구하는 지상파
                방송국 수준의 자막 템플릿을 중심으로 한 모바일 영상 편집기를
                제공하고 있습니다. 유튜브 시대에 누구나 쉽게 영상을 편집하고
                자막템플릿을 적극 활용하여 영상의 질을 높일 수 있도록, 새로운
                기회를 제공하는 플랫폼이 되고자 영상 플랫폼 시장의 새로운 변화를
                위해 혁신을 이어가고있습니다.
              </Paragraph>
            </div>
            <div className={styles.btns}>
              <Button>사이트 바로가기</Button>
              <button
                className={styles.playstore}
                onClick={() =>
                  window.open("https://play.google.com/store/apps", "_blank")
                }
              />
              <button
                className={styles.appstore}
                onClick={() =>
                  window.open("https://www.apple.com/kr/app-store/", "_blank")
                }
              />
            </div>
          </div>
          <img className={styles.modit} src={Modit} alt="모딧 이미지" />
        </section>
      </MainContainer>
      <TheFooter />
    </main>
  );
}

export default ServicePage;
