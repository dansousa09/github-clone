import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.whiteBg};
  padding: 32px;
  flex: 1;

  overflow: hidden;
`;

export const ContentTitle = styled.div`
  margin-bottom: 16px;
`;

export const RepoList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;

  height: 100%;
  padding-right: 32px;
  padding-bottom: 32px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.orange};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.lightGray};
  }
`;
