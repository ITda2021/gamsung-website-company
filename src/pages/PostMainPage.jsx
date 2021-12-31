import React, { useState, useEffect } from "react";
import Axios from "axios";
import classNames from "classnames/bind";
import TheHeader from "components/TheHeader";
import Caption from "components/common/Caption.js";
import MainContainer from "components/common/MainContainer";
import Heading1 from "components/common/Heading1";
import NoticeNavStyle from "components/notice/NoticeNavStyle";
import NoticeLi from "components/notice/NoticeLi";
import styles from "./PostMainPage.module.css";
import NoticeTable from "components/notice/NoticeTable";
import NoticePage from "components/notice/NoticePageCount";
import TheFooter from "components/TheFooter";
import NoticeItem from "components/notice/NoticeItem";
import NoPost from "components/notice/NoPost";

//공지사항 페이지 main
function PostMainPage() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(true);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);

  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);
  const cx = classNames.bind(styles);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const totalPage = Math.ceil(posts.length / postsPerPage);

  const changeBtnStateWithPage = (pageNum) => {
    if (pageNum === 1) {
      setIsPrevButtonDisabled(true);
      setIsNextButtonDisabled(false);
    } else if (pageNum === totalPage) {
      setIsPrevButtonDisabled(false);
      setIsNextButtonDisabled(true);
    } else {
      setIsPrevButtonDisabled(false);
      setIsNextButtonDisabled(false);
    }
  };

  const currentPosts = (tmp) => {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  const nextPage = () => {
    if (currentPage + 1 <= totalPage) {
      setCurrentPage(currentPage + 1);
      changeBtnStateWithPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage - 1 >= 1) {
      setCurrentPage(currentPage - 1);
      changeBtnStateWithPage(currentPage - 1);
    }
  };

  const handler = (value) => {
    Axios.get(`http://3.130.190.15:8080/api/posts?category=${value}`).then(
      (response) => {
        setCategory(value);
        setCurrentPage(1);
        setPosts(response.data.reverse());
        setCurrentClick(value);
      }
    );
  };

  useEffect(() => {
    Axios.get(`http://3.130.190.15:8080/api/posts`).then((response) => {
      setPosts(response.data.reverse());
    });
  }, []);

  useEffect(
    (e) => {
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        // console.log(current);
        current.style.fontWeight = "bold";
      }

      if (prevClick !== null) {
        let prev = document.getElementById(prevClick);
        prev.style.fontWeight = "normal";
      }
      setPrevClick(currentClick);
    },
    [currentClick]
  );

  return (
    <main>
      <TheHeader selectedNavItem={"notice"} />
      <div className={styles.background}>
        <MainContainer>
          <section className={styles.noticesection1}>
            <Caption>NOTICE</Caption>
            <Heading1>
              새소식을 <br /> 확인하세요
            </Heading1>
          </section>
        </MainContainer>
      </div>
      <MainContainer>
        <section className={styles.noticesection2}>
          <NoticeNavStyle>
            <NoticeLi>
              <div
                id="news"
                onClick={() => handler("news")}
                style={{ textDecoration: "none", color: "black" }}
              >
                언론 보도 내용
              </div>
            </NoticeLi>
            <NoticeLi>
              <div
                id="job"
                onClick={() => handler("job")}
                style={{ textDecoration: "none", color: "black" }}
              >
                채용정보
              </div>
            </NoticeLi>
            <NoticeLi>
              <div
                id="company"
                onClick={() => handler("company")}
                style={{ textDecoration: "none", color: "black" }}
              >
                회사소식
              </div>
            </NoticeLi>
            <NoticeLi>
              <div
                id="award"
                onClick={() => handler("award")}
                style={{ textDecoration: "none", color: "black" }}
              >
                수상내역
              </div>
            </NoticeLi>
            <NoticeLi>
              <div
                id="patent"
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
              <div>제목</div>
              <div>작성일</div>
            </div>
            {currentPosts(posts).length === 0 ? (
              <NoPost />
            ) : (
              currentPosts(posts).map((post) => {
                return (
                  <NoticeItem
                    key={post.seq}
                    id={post.seq}
                    title={post.title}
                    date={post.created_at.slice(0, 10)}
                    category={post.category}
                  ></NoticeItem>
                );
              })
            )}
          </NoticeTable>
          <div className={styles.noticepagebar}>
            <button className={cx("prevpage")} onClick={prevPage}>
              <span
                className={cx("prevpageArrow", {
                  buttonDisable: isPrevButtonDisabled,
                })}
              ></span>
            </button>
            <NoticePage>
              {currentPage}/{totalPage === 0 ? 1 : totalPage}
            </NoticePage>
            <button className={cx("nextpage")} onClick={nextPage}>
              <span
                className={cx("nextpageArrow", {
                  buttonDisable: isNextButtonDisabled,
                })}
              ></span>
            </button>
          </div>
        </section>
      </MainContainer>
      <TheFooter />
    </main>
  );
}
export default PostMainPage;
