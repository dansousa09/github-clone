import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex: 1;
  padding: 24px 0;
  background: ${(props) => props.theme.colors.white};
`;

export const NavCategories = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 56px;
  > li {
    list-style: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.black};
    opacity: 1;
    transition: all ease 0.4s;

    &:hover {
      opacity: 0.8;
      font-size: 18px;
    }
  }

  .activedNav {
    color: ${(props) => props.theme.colors.orange};
    font-weight: 500;

    &::after {
      content: "";
      display: block;
      width: 100%;
      border-bottom: 4px solid ${(props) => props.theme.colors.orange};
      border-radius: 24px;
    }
  }
`;
