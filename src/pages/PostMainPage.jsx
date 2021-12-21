import React, { Component } from "react";
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
import { HashLink } from "react-router-hash-link";
import NoticeItem from "components/notice/NoticeItem";

//공지사항 페이지 main
class PostMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { lists: [] };
    this.remove = this.remove.bind(this);
  }
  componentDidMount() {
    fetch("/api/posts", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => this.setState({ lists: data }));
  }
  async remove(title) {
    await fetch(`/api/posts/${title}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      let updatedLists = [...this.state.lists].filter((i) => i.title !== title);
      this.setState({ lists: updatedLists });
    });
  }
  render() {
    const { lists } = this.state;

    return (
      <main>
        <TheHeader selectedNavItem={"notice"} />
        <MainContainer>
          <section className={styles.noticesection1}>
            <Caption>NOTICE</Caption>
            <Heading1 className={styles.noticeheader}>
              새소식을 <br /> 확인하세요
            </Heading1>
          </section>
          <section className={styles.noticesection2}>
            <NoticeNavStyle>
              <NoticeLi>
                <HashLink
                  to="/notice?category=main"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  언론 보도 내용
                </HashLink>
              </NoticeLi>
              <NoticeLi>
                <HashLink
                  to="/notice?category=jobs"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  채용정보
                </HashLink>
              </NoticeLi>
              <NoticeLi>
                <HashLink
                  to="/notice?category=news"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  회사소식
                </HashLink>
              </NoticeLi>
              <NoticeLi>
                <HashLink
                  to="/notice?category=awards"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  수상내역
                </HashLink>
              </NoticeLi>
              <NoticeLi>
                <HashLink
                  to="/notice?category=patent"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  특허사항
                </HashLink>
              </NoticeLi>
            </NoticeNavStyle>
          </section>
          <section className={styles.noticesection3}>
            <NoticeTable>
              <div className={styles.tabletop}>
                <NoticeTitle>제목</NoticeTitle>
                <NoticeDate>작성일</NoticeDate>
              </div>
              {lists.map((list) => {
                return (
                  <>
                    <NoticeItem
                      category={list.category}
                      title={list.title}
                      date={list.date}
                      key={list.title}
                    />
                  </>
                );
              })}
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
}
export default PostMainPage;
