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

//공지사항 세부페이지
function PostDetailPage() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    Axios.get(`http://3.130.190.15:8080/api/posts/${params.id}`).then(
      (response) => {
        console.log(response);
        setPost(response.data);
      }
    );
    setLoading(false);
  }, []);

  if (loading) {
    return <div>loading</div>;
  } else {
    return (
      <main>
        <TheHeader selectedNavItem={"notice"} />
        <MainContainer>
          <section className={styles.postdetailsection}>
            <NoticeDetailTable>
              <div className={styles.postdetailheader}>
                <NoticeDetailDate>{post.modified_at}</NoticeDetailDate>
                <NoticeDetailTitle>{post.title}</NoticeDetailTitle>
              </div>
              <NoticeDetailContent>{post.content}</NoticeDetailContent>
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
                <NoticeDetailButton /*onClick={() => deletePost(query.title)}*/>
                  삭제하기
                </NoticeDetailButton>
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
