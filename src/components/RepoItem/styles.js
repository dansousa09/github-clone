import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  background: ${(props) => props.theme.colors.grayBg};
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all ease 0.2s;
  transform: scale(0.95);
  &:hover {
    transform: scale(1);
  }
`;

export const RepoTitle = styled.h5`
  height: 20%;

  color: ${(props) => props.theme.colors.orange};
  font-size: 11px;
  margin-bottom: 6px;
`;
export const RepoOverview = styled.p`
  height: 60%;
  font-size: 8px;
  color: ${(props) => props.theme.colors.black};
`;

export const RepoStacks = styled.div`
  flex: 1;
  position: relative;
  bottom: 0;
  font-size: 8px;
  color: blue;
`;
