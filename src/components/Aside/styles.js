import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.whiteBg};
  border-right: solid 1px ${(props) => props.theme.colors.lightGray};
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const LogoArea = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px ${(props) => props.theme.colors.lightGray};
  cursor: pointer;

  > h1 {
    font-size: 22px;
    font-weight: 500;
    > span {
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.orange};
      padding: 2px 6px;
      border-radius: 4px;
    }
  }
`;

export const UserProfile = styled.div`
  flex: 1;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > hr {
    width: 80%;
    padding: 0 16px;
    background: ${(props) => props.theme.colors.orange};
    margin-bottom: 16px;
  }
`;

export const UserImg = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 8px;
  > img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const UserName = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 16px;
  > h3 {
    font-weight: 500;
  }
  > h4 {
    font-weight: 300;
    color: ${(props) => props.theme.colors.lightGray};
  }
`;

export const FollowInfo = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
  margin-bottom: 4px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(156px / 3);
    > p {
      color: ${(props) => props.theme.colors.lightGray};
      font-size: 12px;
    }
  }
`;

export const FollowBtn = styled.button`
  width: 80%;
  border: none;
  padding: 2px 0;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  margin-bottom: 16px;
  opacity: 1;
  transition: all ease 0.2s;
  &:hover {
    opacity: 0.8;
    width: 85%;
  }
`;

export const FollowButton = styled(FollowBtn)`
  color: ${(props) => props.theme.colors.orange};
  background-color: ${(props) => props.theme.colors.light};
`;

export const FollowingButton = styled(FollowBtn)`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.orange};
`;

export const Bio = styled.p`
  font-size: 10px;
  width: 80%;
  margin-bottom: 16px;
  /* text-align: center; */
`;

export const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 9px;
  width: 80%;
  margin-bottom: 16px;

  > div {
    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${(props) => props.theme.colors.black};
    }
  }
`;

export const BlockReport = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 12px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.lightGray};

  &:hover {
    color: ${(props) => props.theme.colors.orange};
  }
`;
