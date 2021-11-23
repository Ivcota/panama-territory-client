import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>About Panama Territory App</h1>
      <p>
        This territory app is build with React for the frontend and Django for
        the backend.
      </p>
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default About;
