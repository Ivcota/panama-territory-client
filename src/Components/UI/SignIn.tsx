import React from 'react';

import { faLock, faAt } from '@fortawesome/free-solid-svg-icons';
import styles from '../Styles/SignIn.module.css';
import InputCard from '../Cards/InputCard';
import Input from '../UI/Input';
import Button from './Button';

interface Props {
  className?: string;
  onClick?: () => void;
}

const SignIn: React.FC<Props> = (props) => {
  const testClick = () => {
    alert('Signed In!');
  };

  return (
    <InputCard className={`${props.className} ${styles.signIn}`}>
      <h1 className={styles.title}>Sign In</h1>
      <div className={styles.inputContainer}>
        <Input
          icon={faAt}
          type="email"
          placeholder="Email"
          name="user_email"
          autoComplete="on"
          required={true}
          iconStyle={styles.valid}
        />
        <Input
          icon={faLock}
          type="password"
          placeholder="Password"
          name="user_password"
          autoComplete="off"
          required={true}
        />
        <Button
          className={styles.signInBtn}
          title="Sign In"
          onClick={testClick}
        />
      </div>
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
