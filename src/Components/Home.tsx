import React from 'react';

import styles from './Styles/Home.module.css';
import SignIn from './UI/SignIn';

const Home = () => {
  return (
    <div className={styles.home}>
      <SignIn className={styles.signIn} />
    </div>
  );
};

export default Home;
