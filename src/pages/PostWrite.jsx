import React from "react";
import styles from "./postwrite.module.css";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PostWrite() {
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
      .post("http://3.130.190.15:8080/api/posts", {
        category: PostContent.category,
        title: PostContent.title,
        content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
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

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div className={styles.Postboard}>
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
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
            placeholder="내용을 작성해주세요."
            data="글을 입력하세요"
            localization={{
              locale: "ko",
            }}
            className={styles.editor}
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
          />
          <Link to={"/notice"}>
            <button className={styles.submitbutton} onClick={submitPost}>
              저장하기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostWrite;
