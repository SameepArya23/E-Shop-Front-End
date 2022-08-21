import "./login-address.styles.css";
import Button from "../buttons/buttons.component";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { async } from "@firebase/util";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const LoginAdressSection = () => {
  const { signUpOpen, setSignUpOpen, currentUser, loginOpen, setLoginOpen } =
    useContext(UserContext);
  const signUpFormOpenHandler = () => setSignUpOpen(!signUpOpen);
  const loginFormOpenHandler = () => setLoginOpen(!loginOpen);

  return (
    <div className="login-address-section">
      <span className="heading">Shipping and Payment</span>
      {currentUser ? (
        <div className="heading">
          You have successfully logged in to your account!{" "}
          <span className="log-out-link" onClick={signOutUser}>
            log out
          </span>
        </div>
      ) : (
        <div className="btn-container">
          <Button onClick={loginFormOpenHandler}>log in</Button>
          <Button buttonType={"inverted"} onClick={signUpFormOpenHandler}>
            sign up
          </Button>
        </div>
      )}
      <span className="sub-heading">Shipping information</span>
      <form className="address-form">
        <div className="side">
          <input className="input" type="email" placeholder="Email" />
          <input className="input" type="text" placeholder="First name" />
          <input className="input" type="text" placeholder="Last name" />
          <input className="input" type="tel" placeholder="Phone" />
        </div>

        <div className="side">
          <input className="input" type="text" placeholder="Address" />
          <input className="input" type="text" placeholder="City" />
          <input className="input" type="text" placeholder="Postal Code/ZIP" />
          <input className="input" type="text" placeholder="Poland" />
        </div>
      </form>
    </div>
  );
};

export default LoginAdressSection;
