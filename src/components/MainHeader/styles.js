import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.orange};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
