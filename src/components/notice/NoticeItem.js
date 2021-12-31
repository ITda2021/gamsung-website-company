import { React } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import palette from "lib/style/palette";

function NoticeItem({ id, title, date, category }) {
  const StyledNoticeItem = styled.div`
    cursor: pointer;
    padding: 1.6rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const StyledNoticeDate = styled.div`
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 161.8%;
    font-family: Montserrat;
    color: ${(props) => props.color || palette.gray[5]};
    @media (max-width: 960px) {
      display: none;
    }
  `;

  const StyledNoticeTitle = styled.div`
    width: 90%;
    font-size: 1.6rem;
    line-height: 160%;
    color: ${(props) => props.color || palette.gray[6]};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover {
      color: ${palette.gray[4]};
    }
    @media (max-width: 960px) {
      font-size: 1.3rem;
    }
  `;

  const navigate = useNavigate();

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

  return (
    <StyledNoticeItem onClick={() => navigate(`/notice/${id}`)}>
      {OPTIONS.map(({ value, name }) => {
        let categoryKR = "";
        if (category === value) {
          categoryKR = name;
          return (
            <StyledNoticeTitle>
              [{categoryKR}] {title}
            </StyledNoticeTitle>
          );
        }
      })}
      <StyledNoticeDate>{date}</StyledNoticeDate>
    </StyledNoticeItem>
  );
}
export default NoticeItem;
