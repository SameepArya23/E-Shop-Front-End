import { useContext } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import Options from "./components/options/options.component";
import PaymentPage from "./components/payment-page/payment-page.component";
import SignUp from "./components/authentication/sign-up.component";
import { UserContext } from "./context/user.context";
import Login from "./components/authentication/login.component";

const App = () => {
  const { signUpOpen, loginOpen } = useContext(UserContext);
  return (
    <div className="app">
      {signUpOpen && <SignUp />}
      {loginOpen && <Login />}
      <Navbar />
      <PaymentPage />
      <Options />
    </div>
  );
};

export default App;
