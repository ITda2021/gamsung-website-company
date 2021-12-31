import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import TheHeader from "components/TheHeader";
import MainContainer from "components/common/MainContainer";
import NoticeDetailTitle from "components/notice/NoticeDetailTitle";
import NoticeDetailDate from "components/notice/NoticeDetailDate";
import styles from "./PostDetailPage.module.css";
import NoticeDetailTable from "components/notice/NoticeDetailTable";
import NoticeDetailContent from "components/notice/NoticeDetailContent";
import NoticeDetailButton from "components/notice/NoticeDetailButton";
import TheFooter from "components/TheFooter";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//공지사항 세부페이지
function PostDetailPage() {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axios.get(
        `http://3.130.190.15:8080/api/posts/${id}`
      );
      setPost(response.data);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  const editPost = () => {
    navigate(`/notice/edit/${id}`);
  };

  const deletePost = () => {
    axios.delete(`http://3.130.190.15:8080/api/posts/${post.seq}`).then(() => {
      navigate(`/notice`);
    });
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
                <div className={styles.actionBtnsContainer}>
                  <button className={styles.editBtn} onClick={editPost}>
                    편집
                  </button>
                  <div></div>
                  <button className={styles.deleteBtn} onClick={deletePost}>
                    삭제
                  </button>
                </div>
              </div>
              <NoticeDetailContent
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></NoticeDetailContent>
            </NoticeDetailTable>
            <div className={styles.postdetailbtn}>
              <NoticeDetailButton onClick={() => navigate(`/notice`)}>
                목록으로 돌아가기
              </NoticeDetailButton>
            </div>
          </section>
        </MainContainer>
        <TheFooter />
      </main>
    );
  }
}
export default PostDetailPage;
