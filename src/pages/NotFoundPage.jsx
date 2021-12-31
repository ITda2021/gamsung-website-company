import React from "react";
import { Link } from "react-router-dom";
import TheHeader from "components/TheHeader";
import MainContainer from "components/common/MainContainer";
import styles from "./NotFoundPage.module.css";
import ErrorIcon from "img/ic_error.svg";

//공지사항 페이지 main
function NotFoundPage() {
  return (
    <div className={styles.div}>
      <TheHeader></TheHeader>
      <MainContainer className={styles.mainContainer}>
        <img className={styles.errorIcon} src={ErrorIcon} alt="에러 아이콘" />
        <div className={styles.title}>요청하신 페이지를 찾을 수 없습니다.</div>
        <div className={styles.subTitle}>
          입력한 주소가 잘못되었거나, 찾으시는 페이지가 존재하지 않습니다.
        </div>
        <Link to="/">
          <button className={styles.button}>메인페이지로 돌아가기</button>
        </Link>
      </MainContainer>
    </div>
  );
}
export default NotFoundPage;
