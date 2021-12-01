import React from "react";

import palette from "lib/style/palette.js";

import MainContainer from "components/common/MainContainer.js";
import Caption from "components/common/Caption.js";
import Heading3 from "components/common/Heading3.js";
import Paragraph from "components/common/Paragraph.js";

import styles from "pages/AboutPage.module.css";

import CeoBackground from "img/company-ceo-background.jpg";

function CeoSection() {
  return (
    <section className={styles.ceo}>
      <img
        className={styles.ceoBackgroundImg}
        src={CeoBackground}
        alt="CEO 배경 이미지"
      />
      <MainContainer>
        <Caption className={styles.ceoCaption} color={palette.gray[5]}>
          CEO
        </Caption>
        <Heading3 className={styles.ceoTitle} color={palette.gray[1]}>
          당신도 우리 기술과 함께라면 영상 전문가가 될 수 있습니다
        </Heading3>
        <Paragraph color={palette.gray[4]} className={styles.ceoParagraph}>
          당사는 영상 편집 플랫폼을 개발하고 있는 기술개발 회사로서, 2020년 2월
          ~~기법을 필두로 ~개의 모션 관련 특허를 출원하였습니다. 키네틱
          타이포그래피 기법은 기존 영상편집 시장의 전반적인 영상 퀄리티를
          상향평준화 할 수 있을 만큼 우수성과 편리성 접근성을 인정받고 있습니다.
          또한 를 수행하고있습니다. 당사인 ㈜감성소프트는 ~를 바탕으로 ~ 기술
          개발을 통한 새로운 가치를 창출하고 영상 편집 시장의 트렌드를 이끄는
          회사로 발돋움하고 있습니다.
          <br />
          감사합니다.
        </Paragraph>
        <div className={styles.ceoWriter}>
          <div className={styles.ceoWriterDeco} />
          <div className={styles.ceoWriterName}>
            ㈜감성소프트 대표이사 전자연
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default CeoSection;
