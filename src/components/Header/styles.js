import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50%;
  padding: 24px 0;
  background: ${(props) => props.theme.colors.white};
  display: flex;
`;

export const SearchInput = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  > label {
    height: 28px;
    width: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.black};
    background: ${(props) => props.theme.colors.white};
    border: solid 1px ${(props) => props.theme.colors.lightGray};
    border-right: none;
    border-radius: 10px 0 0 10px;
  }

  > input {
    width: 60%;
    height: 28px;
    font-size: 12px;
    border: solid 1px ${(props) => props.theme.colors.lightGray};
    border-left: none;
    padding-right: 4px;
    border-radius: 0 10px 10px 0;
    outline: none;
  }
`;

export const TopMenu = styled.ul`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 42px;

  > li {
    list-style: none;
    font-size: 14px;
    cursor: pointer;
    opacity: 1;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Icons = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  gap: 16px;

  > svg {
    fill: ${(props) => props.theme.colors.orange};
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 50%;
    transition: all ease 0.2s;

    &:hover {
      fill: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.orange};
      transform: scale(1.2);
    }
  }
`;
