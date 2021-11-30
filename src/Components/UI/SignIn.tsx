import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import InputCard from "../Cards/InputCard";
import styles from "../Styles/SignIn.module.css";
import Input from "../UI/Input";
import { server } from "./../../Helpers/serverInfo";
import Button from "./Button";

interface Props {
  className?: string;
  onClick?: () => void;
}

const SignIn: React.FC<Props> = (props) => {
  const loginUrl = `${server}/accounts/login/`;

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ email, password }) => {
      console.log(loginUrl);

      try {
        const res = await axios.post(loginUrl, {
          email,
          password,
        });

        console.log(res.data);
      } catch (error) {
        console.log(error);
      }

      alert(email + " " + password);
      alert("Signed In!");
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
