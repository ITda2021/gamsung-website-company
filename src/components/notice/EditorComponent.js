import React, { useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

function Editor({ value, onChange }) {
  const quillRef = useRef();

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      const config = {
        header: { "content-type": "multipart/form-data" },
      };
      formData.append("img", file);
      try {
        const result = await axios.post(
          "http://www.gamsungsoft.com:8080/api/img",
          formData,
          config
        );
        console.log("응답: ", result.data.url);
        const IMG_URL = result.data.url;
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(range, "image", IMG_URL);
      } catch (error) {
        console.log(error);
      }
    };
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  return (
    <div>
      <ReactQuill
        ref={quillRef}
        style={{ height: "600px" }}
        theme="snow"
        modules={modules}
        formats={formats}
        placeholder="내용을 입력하세요."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default Editor;
