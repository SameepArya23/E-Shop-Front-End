import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  width: 90%;
  border-bottom: 1px solid rgb(185, 185, 185);
`;

export const LogoContainer = styled.span`
  font-size: large;
  font-weight: 500;
  width: 20%;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 30px;
  height: 24px;
  margin-right: 5px;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20%;
`;

export const Category = styled.span`
  font-size: large;
  font-weight: 500;
  color: rgb(98, 98, 98);
  cursor: pointer;
  &:hover {
    color: rgb(39, 39, 39);
  }
`;

export const OptionsContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavLink = styled.span`
  cursor: pointer;
`;
