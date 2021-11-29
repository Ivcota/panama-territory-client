import React from 'react';

import styles from '../Styles/SignIn.module.css';
import InputCard from '../Cards/InputCard';

interface Props {
  className?: string;
}

const SignIn: React.FC<Props> = (props) => {
  return (
    <InputCard className={`${props.className} ${styles.signIn}`}>
      <h1 className={styles.title}>Sign In</h1>
      <div className={styles.inputContainer}>
        <input type="email" />
        <input type="password" />
        <button>Sign In</button>
      </div>
      <div className={styles.accountContainer}>
        <p>Don't Have an Account?</p>
        <button>New Account</button>
      </div>

      {/* <Link to="/about">About Page</Link> */}
    </InputCard>
  );
};

export default SignIn;
