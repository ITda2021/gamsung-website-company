import React, { useState, useEffect } from "react";
import TheHeader from "components/TheHeader";
import MainContainer from "components/common/MainContainer";
import NoticeDetailTitle from "components/notice/NoticeDetailTitle";
import NoticeDetailDate from "components/notice/NoticeDetailDate";
import styles from "./PostDetail.module.css";
import NoticeDetailTable from "components/notice/NoticeDetailTable";
import NoticeDetailContent from "components/notice/NoticeDetailContent";
import NoticeDetailButton from "components/notice/NoticeDetailButton";
import TheFooter from "components/TheFooter";
import axios from "axios";
import qs from "qs";
import { Link } from "react-router-dom";

//공지사항 세부페이지
export function useFetch(url, title) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {
    await axios.get(`${url}?title=${title}`).then((response) => {
      //console.log(response);
      setData(response.data);
    });
    setLoading(false);
  }
  useEffect(() => {
    if (title) {
      //console.log("title: " + title);
      fetchUrl();
    } else {
      //console.log("no data");
      setData(null);
      setLoading(false);
    }
  }, []);
  return [data, loading];
}

export function useFetch2(url) {
  const [data, setData] = useState([]);
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return data;
}

const PostDetailPage = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log(location);
  const [data, loading] = useFetch("/api/posts", query.title);
  const boardData = useFetch2("/api/posts");
  const deletePost = (title) => {
    fetch(`/api/posts/${title}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      [...boardData].filter((i) => i.title !== title);
    });
  };
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
                <NoticeDetailDate>{data.date}</NoticeDetailDate>
                <NoticeDetailTitle>{data.title}</NoticeDetailTitle>
              </div>
              <NoticeDetailContent>{data.content}</NoticeDetailContent>
            </NoticeDetailTable>
            <div className={styles.postdetailbtn}>
              <Link
                to={{
                  pathname: "/notice",
                }}
              >
                <NoticeDetailButton>목록으로 돌아가기</NoticeDetailButton>
              </Link>
              <Link
                to={{
                  pathname: "/notice",
                }}
              >
                <NoticeDetailButton onClick={() => deletePost(query.title)}>
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
};
export default PostDetailPage;
