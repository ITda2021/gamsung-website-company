import React from "react";
import TheHeader from "components/TheHeader";
import MainContainer from "components/common/MainContainer";
import NoticeDetailTitle from "components/notice/NoticeDetailTitle";
import NoticeDetailDate from "components/notice/NoticeDetailDate";
import styles from "./PostDetail.module.css";
import NoticeDetailTable from "components/notice/NoticeDetailTable";
import NoticeDetailContent from "components/notice/NoticeDetailContent";
import NoticeDetailButton from "components/notice/NoticeDetailButton";

//공지사항 세부페이지
function PostPage() {
  return (
    <main>
      <TheHeader />
      <MainContainer>
        <section>
          <NoticeDetailTable>
            <div className={styles.postdetailheader}>
              <NoticeDetailDate>2021.11.10</NoticeDetailDate>
              <NoticeDetailTitle>
                ‘모션 자막 쳄플릿 제작 프로젝트’진행 ( 모션그래퍼 /
                일러스트레이터)
              </NoticeDetailTitle>
            </div>
            <NoticeDetailContent>
              ㈜감성소프트는 소비자에게 편리한 트렌디한 기술을 만들자는 것을
              모토로 그동안 축적된 경험과 전문성에 기술혁신을 더하여 Kinetic
              Typography 기반 모션 자막 템플릿 중점의 영상 편집 플랫폼을
              제공하고 있습니다.㈜감성소프트는 소비자에게 편리한 트렌디한 기술을
              만들자는 것을 모토로 그동안 축적된 경험과 전문성에 기술혁신을
              더하여 Kinetic Typography 기반 모션 자막 템플릿 중점의 영상 편집
              플랫폼을 제공하고 있습니다.㈜감성소프트는 소비자에게 편리한
              트렌디한 기술을 만들자는 것을 모토로 그동안 축적된 경험과 전문성에
              기술혁신을 더하여 Kinetic Typography 기반 모션 자막 템플릿 중점의
              영상 편집 플랫폼을 제공하고 있습니다.㈜감성소프트는 소비자에게
              편리한 트렌디한 기술을 만들자는 것을 모토로 그동안 축적된 경험과
              전문성에 기술혁신을 더하여 Kinetic Typography 기반 모션 자막
              템플릿 중점의 영상 편집 플랫폼을 제공하고 있습니다.㈜감성소프트는
              소비자에게 편리한 트렌디한 기술을 만들자는 것을 모토로 그동안
              축적된 경험과 전문성에 기술혁신을 더하여 Kinetic Typography 기반
              모션 자막 템플릿 중점의 영상 편집 플랫폼을 제공하고 있습니다.
            </NoticeDetailContent>
          </NoticeDetailTable>
          <div className={styles.postdetailbtn}>
            <NoticeDetailButton>목록으로 돌아가기</NoticeDetailButton>
          </div>
        </section>
      </MainContainer>
    </main>
  );
}

export default PostPage;
