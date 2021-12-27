import { React } from "react";
import { Link } from "react-router-dom";
import NoticeTitle from "components/notice/NoticeTitle";
import NoticeDate from "components/notice/NoticeDate";
import styles from "pages/PostMain.module.css";

function NoticeItem({ id, title, date, category }) {
  const OPTIONS = [
    {
      value: "news",
      name: "언론 보도 내용",
    },
    { value: "job", name: "채용정보" },
    { value: "company", name: "회사소식" },
    { value: "award", name: "수상내역" },
    { value: "patent", name: "특허사항" },
  ];

  const callback = ({ value, name }) => {
    if (category === value) return name;
  };

  return (
    <Link to={`/notice/${id}`}>
      <div className={styles.noticeList}>
        {OPTIONS.map(({ value, name }) => {
          let categoryKR = "";
          if (category === value) {
            categoryKR = name;
            return (
              <NoticeTitle className={styles.noticeli}>
                [{categoryKR}] {title}
              </NoticeTitle>
            );
          }
        })}

        <NoticeDate>{date}</NoticeDate>
      </div>
    </Link>
  );
}
export default NoticeItem;
