import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Cart } from "../../assets/shopping_cart.svg";
import { ReactComponent as Profile } from "../../assets/profile.svg";
import logo from "../../assets/e-logo.jpg";
import {
  NavContainer,
  LogoContainer,
  CategoriesContainer,
  Category,
  NavLink,
  OptionsContainer,
  Logo,
} from "./navbar.styles";

const Navbar = () => {
  const style = {
    color: "#F4EB00",
  };
  return (
    <NavContainer>
      <LogoContainer>
        <Logo src={logo} alt="logo" />
        <span style={style}>E-</span>
        <span>Shop</span>
      </LogoContainer>

      <CategoriesContainer>
        <Category>Men</Category>
        <Category>Women</Category>
        <Category>Kids</Category>
      </CategoriesContainer>

      <OptionsContainer>
        <NavLink>
          <Search />
        </NavLink>
        <NavLink>
          <Cart />
        </NavLink>
        <NavLink>
          <Profile />
        </NavLink>
      </OptionsContainer>
    </NavContainer>
  );
};

export default Navbar;
