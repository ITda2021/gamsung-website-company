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

import TheFooter from "components/TheFooter";
import NoticeItem from "components/notice/NoticeItem";

//공지사항 페이지 main
function PostMainPage() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPosts = (tmp) => {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  const totalPage = Math.ceil(posts.length / postsPerPage);
  const nextPage = () => {
    if (currentPage + 1 > totalPage) alert("마지막 페이지 입니다.");
    else setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage - 1 < 1) alert("첫번째 페이지 입니다.");
    else setCurrentPage(currentPage - 1);
  };
  const handler = (value) => {
    setCategory(value);
    Axios.get(`http://3.130.190.15:8080/api/posts?category=${category}`).then(
      (response) => {
        setPosts(response.data.reverse());
      }
    );
  };

  useEffect(() => {
    Axios.get(`http://3.130.190.15:8080/api/posts`).then((response) => {
      setPosts(response.data.reverse());
      currentPosts(posts);
    });
  }, []);

  return (
    <div className={styles.background}>
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
                  onClick={() => handler("company")}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  회사소식
                </div>
              </NoticeLi>
              <NoticeLi>
                <div
                  onClick={() => handler("award")}
                  className={styles.noticeli}
                >
                  수상내역
                </div>
              </NoticeLi>
              <NoticeLi>
                <div
                  onClick={() => handler("patent")}
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
              {currentPosts(posts).map((post) => {
                return (
                  <NoticeItem
                    key={post.seq}
                    id={post.seq}
                    title={post.title}
                    date={post.created_at.slice(0, 10)}
                    category={post.category}
                  ></NoticeItem>
                );
              })}
            </NoticeTable>
            <div className={styles.noticepagebar}>
              <button className={styles.prevpage} onClick={prevPage}>
                <span className={styles.prevpageSpan}></span>
              </button>
              <NoticePage>
                {currentPage}/{totalPage}
              </NoticePage>
              <button className={styles.nextpage} onClick={nextPage} />
            </div>
          </section>
        </MainContainer>
        <TheFooter />
      </main>
    </div>
  );
}
export default PostMainPage;
