import React from "react";
import styles from "./postwrite.module.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";
import { useState, useEffect } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import TheHeader from "components/TheHeader";
import TheFooter from "components/TheFooter";
import MainContainer from "components/common/MainContainer.js";

const PostWrite = () => {
  const OPTIONS = [
    { value: "news", name: "언론 보도 내용" },
    { value: "job", name: "채용정보" },
    { value: "company", name: "회사소식" },
    { value: "award", name: "수상내역" },
    { value: "patent", name: "특허사항" },
  ];
  const [PostContent, setPostContent] = useState({
    category: "news",
    title: "",
    content: "",
  });

  const submitPost = () => {
    axios
      .post("http://3.130.190.15:8080/api/posts", PostContent)
      .then(() => {
        alert("글이 작성되었습니다.");
      })
      .catch((error) => {
        console.log("오류가 발생했습니다.");
      });
  };

  const getValue = (e) => {
    const { name, value } = e.target;
    setPostContent({
      ...PostContent,
      [name]: value,
    });
    console.log(PostContent);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPostContent({
      ...PostContent,
      category: value,
    });
    console.log(PostContent);
  };

  return (
    <main>
      <TheHeader selectedNavItem={"notice"} />
      <MainContainer className={styles.Postboard}>
        <h1 className={styles.title}>게시글 작성</h1>
        <div className={styles.Postcontainer}>
          <div className={styles.formwrapper}>
            <div className={styles.head}>
              <input
                className={styles.titleinput}
                type="text"
                placeholder="제목"
                onChange={getValue}
                name="title"
              />
              <select
                className={styles.dropbox}
                onChange={handleChange}
                value={PostContent.category}
              >
                {OPTIONS.map((item) => (
                  <option value={item.value} key={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <CKEditor
              className={styles.editor}
              editor={ClassicEditor}
              data="<p>글을 입력하세요</p>"
              onReady={(editor) => {
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
                setPostContent({
                  ...PostContent,
                  content: data,
                });
                console.log(PostContent);
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />

            <button className={styles.submitbutton} onClick={submitPost}>
              저장하기
            </button>
          </div>
        </div>{" "}
      </MainContainer>
      <TheFooter></TheFooter>
    </main>
  );
};

export default PostWrite;
