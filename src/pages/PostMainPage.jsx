import React, { useState, useEffect } from "react";
import Axios from "axios";
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
import NoticeItem from "components/notice/NoticeItem";

//공지사항 페이지 main
function PostMainPage() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState();

  const handler = (value) => {
    setCategory(value);
    Axios.get(`http://3.130.190.15:8080/api/posts?category=${category}`).then(
      (response) => {
        setPosts(response.data);
      }
    );
  };

  useEffect(() => {
    Axios.get(`http://3.130.190.15:8080/api/posts`).then((response) => {
      setPosts(response.data);
    });
  }, []);

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
              <div
                onClick={() => handler("news")}
                style={{ textDecoration: "none", color: "black" }}
              >
                언론 보도 내용
              </div>
            </NoticeLi>
            <NoticeLi>
              <div
                onClick={() => handler("job")}
                style={{ textDecoration: "none", color: "black" }}
              >
                채용정보
              </div>
            </NoticeLi>
            <NoticeLi>
              <div
                onClick={() => handler("news")}
                style={{ textDecoration: "none", color: "black" }}
              >
                회사소식
              </div>
            </NoticeLi>
            <NoticeLi>
              <div
                onClick={() => handler("news")}
                style={{ textDecoration: "none", color: "black" }}
              >
                수상내역
              </div>
            </NoticeLi>
            <NoticeLi>
              <div
                onClick={() => handler("news")}
                style={{ textDecoration: "none", color: "black" }}
              >
                특허사항
              </div>
            </NoticeLi>
          </NoticeNavStyle>
        </section>
        <section className={styles.noticesection3}>
          <NoticeTable>
            <div className={styles.tabletop}>
              <NoticeTitle>제목</NoticeTitle>
              <NoticeDate>작성일</NoticeDate>
            </div>
            {posts.map((post) => {
              return (
                <NoticeItem
                  key={post.seq}
                  id={post.seq}
                  title={post.title}
                  category={post.category}
                  date={post.created_at}
                ></NoticeItem>
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
export default PostMainPage;
