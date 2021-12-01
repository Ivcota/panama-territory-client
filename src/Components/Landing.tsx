import React from 'react';
import { Link } from 'react-router-dom';
import Button from './UI/Button';
import styles from './Styles/Landing.module.css';

const Landing = () => {
  return (
    <>
      <div className={styles.splash}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Territory App 2021</h1>
          <p className={styles.qoute}>This is a qoute</p>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill-opacity="1"
            d="M0,96L34.3,80C68.6,64,137,32,206,42.7C274.3,53,343,107,411,154.7C480,203,549,245,617,261.3C685.7,277,754,267,823,229.3C891.4,192,960,128,1029,85.3C1097.1,43,1166,21,1234,37.3C1302.9,53,1371,107,1406,133.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
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
