import React from 'react';

import { faLock, faAt, faUser } from '@fortawesome/free-solid-svg-icons';
import { Congregations } from '../../Helpers/Congregations';
import styles from '../Styles/NewAcc.module.css';
import InputCard from '../Cards/InputCard';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
  onClick?: () => void;
}

const NewAcc: React.FC<Props> = (props) => {
  const testClick = () => {
    alert('Signed In!');
  };

  return (
    <InputCard className={`${props.className} ${styles.newAcc}`}>
      <h1 className={styles.title}>New Account</h1>
      <div className={styles.inputContainer}>
        <Input
          icon={faUser}
          type="text"
          name="user_name"
          label="Full Name"
          autoComplete="on"
          required={true}
        />
        <Input
          icon={faAt}
          type="email"
          name="user_email"
          label="Email"
          autoComplete="on"
          required={true}
        />
        <Input
          icon={faLock}
          type="password"
          name="user_password"
          label="Password"
          autoComplete="off"
          required={true}
        />

        <select className={styles.congSelect} name="user_cong">
          <option value="NONE">CONGREGATION</option>
          {Congregations.map((congregation) => (
            <option value={congregation.congName}>
              {congregation.congName}
            </option>
          ))}
        </select>

        <Button
          className={styles.newAccBtn}
          title="Create Account"
          onClick={testClick}
        />
        <Link className={styles.link} to="/">
          Landing Page
        </Link>
      </div>
      <div className={styles.accountContainer}>
        <p className={styles.question}>Already Have an Account?</p>
        <Button
          title="Sign In"
          onClick={props.onClick}
          className={styles.cardFlipBtn}
        />
      </div>

      {/* <Link to="/about">About Page</Link> */}
    </InputCard>
  );
};

export default NewAcc;
