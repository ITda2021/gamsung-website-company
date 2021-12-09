import palette from "lib/style/palette";
import styled from "styled-components";

const StyledCaption = styled.div`
  font-size: 1.6rem;
  line-height: 195%;
  color: ${(props) => props.color || palette.gray[1]};
  @media (max-width: 768px) {
    font-size: 1.4rem;
    line-height: 200%;
  }
  &:hover,
  &:focus {
    color: ${(props) => props.color || palette.gray[4]};
  }
`;

function Caption({ children, ...rest }) {
  return <StyledCaption {...rest}>{children}</StyledCaption>;
}

export default Caption;
