import React from "react";
import styled from "styled-components";
import palette from "lib/style/palette";

function NoPost() {
  return <StyledNoPost>게시글이 없습니다.</StyledNoPost>;
}
const StyledNoPost = styled.div`
  width: 100%;
  margin: 0 auto;
  font-family: Noto Sans KR;
  font-size: 1.4rem;
  line-height: 2.5rem;
  padding: 11rem 0rem;
  text-align: center;
`;

export default NoPost;
