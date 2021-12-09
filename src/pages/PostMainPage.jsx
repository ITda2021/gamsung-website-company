import React from "react";
import TheHeader from "components/TheHeader";
import Caption from "components/common/Caption.js";
import MainContainer from "components/common/MainContainer";
import Heading1 from "components/common/Heading1";
import NoticeNavStyle from "components/notice/NoticeNavStyle";
import NoticeLi from "components/notice/NoticeLi";
import styles from "./PostMain.module.css";
import NoticeTable from "components/notice/NoticeTable";
import NoticeTitle from "components/notice/NoticeTitle";
import NoticeDate from "components/notice/NoticeDate";
import NoticePage from "components/notice/NoticePageCount";
import before_btn from "img/notice_before_btn.png";
import after_btn from "img/notice_after_btn.png";
import TheFooter from "components/TheFooter";

//공지사항 페이지 main
function PostMainPage() {
  return (
    <main>
      <TheHeader />
      <MainContainer>
        <section className={styles.noticesection1}>
          <Caption>NOTICE</Caption>
          <Heading1 className={styles.noticeheader}>
            새소식을 <br /> 확인하세요
          </Heading1>
        </section>
        <section className={styles.noticesection2}>
          <NoticeNavStyle>
            <NoticeLi>언론 보도 내용</NoticeLi>
            <NoticeLi>채용정보</NoticeLi>
            <NoticeLi>회사소식</NoticeLi>
            <NoticeLi>수상내역</NoticeLi>
            <NoticeLi>특허사항</NoticeLi>
          </NoticeNavStyle>
        </section>
        <section className={styles.noticesection3}>
          <NoticeTable>
            <div className={styles.tabletop}>
              <NoticeTitle>제목</NoticeTitle>
              <NoticeDate>작성일</NoticeDate>
            </div>
            <div>
              <NoticeTitle>
                ‘모션 자막 쳄플릿 제작 프로젝트’진행 ( 모션그래퍼 /
                일러스트레이터)
              </NoticeTitle>
              <NoticeDate>2021.11.10</NoticeDate>
            </div>
            <div>
              <NoticeTitle>법인 전환 (이사회 구성)</NoticeTitle>
              <NoticeDate>2021.11.10</NoticeDate>
            </div>
            <div>
              <NoticeTitle>특허 등록 [특허 10-2265102]</NoticeTitle>
              <NoticeDate>2021.11.10</NoticeDate>
            </div>
            <div>
              <NoticeTitle>한경 매거진 잡앤조인 인터뷰</NoticeTitle>
              <NoticeDate>2021.11.09</NoticeDate>
            </div>
            <div>
              <NoticeTitle>PCT 해외 출원 PCT/KR2020/009601</NoticeTitle>
              <NoticeDate>2021.11.10</NoticeDate>
            </div>
          </NoticeTable>
          <div className={styles.noticepagebar}>
            <img src={before_btn} alt="이전 페이지로" />
            <NoticePage>1/100</NoticePage>
            <img src={after_btn} alt="다음 페이지로" />
          </div>
        </section>
      </MainContainer>
      <TheFooter />
    </main>
  );
}

export default PostMainPage;
