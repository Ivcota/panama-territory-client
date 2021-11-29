import React from 'react';

import styles from '../Styles/NewAcc.module.css';
import InputCard from '../Cards/InputCard';

interface Props {
  className?: string;
  onClick?: () => void;
}

const NewAcc: React.FC<Props> = (props) => {
  return (
    <InputCard className={`${props.className} ${styles.newAcc}`}>
      <h1 className={styles.title}>New Account</h1>
      <div className={styles.inputContainer}>
        <input type="email" />
        <input type="password" />
        <button>Sign In</button>
      </div>
      <div className={styles.accountContainer}>
        <p>Already Have an Account?</p>
        <button onClick={props.onClick}>Sign In</button>
      </div>

      {/* <Link to="/about">About Page</Link> */}
    </InputCard>
  );
};

export default NewAcc;
