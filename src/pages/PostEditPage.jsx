import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./PostEditPage.module.css";
import Editor from "components/notice/EditorComponent";
import MainContainer from "components/common/MainContainer.js";

function PostEditPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const OPTIONS = [
    { value: "news", name: "언론 보도 내용" },
    { value: "job", name: "채용정보" },
    { value: "company", name: "회사소식" },
    { value: "award", name: "수상내역" },
    { value: "patent", name: "특허사항" },
  ];

  const [post, setPost] = useState({
    title: "",
    category: OPTIONS[0].value,
    content: "",
  });

  const onChange = (e) => {
    console.log("제목이나 카테고리 바뀜");
    const { value, name } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
    console.log(post);
  };

  const onChangeContent = (value) => {
    console.log("콘텐츠 바뀜");
    setPost(
      {
        ...post,
        content: value,
      },
      console.log(post)
    );
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    if (post.title.trim() === "" || post.content.trim() === "") {
      alert("내용을 입력해주세요.");
      return;
    }
    if (id) {
      axios.put(`http://localhost:8080/api/posts/${id}`, post).then(() => {
        alert("글이 수정되었습니다.");
        navigate("/notice");
      });
    } else {
      axios
        .post("http://3.130.190.15:8080/api/posts", {
          title: post.title,
          category: post.category,
          content: post.content,
        })
        .then(() => {
          alert("글이 저장되었습니다.");
          navigate("/notice");
        });
    }
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8080/api/posts/${id}`);
      setPost(response.data);
      console.log("=============");
      console.log(response.data);
      console.log("=============");
      console.log(post);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <div className={styles.postBoard}>
        <div className={styles.postBoardHeader}>
          <MainContainer className={styles.postBoardContainer}>
            <h1 className={styles.postBoardTitle}>게시글 작성</h1>
            <div className={styles.postBoardBtnContainer}>
              <button className={styles.cancelBtn} onClick={handleCancel}>
                취소
              </button>
              <button className={styles.submitBtn} onClick={handleSubmit}>
                저장
              </button>
            </div>
          </MainContainer>
        </div>
        <MainContainer>
          <div className={styles.postContainer}>
            <div className={styles.postHeader}>
              <div className={styles.postTitleContainer}>
                <label htmlFor="title">제목</label>
                <input
                  className={styles.postTitle}
                  type="text"
                  placeholder="제목을 입력해 주세요."
                  onChange={onChange}
                  name="title"
                  value={post.title}
                />
              </div>
              <div className={styles.postCategoryContainer}>
                <label htmlFor="category">카테고리</label>
                <select
                  className={styles.postCategory}
                  onChange={onChange}
                  value={post.category}
                  name="category"
                >
                  {OPTIONS.map((item) => (
                    <option value={item.value} key={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <Editor value={post.content} onChange={onChangeContent} />
          </div>
        </MainContainer>
      </div>
    </div>
  );
}

export default PostEditPage;
