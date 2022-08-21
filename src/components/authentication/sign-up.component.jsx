import { Formik, Field, Form } from "formik";
import { Fragment, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import Button from "../buttons/buttons.component";

import "./sign-up-form.styles.css";

const SignUp = () => {
  const { currentUser, signUpOpen, setSignUpOpen } = useContext(UserContext);

  const signUpToggleHandler = () => setSignUpOpen(!signUpOpen);

  const handleSubmit = async (value) => {
    const { displayName, email, password, confirmPassword } = value;

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      await createAuthUserWithEmailAndPassword(email, password, displayName);

      setSignUpOpen(false);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <Fragment>
      {!currentUser ? (
        <div className="background">
          <Formik
            initialValues={{
              displayName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={handleSubmit}
          >
            <Form className="sign-up-form">
              <Field
                id="name"
                name="displayName"
                placeholder="Enter Name"
                className="input sign-up-input"
                required
              />

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

              <Field
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                className="input sign-up-input"
                required
              />
              <div className="sign-up-button-container">
                <Button type="submit">Submit</Button>
                <Button buttonType={"inverted"} onClick={signUpToggleHandler}>
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

export default SignUp;
