import { Formik, Field, Form } from "formik";
import { Fragment, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import Button from "../buttons/buttons.component";

import "./sign-up-form.styles.css";

const Login = () => {
  const { currentUser, loginOpen, setLoginOpen } = useContext(UserContext);

  const loginToggleHandler = () => setLoginOpen(!loginOpen);

  const handleSubmit = async (value) => {
    const { email, password } = value;

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      //   setCurrentUser(user);
      setLoginOpen(false);
    } catch (error) {}
  };

  return (
    <Fragment>
      {!currentUser ? (
        <div className="background">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={handleSubmit}
          >
            <Form className="sign-up-form">
              <Field
                id="email"
                name="email"
                placeholder="Enter Email"
                type="email"
                className="input sign-up-input"
                required
              />

              <Field
                id="password"
                name="password"
                placeholder="Enter Password"
                type="password"
                className="input sign-up-input"
                required
              />

              <div className="sign-up-button-container">
                <Button type="submit">login</Button>
                <Button buttonType={"inverted"} onClick={loginToggleHandler}>
                  Cancel
                </Button>
              </div>
            </Form>
          </Formik>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Login;
