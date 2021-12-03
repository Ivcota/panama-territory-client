import React from 'react';
import { Link } from 'react-router-dom';
import Button from './UI/Button';
import styles from './Styles/Landing.module.css';

const Landing = () => {
  return (
    <>
      <div className={styles.splash}>
        <div className={styles.gradient} />
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Territory App 2021</h1>
          <p className={styles.qoute}>This is a qoute</p>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <Link to="sign-in">
          <Button className={styles.btn} title="Enter" />
        </Link>
      </div>
    </>
  );
};

export default Landing;
