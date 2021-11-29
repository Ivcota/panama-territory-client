import React, { useState } from 'react';

import styles from './Styles/Home.module.css';
import NewAcc from './UI/NewAcc';
import SignIn from './UI/SignIn';

const Home = () => {
  const [cardFlip, setCardFlip] = useState(true);

  const toggleCardFlip = () => {
    setCardFlip(!cardFlip);
  };

  return (
    <div className={styles.home}>
      <SignIn
        onClick={toggleCardFlip}
        className={cardFlip ? `${styles.signIn}` : `${styles.signInFlip}`}
      />
      <NewAcc
        onClick={toggleCardFlip}
        className={cardFlip ? `${styles.newAcc}` : `${styles.NewAccFlip}`}
      />
    </div>
  );
};

export default Home;
