import React from "react";
import TheHeader from "components/TheHeader";
//import styled from "styled-components";
import palette from "lib/style/palette.js";

import MainContainer from "components/common/MainContainer.js";
import Caption from "components/common/Caption.js";
import Heading3 from "components/common/Heading3.js";
import Paragraph from "components/common/Paragraph.js";
import Table from "components/common/Table.js";

import "./AboutPage.css";

import Company from "img/company-about-company.jpg";

function AboutPage() {
  return (
    <main>
      <TheHeader />
      <MainContainer>
        <section className="about">
          <div className="about__contents">
            <Caption>About Us</Caption>
            <Heading3>감성소프트는</Heading3>
            <Paragraph>
              소비자에게 편리한 트렌디한 기술을 만들자는 것을 모토로 그동안
              축적된 경험과 전문성에 기술혁신을 더하여 Kinetic Typography 기반
              모션 자막 템플릿 중점의 영상 편집 플랫폼을 제공하고 있습니다.
            </Paragraph>
            <Table>
              <Table.Body>
                <Table.TR>
                  <Table.TH>회사명</Table.TH>
                  <Table.TD>(주)감성소프트</Table.TD>
                </Table.TR>
                <Table.TR>
                  <Table.TH>위치</Table.TH>
                  <Table.TD>서울 용산구 서빙고로 17 공공시설동 4층</Table.TD>
                </Table.TR>
                <Table.TR>
                  <Table.TH>대표이사</Table.TH>
                  <Table.TD>전자연</Table.TD>
                </Table.TR>
                <Table.TR>
                  <Table.TH>직원현황</Table.TH>
                  <Table.TD>6명</Table.TD>
                </Table.TR>
              </Table.Body>
            </Table>
          </div>
          <img src={Company} alt="회사 이미지" />
        </section>
      </MainContainer>
      <section className="ceo">
        <MainContainer>
          <Caption color={palette.gray[5]}>CEO</Caption>
          <Heading3 color={palette.gray[1]}>
            당신도 우리 기술과 함께라면 영상 전문가가 될 수 있습니다
          </Heading3>
          <Paragraph color={palette.gray[4]}>
            당사는 영상 편집 플랫폼을 개발하고 있는 기술개발 회사로서, 2020년
            2월 ~~기법을 필두로 ~개의 모션 관련 특허를 출원하였습니다. 키네틱
            타이포그래피 기법은 기존 영상편집 시장의 전반적인 영상 퀄리티를
            상향평준화 할 수 있을 만큼 우수성과 편리성 접근성을 인정받고
            있습니다. 또한 를 수행하고있습니다. 당사인 ㈜감성소프트는 ~를
            바탕으로 ~ 기술 개발을 통한 새로운 가치를 창출하고 영상 편집 시장의
            트렌드를 이끄는 회사로 발돋움하고 있습니다.
            <br />
            <br />
            감사합니다.
          </Paragraph>
        </MainContainer>
      </section>
    </main>
  );
}

export default AboutPage;
