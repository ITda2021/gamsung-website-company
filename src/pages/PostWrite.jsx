import React, { useEffect, useState, useRef } from "react";
import styles from "./postwrite.module.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import axios from "axios";
import styled from "styled-components";
const MyBlock = styled.div`
  .wrapper-class {
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  .editor {
    height: 500px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;
const IntroduceContent = styled.div`
  position: relative;
  border: 0.0625rem solid #d7e2eb;
  border-radius: 0.75rem;
  overflow: hidden;
  padding: 1.5rem;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 4rem;
`;
function PostWrite() {
  const OPTIONS = [
    { value: "news", name: "언론 보도 내용" },
    { value: "job", name: "채용정보" },
    { value: "company", name: "회사소식" },
    { value: "award", name: "수상내역" },
    { value: "patent", name: "특허사항" },
  ];
  const [imgBase64, setImgBase64] = useState([]); // 파일 base64
  const [imgFile, setImgFile] = useState(null);
  const fd = new FormData();
  const [PostContent, setPostContent] = useState({
    category: "news",
    title: "",
    content: "",
    image: "",
  });

  const submitPost = () => {
    Object.values(imgFile).forEach((file) => fd.append("file", file));
    axios
      .post("http://3.130.190.15:8080/api/posts", {
        category: PostContent.category,
        title: PostContent.title,
        content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        image: PostContent.image,
      })
      .then(() => {
        alert("저장됨");
        console.log(PostContent);
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

  const rendered = useRef(false);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const htmlToEditor = ` `;
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  const editorToHTML = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );
  <IntroduceContent dangerouslySetInnerHTML={{ __html: editorToHTML }} />;

  useEffect(() => {
    if (rendered.current) return;
    rendered.current = true;
    const blocksFromHtml = htmlToDraft(htmlToEditor);
    if (blocksFromHtml) {
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
  }, [htmlToEditor]);

  const handleChangeFile = (event) => {
    console.log(event.target.files);
    setImgFile(event.target.files);
    setPostContent({
      ...PostContent,
      image: event.target.files,
    });
    //fd.append("file", event.target.files)
    setImgBase64([]);
    for (var i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onloadend = () => {
          // 2. 읽기가 완료되면 아래코드가 실행됩니다.
          const base64 = reader.result;
          console.log(base64);
          if (base64) {
            //  images.push(base64.toString())
            var base64Sub = base64.toString();

            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
            //  setImgBase64(newObj);
            // 파일 base64 상태 업데이트
            //  console.log(images)
          }
        };
      }
    }
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
          <MyBlock>
            <Editor
              editorState={editorState}
              wrapperClassName="wrapper-class"
              editorClassName="editor"
              toolbarClassName="toolbar-class"
              toolbar={{
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: false },
              }}
              placeholder="내용을 작성해주세요."
              data="내용을 작성해주세요."
              localization={{
                locale: "ko",
              }}
              className={styles.editor}
              onEditorStateChange={onEditorStateChange}
            />

            <input
              type="file"
              id="file"
              onChange={handleChangeFile}
              multiple="multiple"
            />
            {imgBase64.map((item) => {
              return (
                <img src={item} alt="First slide" style={{ width: "100%" }} />
              );
            })}
            <button className={styles.submitbutton} onClick={submitPost}>
              저장하기
            </button>
          </MyBlock>
        </div>
      </div>
    </div>
  );
}
export default PostWrite;
