import React from "react";
import { Link } from "react-router-dom";
import NoticeTitle from "components/notice/NoticeTitle";
import NoticeDate from "components/notice/NoticeDate";

function NoticeItem({ category, title, date }) {
  if (category === "main") {
    return (
      <Link
        to={{
          pathname: "/notice?category=main",
          search: `?title=${title}`,
        }}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div>
          <NoticeTitle>{title}</NoticeTitle>
          <NoticeDate>{date}</NoticeDate>
        </div>
      </Link>
    );
  } else if (category === "jobs") {
    return (
      <Link
        to={{
          pathname: "/notice?category=jobs",
          search: `?title=${title}`,
        }}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div>
          <NoticeTitle>{title}</NoticeTitle>
          <NoticeDate>{date}</NoticeDate>
        </div>
      </Link>
    );
  } else if (category === "news") {
    return (
      <Link
        to={{
          pathname: "/notice?category=news",
          search: `?title=${title}`,
        }}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div>
          <NoticeTitle>{title}</NoticeTitle>
          <NoticeDate>{date}</NoticeDate>
        </div>
      </Link>
    );
  } else if (category === "awards") {
    return (
      <Link
        to={{
          pathname: "/notice?category=awards",
          search: `?title=${title}`,
        }}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div>
          <NoticeTitle>{title}</NoticeTitle>
          <NoticeDate>{date}</NoticeDate>
        </div>
      </Link>
    );
  } else if (category === "patent") {
    return (
      <Link
        to={{
          pathname: "/notice?category=patent",
          search: `?title=${title}`,
        }}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div>
          <NoticeTitle>{title}</NoticeTitle>
          <NoticeDate>{date}</NoticeDate>
        </div>
      </Link>
    );
  }
}
export default NoticeItem;
