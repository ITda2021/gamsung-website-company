import React, { Fragment } from "react";
import TheHeader from "components/TheHeader";
import Caption from "components/common/Caption.js";
import "css/PostsPage.css";

//공지사항 페이지 main
function PostsPage() {
  return (
    <Fragment>
      <TheHeader />
      <div className="notice_wrap">
        <div className="notice_title">
          <Caption>NOTICE</Caption>
          <h1 className="h1_style">새소식을</h1>
          <h1 className="h1_style">확인하세요</h1>
        </div>
        <div className="notice_menu">
          <ul className="ulstyle">
            <li className="listyle">언론 보도 내용</li>
            <li className="listyle">채용정보</li>
            <li className="listyle">회사소식</li>
            <li className="listyle">수상내역</li>
            <li className="listyle">특허사항</li>
          </ul>
        </div>
        <div className="notice_list_wrap">
          <div className="notice_list">
            <div className="top">
              <div className="title">제목</div>
              <div className="date">작성일</div>
            </div>
            <div>
              <div className="title">
                ‘모션 자막 쳄플릿 제작 프로젝트’진행 ( 모션그래퍼 /
                일러스트레이터)
              </div>
              <div className="date">2021.11.10</div>
            </div>
            <div>
              <div className="title">법인 전환 (이사회 구성)</div>
              <div className="date">2021.11.10</div>
            </div>
            <div>
              <div className="title">특허 등록 [특허 10-2265102]</div>
              <div className="date">2021.11.10</div>
            </div>
            <div>
              <div className="title">한경 매거진 잡앤조인 인터뷰</div>
              <div className="date">2021.11.09</div>
            </div>
            <div>
              <div className="title">PCT 해외 출원 PCT/KR2020/009601</div>
              <div className="date">2021.11.10</div>
            </div>
          </div>
          <div className="notice_page">
            <p className="notice_btn_style">1/100</p>
            <p className="notice_next_btn"> 〉</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default PostsPage;
