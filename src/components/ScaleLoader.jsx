import SyncLoader from "react-spinners/SyncLoader";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = () => {
  return (
    <Flex>
      <SyncLoader
        size={30}
        height="7rem"
        width="3.2rem"
        color="#949597"
        radius="0.8rem"
      />
    </Flex>
  );
};

export default Spinner;
