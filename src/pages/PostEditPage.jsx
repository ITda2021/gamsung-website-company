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

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(OPTIONS[0].value);
  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    if (title.trim() === "" || content.trim() === "") {
      alert("내용을 입력해주세요.");
      return;
    }
    if (id) {
      axios
        .put(`http://www.gamsungsoft.com:8080/api/posts/${id}`, {
          title,
          category,
          content,
          created_at: createdAt.slice(0, 19).replace("T", " "),
        })
        .then(() => {
          alert("글이 수정되었습니다.");
          navigate("/notice");
        });
    } else {
      axios
        .post("http://www.gamsungsoft.com:8080/api/posts", {
          title,
          category,
          content,
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
      const response = await axios.get(
        `http://www.gamsungsoft.com:8080/api/posts/${id}`
      );
      setTitle(response.data.title);
      setCategory(response.data.category);
      setContent(response.data.content);
      setCreatedAt(response.data.created_at);
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
                  onChange={(e) => setTitle(e.target.value)}
                  name="title"
                  value={title}
                />
              </div>
              <div className={styles.postCategoryContainer}>
                <label htmlFor="category">카테고리</label>
                <select
                  className={styles.postCategory}
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
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
            <Editor
              value={content}
              onChange={(value) => {
                setContent(value);
              }}
            />
          </div>
        </MainContainer>
      </div>
    </div>
  );
}

export default PostEditPage;
