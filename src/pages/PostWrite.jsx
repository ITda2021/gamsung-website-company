import React from "react";
import styles from "./postwrite.module.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";
import { useState, useEffect } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

axios.defaults.withCredentials = true;

function PostWrite() {
  const OPTIONS = [
    { value: "media", name: "언론 보도 내용" },
    { value: "recruit", name: "채용정보" },
    { value: "notice", name: "회사소식" },
    { value: "awards", name: "수상내역" },
    { value: "patent", name: "특허사항" },
  ];
  const [PostContent, setPostContent] = useState({
    category: "media",
    title: "",
    content: "",
  });

  const [viewContent, setViewContent] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/posts").then((response) => {
      setViewContent(response.data);
    });
  }, [viewContent]);

  const submitPost = () => {
    axios
      .post("http://localhost:3000/api/posts", {
        category: PostWrite.category,
        title: PostWrite.title,
        content: PostWrite.data,
      })
      .then(() => {
        alert("저장됨");
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
    <div className={styles.Postboard}>
      <h1 className={styles.title}>게시글 작성</h1>
      <div className={styles.Postcontainer}>
        {viewContent.map((element) => (
          <div>
            <h2>{element.title}</h2>
            <div>{element.content}</div>
          </div>
        ))}

        <div className={styles.formwrapper}>
          <div className={styles.head}>
            <input
              className={styles.titleinput}
              type="text"
              placeholder="제목"
              onChange={getValue}
              name="title"
            />
            <select onChange={handleChange} value={PostContent.category}>
              {OPTIONS.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <CKEditor
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
            입력
          </button>
        </div>
      </div>{" "}
    </div>
  );
}

export default PostWrite;
