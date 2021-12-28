import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import TheHeader from "components/TheHeader";
import MainContainer from "components/common/MainContainer";
import NoticeDetailTitle from "components/notice/NoticeDetailTitle";
import NoticeDetailDate from "components/notice/NoticeDetailDate";
import styles from "./PostDetail.module.css";
import NoticeDetailTable from "components/notice/NoticeDetailTable";
import NoticeDetailContent from "components/notice/NoticeDetailContent";
import NoticeDetailButton from "components/notice/NoticeDetailButton";
import TheFooter from "components/TheFooter";
import Axios from "axios";
import { Link } from "react-router-dom";
import Button from "components/common/button";

//공지사항 세부페이지
function PostDetailPage() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await Axios.get(
        `http://3.130.190.15:8080/api/posts/${params.id}`
      );
      setPost(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const deletePost = () => {
    console.log("눌림");
    Axios.delete(`http://3.130.190.15:8080/api/posts/${post.seq}`);
  };

  if (loading) {
    return (
      <main>
        <TheHeader selectedNavItem={"notice"} />
        <MainContainer className={styles.loadingContainer}>
          <div className={styles.loading}>게시글을 불러오고 있습니다.</div>
          <div className={styles.loader}></div>
        </MainContainer>
      </main>
    );
  } else {
    return (
      <main>
        <TheHeader selectedNavItem={"notice"} />
        <MainContainer>
          <section className={styles.postdetailsection}>
            <NoticeDetailTable>
              <div className={styles.postdetailheader}>
                <NoticeDetailDate>
                  {post.created_at.slice(0, 10)}
                </NoticeDetailDate>
                <NoticeDetailTitle>{post.title}</NoticeDetailTitle>
              </div>
              <NoticeDetailContent
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></NoticeDetailContent>
            </NoticeDetailTable>
            <div className={styles.postdetailbtn}>
              <Link to={"/notice"}>
                <NoticeDetailButton>목록으로 돌아가기</NoticeDetailButton>
              </Link>
              <Link
                to={{
                  pathname: "/notice",
                }}
              >
                <button className={styles.delete} onClick={deletePost}>
                  삭제하기
                </button>
              </Link>
            </div>
          </section>
        </MainContainer>
        <TheFooter />
      </main>
    );
  }
}
export default PostDetailPage;
