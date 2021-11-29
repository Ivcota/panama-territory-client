import React from 'react';
import { Link } from 'react-router-dom';
import InputCard from './Cards/InputCard';
import styles from './Styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <InputCard className={styles.login}>
        <h1>Home Page</h1>
        <p>The landing page of the Territory App 😊</p>
        <Link to="/about">About Page</Link>
      </InputCard>
    </div>
  );
};

export default Home;
