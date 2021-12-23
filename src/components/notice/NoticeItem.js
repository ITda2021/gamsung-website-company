import React from "react";
import { Link } from "react-router-dom";
import NoticeTitle from "components/notice/NoticeTitle";
import NoticeDate from "components/notice/NoticeDate";

function NoticeItem({ id, title, date }) {
  return (
    <Link
      to={`/notice/${id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div>
        <NoticeTitle>{title}</NoticeTitle>
        <NoticeDate>{date}</NoticeDate>
      </div>
    </Link>
  );
}
export default NoticeItem;
