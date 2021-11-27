import React from "react";
import { Link } from "react-router-dom";

function TheHeader() {
  return (
    <div>
      <h1>헤더</h1>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">회사 소개</Link>
        </li>
        <li>
          <Link to="/service">서비스 소개</Link>
        </li>
        <li>
          <Link to="/notice">공지사항</Link>
        </li>
      </ul>
    </div>
  );
}

export default TheHeader;
