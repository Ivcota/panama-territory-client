import React, { useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useAuthStore } from "./../../Auth/authStore";
import { server } from "./../../Helpers/serverInfo";

import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import InputCard from "../Cards/InputCard";
import styles from "../Styles/SignIn.module.css";
import Input from "../UI/Input";
import Button from "./Button";

interface Props {
  className?: string;
  onClick?: () => void;
}

interface TokenResponse {
  token: string;
  username: string;
  email: string;
}

const SignIn: React.FC<Props> = (props) => {
  const loginUrl = `${server}/accounts/login/`;
  const navigate = useNavigate();
  const { setAuth, authenticated } = useAuthStore();

  useEffect(() => {
    if (authenticated) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line
  }, []);

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ email, password }) => {
      console.log(loginUrl);

      const loginInfo = {
        email: email.toLowerCase(),
        password,
      };

      try {
        const { token, email, username }: TokenResponse = await (
          await axios.post(loginUrl, loginInfo)
        ).data;
        // Log User details
        console.log({ token, email, username });
        alert(`${username}, you have been signed in with the token: ${token}.`);
        setAuth(username, email, token);

        navigate("/dashboard");
      } catch (error) {
        console.error("Unable to login with credentials");
        alert("Incorrect credentials. Try again.");
      }
    },
  });

  return (
    <InputCard className={`${props.className} ${styles.signIn}`}>
      <h1 className={styles.title}>Sign In</h1>
      <form onSubmit={handleSubmit} className={styles.inputContainer}>
        <Input
          icon={faAt}
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="on"
          required={true}
          value={values.email}
          onChange={handleChange}
        />
        <Input
          icon={faLock}
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="off"
          required={true}
          value={values.password}
          onChange={handleChange}
        />
        <Button className={styles.signInBtn} title="Sign In" />
      </form>
      <div className={styles.accountContainer}>
        <p className={styles.question}>Don't Have an Account?</p>
        <Button
          title="New Account"
          onClick={props.onClick}
          className={styles.cardFlipBtn}
        />
      </div>

      {/* <Link to="/about">About Page</Link> */}
    </InputCard>
  );
};

export default SignIn;
